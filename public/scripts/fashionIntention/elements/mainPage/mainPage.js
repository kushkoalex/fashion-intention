FIN.mainPage = function ($parent) {
    var fin = this,
        global = fin.global,
        tp = global.cnCt.tp,
        settings = fin.settings,
        posts = settings.dataModels.posts,
        mainBanners = settings.dataModels.mainBanners,
        advBanners = settings.dataModels.advBanners,
        $header,
        $postMenuWrapper,
        $mainPage,
        $slider,

        build,
        u;

    build = tp('mainPage',{posts:posts, mainBanners:mainBanners,advBanners:advBanners } );
    $postMenuWrapper = build.postMenuWrapper;
    $mainPage = build.r;
    $header = build.header;
    $slider = build.slider;






    fin.postMenu($postMenuWrapper);
    fin.header($header);

    fin.slider($slider);

    $parent.appendChild($mainPage);
};