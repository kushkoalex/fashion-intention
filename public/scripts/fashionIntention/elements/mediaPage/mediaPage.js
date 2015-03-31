FIN.mediaPage = function ($parent) {
    var fin = this,
        global = fin.global,
        tp = global.cnCt.tp,
        settings = fin.settings,
        media = settings.dataModels.media,
        $header,
        $postMenuWrapper,
        $postDetails,
        $categoryMenuItemLink,
        $categoryMenu,
        $slider,
        build,
        u;

    build = tp('mediaPage', media);
    $postMenuWrapper = build.postMenuWrapper;
    $postDetails = build.r;
    $header = build.header;
    $categoryMenu = build.categoryMenuWrapper;
    $categoryMenuItemLink = build.categoryMenuItemLink;
    fin.categoryMenu($categoryMenu, $categoryMenuItemLink);
    $slider = build.slider;
    fin.postMenu($postMenuWrapper);
    fin.header($header);
    fin.slider($slider);

    $parent.appendChild($postDetails);
};