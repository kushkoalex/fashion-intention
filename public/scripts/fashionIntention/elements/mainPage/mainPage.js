FIN.mainPage = function ($parent) {
    var fin = this,
        global = fin.global,
        a9 = global.A9,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        tp = global.cnCt.tp,
        settings = fin.settings,
        posts = settings.dataModels.posts,
        $header,
        $fragment,
        $postMenuWrapper,
        $mainPage,
        build,


        u;


    //$fragment = global.document.createDocumentFragment();

    build = tp('mainPage',posts);
    $postMenuWrapper = build.postMenuWrapper;
    $mainPage = build.r;
    $header = build.header;

    fin.postMenu($postMenuWrapper);
    fin.header($header);



    $parent.appendChild($mainPage);

};