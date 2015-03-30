FIN.contentPage = function ($parent) {
    var fin = this,
        global = fin.global,
        tp = global.cnCt.tp,
        settings = fin.settings,
        contents = settings.dataModels.contents,
        $header,
        $postMenuWrapper,
        $postDetails,
        build,
        u;

    build = tp('contentPage', contents);
    $postMenuWrapper = build.postMenuWrapper;
    $postDetails = build.r;
    $header = build.header;

    fin.postMenu($postMenuWrapper);
    fin.header($header);

    $parent.appendChild($postDetails);
};