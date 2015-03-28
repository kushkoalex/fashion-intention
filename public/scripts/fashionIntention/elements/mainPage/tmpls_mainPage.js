(function (fin) {
    var tmpls = fin.tmpls,
        a9 = fin.global.A9,
        l10n = a9.l10n,
        u;


    tmpls.mainPage = function () {
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
                c: 'main-content-container', C: [
                tmpls.postPreviewWrapper({direction: 'left'}),
                tmpls.postPreviewWrapper({direction: 'left'}),
                tmpls.postPreviewWrapper({direction: 'right'}),
                tmpls.postPreviewWrapper({direction: 'right'}),
                tmpls.clear()
            ]
            },

            tmpls.footer()
        ];
    };

    tmpls.postPreviewImage = function () {
        return {c: 'preview-image', C: {c: 'post-preview-triangle'}};
    };

    tmpls.postPreviewInfo = function () {
        return {
            c: 'info', C: [
                {
                    c: 'info-content', C: [
                    {c: 'date', t: '16.11.2015'},
                    {c: 'title', C: {e: 'a', h: '', t: 'Пять привычек, за которые не стыдно'}},
                    {
                        c: 'description',
                        t: 'Приоткрываем завесу борьбы с нежеланием рано просыпаться приоткрываем завесу борьбы с нежеланием рано просыпаться приоткрываем завесу борьбы с нежеланием рано просыпаться приоткрываем завесу борьбы с нежеланием рано просыпаться просыпаться приоткрываем завесу борьбы с нежеланием рано просыпаться просыпаться приоткрываем завесу борьбы с нежеланием рано просыпаться'
                    }
                ]
                },
                {
                    c: 'tags-wrapper', C: [
                    {c: 'separator'},
                    {
                        c: 'tags', C: [
                        tmpls.tag({title: 'love', url: ''}),
                        tmpls.tag({title: 'hello', url: ''}),
                        tmpls.tag({title: 'world', url: ''}),
                        tmpls.tag({title: 'love', url: ''}),
                        tmpls.tag({title: 'hello', url: ''}),
                        tmpls.tag({title: 'world', url: ''}),
                        tmpls.tag({title: 'the dress is white or blue?', url: ''}),
                        tmpls.tag({title: 'hello', url: ''}),
                        tmpls.tag({title: 'world', url: ''}),
                        tmpls.tag({title: 'world', url: ''}),
                        tmpls.tag({title: 'world', url: ''}),
                        tmpls.tag({title: 'world', url: ''})
                    ]
                    }
                ]
                }
            ]
        }
    };


    tmpls.postPreviewWrapper = function (postData) {
        var wrapperCssClass = 'post-preview-wrapper '+ postData.direction,
            content = [];

        if (postData.direction == 'left') {
            content.push(tmpls.postPreviewImage());
            content.push(tmpls.postPreviewInfo());
        } else {
            content.push(tmpls.postPreviewInfo());
            content.push(tmpls.postPreviewImage());
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