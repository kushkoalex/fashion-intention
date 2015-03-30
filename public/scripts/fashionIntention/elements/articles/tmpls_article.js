(function (fin) {
    var tmpls = fin.tmpls,
        a9 = fin.global.A9,
        l10n = a9.l10n,
        u;


    tmpls.articles = function (articles) {
        var articleDetailsUrl = fin.settings.controlsDescriptors.site.articleDetailsUrl;
        var content = [];


        a9.each(articles, function (article) {
            content.push({
                c: 'article', C: [{
                    c: 'article-wrapper', C: [
                        {c: 'date', t: article.date},
                        {
                            c: 'title',
                            C: {e: 'a', h: a9.supplant(articleDetailsUrl, {id: article.id}), t: article.title}
                        },
                        {c: 'description', t: article.description}
                    ]
                }, {c: 'pattern'}]
            });
        });

        return [
            tmpls.header(), {
                c: 'main-image-content-container', C: [
                    {c: 'main-image-content'},
                    tmpls.postMenu(),
                    tmpls.mainMenu()
                ]
            },
            {
                c: 'main-content-container', C: {
                c: 'articles-container',
                C: [
                    {
                        c: 'articles-page-title', C: {
                        c: 'title-text', H: '&#8226; &nbsp;' + l10n('articlesTitle') + '&nbsp; &#8226;'
                    }
                    },
                    {
                        c: 'articles',
                        C: content
                    }
                ]
            }
            },
            tmpls.footer()
        ];


        //var postItems = [],
        //    imagePath = fin.settings.controlsDescriptors.site.contentImagesPath;
        //
        //a9.each(post.items, function (postItem) {
        //    postItems.push({
        //        c: 'post-item', C: [
        //            {c: 'image', e: 'img', a: {src: imagePath + postItem.imageSrc}},
        //            {
        //                c: 'text-wrapper', C: [
        //                {c: 'pattern'},
        //                {c: 'text', H: postItem.text},
        //                {c: 'pattern'}
        //            ]
        //            },
        //
        //            {c: 'clear'}
        //        ]
        //    });
        //});
        //
        //
        //var tags = [];
        //
        //for (var i = 0; i < post.tags.length; i++) {
        //    tags.push(tmpls.tag({title: post.tags[i], url: ''}));
        //}
        //
        //return [
        //    tmpls.header(),
        //    {
        //        c: 'main-image-content-container', C: [
        //        {c: 'main-image-content'},
        //        tmpls.postMenu(),
        //        tmpls.mainMenu()
        //    ]
        //    },
        //    {
        //        c: 'main-content-container', C: {
        //        c: 'post-details', C: [
        //            {
        //                c: 'title', C: [
        //                {c: 'date', t: post.date},
        //                {c: 'title-text', H: '&#8226; &nbsp;' + post.title + '&nbsp; &#8226;'}
        //            ]
        //            },
        //            {
        //                c: 'post-items', C: postItems
        //            },
        //            {
        //                c: 'tags-container',
        //                C: {
        //                    c: 'tags-wrapper', C: [
        //                        {c: 'tags-title', t: 'Тэги:'},
        //                        {c: 'tags', C: tags},
        //                        {c:'clear'}
        //                    ]
        //                }
        //            }
        //        ]
        //    }
        //    },
        //    tmpls.footer()
        //];
    }

}(FIN));