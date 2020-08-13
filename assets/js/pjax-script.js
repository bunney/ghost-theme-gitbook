$(function () {
    $(document).pjax('a', '#pjax', {
        fragment: '#pjax',
        timeout: 6000,
        scrollTo: false
    });
    $(document).on('pjax:send', function (res) {
    });
    $(document).on('pjax:complete', function (res) {
        const $allPosts = $('#J-blog-tree-tags');
        const pathname = location.pathname;
        $allPosts.find('.J-post').each(function () {
            const $post = $(this);
            const slug = $post.data('slug');
            if (pathname.includes(slug)) {
                $post.addClass('active');
            } else {
                $post.removeClass('active');
            }
        });
    });
});
