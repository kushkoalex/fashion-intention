(function (fin) {
    var tmpls = fin.tmpls,
        a9 = fin.global.A9,
        l10n = a9.l10n,
        u;


    tmpls.postDetails = function (post) {

        var postItems = [],
            imagePath = fin.settings.controlsDescriptors.site.contentImagesPath,
            content;

        a9.each(post.items, function (postItem) {


            if (postItem.text == null || postItem.text == '') {
                content={
                    c: 'post-item', C: [
                        {c: 'image centered', e: 'img', a: {src: imagePath + postItem.imageSrc}},
                        {c: 'clear'}
                    ]
                }
            } else {
                content={
                    c: 'post-item', C: [
                        {c: 'image', e: 'img', a: {src: imagePath + postItem.imageSrc}},
                        {
                            c: 'text-wrapper', C: [
                            {c: 'pattern'},
                            {c: 'text', H: postItem.text},
                            {c: 'pattern'}
                        ]
                        },
                        {c: 'clear'}
                    ]
                }
            }

            postItems.push(content);
        });


        var tags = [];

        for (var i = 0; i < post.tags.length; i++) {
            tags.push(tmpls.tag({title: post.tags[i], url: ''}));
        }

        return [
            tmpls.header(),
            {
                c: 'main-image-content-container', C: [
                {c: 'main-image-content', n: 'sliderContainer', C: tmpls.slider()},
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
                    },
                    {
                        c: 'tags-container',
                        C: {
                            c: 'tags-wrapper', C: [
                                {c: 'tags-title', t: 'Тэги:'},
                                {c: 'tags', C: tags},
                                {c: 'clear'}
                            ]
                        }
                    }
                ]
            }
            },
            tmpls.footer()
        ];
    }

}(FIN));