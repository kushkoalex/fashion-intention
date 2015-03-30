FIN.articleDetails = function ($parent) {
    var fin = this,
        global = fin.global,
        tp = global.cnCt.tp,
        settings = fin.settings,
        article = settings.dataModels.article,
        $header,
        $postMenuWrapper,
        $postDetails,
        build,
        u;

    build = tp('articleDetails', article);
    $postMenuWrapper = build.postMenuWrapper;
    $postDetails = build.r;
    $header = build.header;

    fin.postMenu($postMenuWrapper);
    fin.header($header);

    $parent.appendChild($postDetails);
};