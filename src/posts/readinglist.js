'use strict';

const db = require('../database');
const plugins = require('../plugins');

module.exports = function (Posts) {
    Posts.readinglist = async function (pid, uid) {
        return await toggleReadinglist('readinglist', pid, uid);
    };

    Posts.unreadinglist = async function (pid, uid) {
        return await toggleReadinglist('unreadinglist', pid, uid);
    };

    async function toggleReadinglist(type, pid, uid) {
        if (parseInt(uid, 10) <= 0) {
            throw new Error('[[error:not-logged-in]]');
        }

        const isReadinglisting = type === 'readinglist';

        const [postData, hasReadinglisted] = await Promise.all([
            Posts.getPostFields(pid, ['pid', 'uid']),
            Posts.hasReadinglisted(pid, uid),
        ]);

        if (isReadinglisting && hasReadinglisted) {
            throw new Error('[[error:already-readinglisted]]');
        }

        if (!isReadinglisting && !hasReadinglisted) {
            throw new Error('[[error:already-unreadinglisted]]');
        }

        if (isReadinglisting) {
            await db.sortedSetAdd(`uid:${uid}:readinglists`, Date.now(), pid);
        } else {
            await db.sortedSetRemove(`uid:${uid}:readinglists`, pid);
        }
        await db[isReadinglisting ? 'setAdd' : 'setRemove'](`pid:${pid}:users_readinglisted`, uid);
        postData.readinglists = await db.setCount(`pid:${pid}:users_readinglisted`);
        await Posts.setPostField(pid, 'readinglists', postData.readinglists);

        plugins.hooks.fire(`action:post.${type}`, {
            pid: pid,
            uid: uid,
            owner: postData.uid,
            current: hasReadinglisted ? 'readinglisted' : 'unreadinglisted',
        });

        return {
            post: postData,
            isReadinglisted: isReadinglisting,
        };
    }

    Posts.hasReadinglisted = async function (pid, uid) {
        if (parseInt(uid, 10) <= 0) {
            return Array.isArray(pid) ? pid.map(() => false) : false;
        }

        if (Array.isArray(pid)) {
            const sets = pid.map(pid => `pid:${pid}:users_readinglisted`);
            return await db.isMemberOfSets(sets, uid);
        }
        return await db.isSetMember(`pid:${pid}:users_readinglisted`, uid);
    };
};
