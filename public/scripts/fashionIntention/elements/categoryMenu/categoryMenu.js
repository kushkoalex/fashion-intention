FIN.categoryMenu = function ($object, $menuToggleLink) {
    var fin = this,
        global = fin.global,
        a9 = global.A9,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        tp = global.cnCt.tp,
        settings = fin.settings,
        tags = settings.dataModels.tags,
        $body = document.body,
        build,
        $wrapper,
        $fragment,
        u;



    build = tp('categoryMenuWrapper',tags);

    a9.addEvent($menuToggleLink, eventOnPointerEnd, toggle);
    a9.addEvent($body, eventOnPointerEnd, closeMenu);
    a9.addEvent($object, eventOnPointerEnd, preventCloseMenu);

    function preventCloseMenu(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    }

    function toggle(e){
        if(a9.hasClass($object,'hidden')){
            a9.removeClass($object,'hidden');

            preventCloseMenu(e);

        }else{
            a9.addClass($object,'hidden');
        }
    }

    function closeMenu() {
        if (!a9.hasClass($object, 'hidden')) {
            a9.addClass($object, 'hidden');
        }
    }

    $object.appendChild(build.r);
};