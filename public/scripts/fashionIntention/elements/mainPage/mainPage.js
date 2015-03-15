FIN.mainPage = function ($parent) {
    var fin = this,
        global = fin.global,
        a9 = global.A9,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        tp = global.cnCt.tp,
        settings = fin.settings,
        posts = settings.dataModels.posts,
        $fragment,
        $postMenuWrapper,
        $mainPage,
        build,


        u;


    //$fragment = global.document.createDocumentFragment();

    build = tp('mainPage');
    $postMenuWrapper = build.postMenuWrapper;
    $mainPage = build.r;

    fin.postMenu($postMenuWrapper);

    $parent.appendChild($mainPage);

};