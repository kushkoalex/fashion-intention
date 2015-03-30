(function (fin) {
    var tmpls = fin.tmpls,
        a9 = fin.global.A9,
        l10n = a9.l10n,
        u;


    tmpls.mediaPage = function (mediaItems) {

        var mediaItemsContent = [],
            imagePath = fin.settings.controlsDescriptors.site.contentImagesPath;

        a9.each(mediaItems, function (mediaItem) {
            mediaItemsContent.push({
                c: 'post-item', C: [
                    {c: 'image', e: 'img', a: {src: imagePath + mediaItem.videoSrc}},
                    {
                        c: 'text-wrapper', C: [
                        {c: 'text', H: mediaItem.text}
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
                c: 'media-items', C: [
                    {
                        c: 'title', C: [
                        {c: 'title-text', H: '&#8226; &nbsp;' + l10n('mediaTitle','firstUpper') + '&nbsp; &#8226;'}
                    ]
                    },
                    {
                        c: 'post-items', C: mediaItemsContent
                    }
                ]
            }
            },
            tmpls.footer()
        ];
    }

}(FIN));