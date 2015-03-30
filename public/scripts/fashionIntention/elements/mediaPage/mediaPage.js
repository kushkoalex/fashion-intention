FIN.mediaPage = function ($parent) {
    var fin = this,
        global = fin.global,
        tp = global.cnCt.tp,
        settings = fin.settings,
        media = settings.dataModels.media,
        $header,
        $postMenuWrapper,
        $postDetails,
        build,
        u;

    build = tp('mediaPage', media);
    $postMenuWrapper = build.postMenuWrapper;
    $postDetails = build.r;
    $header = build.header;

    fin.postMenu($postMenuWrapper);
    fin.header($header);

    $parent.appendChild($postDetails);
};