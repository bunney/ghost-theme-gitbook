$(document).ready(function () {
    const $tagTree = $('#J-blog-tree');
    const $allPosts = $('#J-blog-tree-posts');
    const pathname = location.pathname;
    $allPosts.find('.J-post').each(function () {
        const $post = $(this).find('li');

        const slug = $post.data('slug');
        console.log($post, '----', slug);
        // 如果文章是首页内容，则不添加到目录中
        if (slug === 'index') {
            return true;
        }

        if (pathname.includes(slug)) {
            $post.addClass('active');
        }
    });

    let foldTitle = $('.chapter .tag-fold');
    $('.chapter').siblings().find('.articles').hide();
    $('.chapter').first().find('.articles').show();
    foldTitle.on('click', function () {
        $(this).parent().find('.articles').stop(true).slideToggle();
    });
});
