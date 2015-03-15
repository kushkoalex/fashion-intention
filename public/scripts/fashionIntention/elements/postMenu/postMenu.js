FIN.postMenu = function ($object) {
    var fin = this,
        global = fin.global,
        a9 = global.A9,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        tp = global.cnCt.tp,
        settings = fin.settings,
        posts = settings.dataModels.posts,
        $fragment,
        $contentFragment,
        $link,
        $menuContent,
        $closeButton,
        $postMenuWrapper,
        build,
        contentBuild,
        u;

    $fragment = global.document.createDocumentFragment();
    $contentFragment = global.document.createDocumentFragment();

    for (var i = 2013; i < 2016; i++) {
        contentBuild = tp('postYear', {year: i}, $contentFragment);
    }

    build = tp('postMenuWrapper', $fragment);

    $link = build.toggleLink;
    $menuContent = build.menuContent;
    $closeButton = build.closeButton;

    //console.log($link);

    $menuContent.appendChild($contentFragment);

    a9.addEvent($link, eventOnPointerEnd, toggleMenu);
    a9.addEvent($closeButton, eventOnPointerEnd, toggleMenu);

    //var $postMenuWrapper = tp('postMenuWrapper').r;

    function toggleMenu() {
        console.log('toggle');
    }

    $postMenuWrapper = tp('postMenu').r;
    $postMenuWrapper.appendChild(build.r);

    $object.appendChild($postMenuWrapper);


    //a9.each(posts, function(post,i){
    //
    //});


};