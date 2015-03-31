FIN.articles = function ($parent) {
    var fin = this,
        global = fin.global,
        tp = global.cnCt.tp,
        settings = fin.settings,
        articles = settings.dataModels.articles,
        $header,
        $postMenuWrapper,
        $categoryMenuItemLink,
        $categoryMenu,
        $articles,
        $slider,
        build,
        u;

    build = tp('articles', articles);
    $postMenuWrapper = build.postMenuWrapper;
    $articles = build.r;
    $header = build.header;
    $slider = build.slider;
    $categoryMenu = build.categoryMenuWrapper;
    $categoryMenuItemLink = build.categoryMenuItemLink;
    fin.categoryMenu($categoryMenu, $categoryMenuItemLink);

    fin.postMenu($postMenuWrapper);
    fin.header($header);
    fin.slider($slider);

    $parent.appendChild($articles);
};