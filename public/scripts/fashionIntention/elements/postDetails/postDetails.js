FIN.postDetails = function ($parent) {
    var fin = this,
        global = fin.global,
        a9 = global.A9,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        tp = global.cnCt.tp,
        settings = fin.settings,
        posts = settings.dataModels.posts,
        post = settings.dataModels.post,
        $fragment,
        $postMenuWrapper,
        $postDetails,
        build,
        u;


    build = tp('postDetails', post);
    $postMenuWrapper = build.postMenuWrapper;
    $postDetails = build.r;

    fin.postMenu($postMenuWrapper);

    $parent.appendChild($postDetails);


};