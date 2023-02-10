'use strict';


define('forum/account/readinglists', ['forum/account/header', 'forum/account/posts'], function (header, posts) {
    const Readinglists = {};

    Readinglists.init = function () {
        header.init();

        $('[component="post/content"] img:not(.not-responsive)').addClass('img-responsive');

        posts.handleInfiniteScroll('account/readinglists');
    };

    return Readinglists;
});
