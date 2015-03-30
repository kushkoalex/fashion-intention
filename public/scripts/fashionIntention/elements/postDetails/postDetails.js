FIN.postDetails = function ($parent) {
    var fin = this,
        global = fin.global,
        tp = global.cnCt.tp,
        settings = fin.settings,
        post = settings.dataModels.post,
        $header,
        $postMenuWrapper,
        $postDetails,
        build,
        u;

    build = tp('postDetails', post);
    $postMenuWrapper = build.postMenuWrapper;
    $postDetails = build.r;
    $header = build.header;

    fin.postMenu($postMenuWrapper);
    fin.header($header);

    $parent.appendChild($postDetails);
};