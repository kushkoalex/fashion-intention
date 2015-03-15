FIN.mainPage = function ($parent) {
    var fin = this,
        global = fin.global,
        a9 = global.A9,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        tp = global.cnCt.tp,
        settings = fin.settings,
        posts = settings.dataModels.posts,
        $fragment,
        $postMenuContainer,
        build,
        



        u;


    //$fragment = global.document.createDocumentFragment();

    build = tp('mainPage', posts, $parent);

    $postMenuContainer = build.postMenuContent;



    fin.postMenu($postMenuContainer);

    //var $mainPageWrapper = tp('mainPageWrapper', $parent).r;

     //$mainPageWrapper.appendChild($fragment);

    //console.log()

};