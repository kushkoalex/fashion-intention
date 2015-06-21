(function (fin) {
    var tmpls = fin.tmpls,
        a9 = fin.global.A9,
        l10n = a9.l10n,
        u;


    tmpls.imageControls = function () {
        return [
            {c: 'left', n: 'slideLeft'},
            {c: 'right', n: 'slideRight'}
        ]
    };


    tmpls.slider = function () {
        var activeClassName,
            banners = fin.settings.dataModels.mainBanners,
            images = [];

        for (var i = 0; i < banners.length; i++) {

            if (i == 0) {
                activeClassName = ' active';
            } else {
                activeClassName = '';
            }

            if (banners[i].url == null || banners[i].url == '') {
                images.push({
                    c: 'image' + activeClassName,
                    n: 'img',
                    a: {style: 'background-image: url(' + fin.settings.controlsDescriptors.site.contentImagesPath + banners[i].imageSrc + ')'}
                });
            }
            else {
                images.push({
                    e: 'a',
                    h: banners[i].url,
                    c: 'image' + activeClassName,
                    n: 'img',
                    a: {style: 'background-image: url(' + fin.settings.controlsDescriptors.site.contentImagesPath + banners[i].imageSrc + ')'}
                });
            }
        }


        return {
            c: 'images-container', n: 'slider', C: [
                images,
                tmpls.imageControls()
            ]
        }
    }

}(FIN));