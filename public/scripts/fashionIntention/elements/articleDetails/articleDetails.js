FIN.articleDetails = function ($parent) {
    var fin = this,
        global = fin.global,
        tp = global.cnCt.tp,
        settings = fin.settings,
        article = settings.dataModels.article,
        $header,
        $postMenuWrapper,
        $postDetails,
        $categoryMenuItemLink,
        $categoryMenu,
        $slider,
        build,
        u;

    build = tp('articleDetails', article);
    $postMenuWrapper = build.postMenuWrapper;
    $postDetails = build.r;
    $header = build.header;
    $slider = build.slider;
    $categoryMenu = build.categoryMenuWrapper;

    $categoryMenuItemLink = build.categoryMenuItemLink;

    fin.postMenu($postMenuWrapper);
    fin.header($header);
    fin.slider($slider);

    fin.categoryMenu($categoryMenu, $categoryMenuItemLink);

    $parent.appendChild($postDetails);
};