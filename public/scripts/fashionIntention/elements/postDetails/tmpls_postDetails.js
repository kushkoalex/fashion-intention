(function (fin) {
    var tmpls = fin.tmpls,
        a9 = fin.global.A9,
        l10n = a9.l10n,
        u;


    tmpls.postDetails = function (post) {

        var postItems = [],
            imagePath = fin.settings.controlsDescriptors.site.contentImagesPath;

        a9.each(post.items, function (postItem) {
            postItems.push({
                c: 'post-item', C: [
                    {c: 'image', e: 'img', a: {src: imagePath + postItem.imageSrc}},
                    {
                        c: 'text-wrapper', C: [
                        {c: 'pattern'},
                        {c: 'text',H:postItem.text},
                        {c: 'pattern'}
                    ]
                    },

                    {c:'clear'}
                ]
            });
        });

        return [
            tmpls.header(),
            {
                c: 'main-image-content-container', C: [
                {c: 'main-image-content'},
                tmpls.postMenu(),
                tmpls.mainMenu()
            ]
            },
            {
                c: 'main-content-container', C: {
                c: 'post-details', C: [
                    {
                        c: 'title', C: [
                        {c: 'date', t: post.date},
                        {c: 'title-text', H: '&#8226; &nbsp;' + post.title + '&nbsp; &#8226;'}
                    ]
                    },
                    {
                        c: 'post-items', C: postItems
                    }
                ]
            }
            },
            tmpls.footer()
        ];
    }

}(FIN));