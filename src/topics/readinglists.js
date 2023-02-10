
'use strict';

const async = require('async');

const db = require('../database');
const user = require('../user');

module.exports = function (Topics) {
    Topics.getUserReadinglist = async function (tid, uid) {
        if (parseInt(uid, 10) <= 0) {
            return null;
        }
        return await db.sortedSetScore(`tid:${tid}:readinglists`, uid);
    };

    Topics.getUserReadinglists = async function (tids, uid) {
        if (parseInt(uid, 10) <= 0) {
            return tids.map(() => null);
        }
        return await db.sortedSetsScore(tids.map(tid => `tid:${tid}:readinglists`), uid);
    };

    Topics.setUserReadinglist = async function (tid, uid, index) {
        await db.sortedSetAdd(`tid:${tid}:readinglists`, index, uid);
    };

    Topics.getTopicReadinglists = async function (tid) {
        return await db.getSortedSetRangeWithScores(`tid:${tid}:readinglists`, 0, -1);
    };

    Topics.updateTopicReadinglists = async function (tid, pids) {
        const maxIndex = await Topics.getPostCount(tid);
        const indices = await db.sortedSetRanks(`tid:${tid}:posts`, pids);
        const postIndices = indices.map(i => (i === null ? 0 : i + 1));
        const minIndex = Math.min(...postIndices);

        const readinglists = await Topics.getTopicReadinglists(tid);

        const uidData = readinglists.map(b => ({ uid: b.value, readinglist: parseInt(b.score, 10) }))
            .filter(data => data.readinglist >= minIndex);

        await async.eachLimit(uidData, 50, async (data) => {
            let readinglist = Math.min(data.readinglist, maxIndex);

            postIndices.forEach((i) => {
                if (i < data.readinglist) {
                    readinglist -= 1;
                }
            });

            // make sure the readinglist is valid if we removed the last post
            readinglist = Math.min(readinglist, maxIndex - pids.length);
            if (readinglist === data.readinglist) {
                return;
            }

            const settings = await user.getSettings(data.uid);
            if (settings.topicPostSort === 'most_votes') {
                return;
            }

            await Topics.setUserReadinglist(tid, data.uid, readinglist);
        });
    };
};
