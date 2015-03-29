(function (fin) {
    var tmpls = fin.tmpls,
        a9 = fin.global.A9,
        l10n = a9.l10n,
        u;


    tmpls.mainPage = function (posts) {

        var content = [],
            direction = '';

        for (var i = 0; i < posts.length; i++) {
            if (i % 2 == 0) {
                if (direction == 'left') {
                    direction = 'right'
                } else {
                    direction = 'left';
                }
            }

            posts[i].direction = direction;
            content.push(tmpls.postPreviewWrapper(posts[i]));
        }

        content.push(tmpls.clear());

        return [
            tmpls.header(true),
            {
                c: 'main-image-content-container', C: [
                {c: 'main-image-content'},
                tmpls.postMenu(),
                tmpls.mainMenu()
            ]
            },
            {
                c: 'main-content-container', C: [
                content
            ]
            },
            tmpls.footer()
        ];
    };

    tmpls.postPreviewImage = function (postData) {
        var imagePath = fin.settings.controlsDescriptors.site.contentImagesPath;

        return {
            c: 'preview-image',
            a: {style: 'background-image:url(' + imagePath + postData.imageSrc + ')'},
            C: {c: 'post-preview-triangle'}
        };
    };

    tmpls.postPreviewInfo = function (postData) {

        var postDetailsUrl = fin.settings.controlsDescriptors.site.postDetailsUrl,
            tags = [];

        for (var i = 0; i < postData.tags.length; i++) {
            tags.push(tmpls.tag({title: postData.tags[i], url: ''}));


        }


        return {
            c: 'info', C: [
                {
                    c: 'info-content', C: [
                    {c: 'date', t: postData.date},
                    {c: 'title', C: {e: 'a', h: a9.supplant(postDetailsUrl,{id:postData.id}) , t: postData.title}},
                    {
                        c: 'description',
                        t: postData.description
                    }
                ]
                },
                {
                    c: 'tags-wrapper', C: [
                    {c: 'separator'},
                    {
                        c: 'tags', C: [tags
                    ]
                    }
                ]
                }
            ]
        }
    };


    tmpls.postPreviewWrapper = function (postData) {
        var wrapperCssClass = 'post-preview-wrapper ' + postData.direction,
            content = [];

        if (postData.direction == 'left') {
            content.push(tmpls.postPreviewImage(postData));
            content.push(tmpls.postPreviewInfo(postData));
        } else {
            content.push(tmpls.postPreviewInfo(postData));
            content.push(tmpls.postPreviewImage(postData));
        }

        return {
            c: wrapperCssClass, C: content
        }
    };

    tmpls.tag = function (tagData) {
        return {
            c: 'tag',
            C: [{c: 'tag-triangle-wrapper', C: {c: 'tag-triangle'}}, {c: 'tag-content', t: tagData.title}]
        }
    };

    tmpls.clear = function () {
        return {c: 'clear'}
    }

}(FIN));