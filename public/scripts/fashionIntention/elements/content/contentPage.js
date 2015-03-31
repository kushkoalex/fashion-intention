FIN.contentPage = function ($parent) {
    var fin = this,
        global = fin.global,
        tp = global.cnCt.tp,
        settings = fin.settings,
        contents = settings.dataModels.contents,
        $header,
        $postMenuWrapper,
        $postDetails,
        $categoryMenuItemLink,
        $categoryMenu,
        $slider,
        build,
        u;

    build = tp('contentPage', contents);
    $postMenuWrapper = build.postMenuWrapper;
    $postDetails = build.r;
    $header = build.header;
    $slider = build.slider;
    $categoryMenu = build.categoryMenuWrapper;
    $categoryMenuItemLink = build.categoryMenuItemLink;
    fin.categoryMenu($categoryMenu, $categoryMenuItemLink);

    fin.postMenu($postMenuWrapper);
    fin.header($header);
    fin.slider($slider);

    $parent.appendChild($postDetails);
};