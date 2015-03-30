FIN.mainPage = function ($parent) {
    var fin = this,
        global = fin.global,
        tp = global.cnCt.tp,
        settings = fin.settings,
        posts = settings.dataModels.posts,
        $header,
        $postMenuWrapper,
        $mainPage,
        build,
        u;

    build = tp('mainPage',posts);
    $postMenuWrapper = build.postMenuWrapper;
    $mainPage = build.r;
    $header = build.header;

    fin.postMenu($postMenuWrapper);
    fin.header($header);

    $parent.appendChild($mainPage);
};