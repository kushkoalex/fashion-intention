FIN.articles = function ($parent) {
    var fin = this,
        global = fin.global,
        tp = global.cnCt.tp,
        settings = fin.settings,
        articles = settings.dataModels.articles,
        $header,
        $postMenuWrapper,
        $articles,
        build,
        u;

    build = tp('articles', articles);
    $postMenuWrapper = build.postMenuWrapper;
    $articles = build.r;
    $header = build.header;

    fin.postMenu($postMenuWrapper);
    fin.header($header);

    $parent.appendChild($articles);
};