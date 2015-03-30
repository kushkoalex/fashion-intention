(function (fin) {
    var tmpls = fin.tmpls,
        a9 = fin.global.A9,
        l10n = a9.l10n,
        u;


    tmpls.contentPage = function (contents) {

        var contentItems = [],
            imagePath = fin.settings.controlsDescriptors.site.contentImagesPath;

        a9.each(contents, function (contentItem) {
            contentItems.push({
                c: 'post-item', C: [
                    {c: 'image', e: 'img', a: {src: imagePath + contentItem.imageSrc}},
                    {
                        c: 'text-wrapper', C: [
                        {c: 'pattern'},
                        {c: 'text', H: contentItem.text},
                        {c: 'pattern'}
                    ]
                    },

                    {c: 'clear'}
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
                        {c: 'title-text', H: '&#8226; &nbsp;' + l10n('aboutTitle') + '&nbsp; &#8226;'}
                    ]
                    },
                    {
                        c: 'post-items', C: contentItems
                    }
                ]
            }
            },
            tmpls.footer()
        ];
    }

}(FIN));