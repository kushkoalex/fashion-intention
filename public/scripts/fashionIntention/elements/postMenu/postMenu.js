FIN.postMenu = function ($object) {
    var fin = this,
        global = fin.global,
        a9 = global.A9,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        tp = global.cnCt.tp,
        settings = fin.settings,
        posts = settings.dataModels.posts,
        $body = document.body,
        $fragment,
        $contentFragment,
        $monthFragment,
        $link,
        $menuContent,
        $closeButton,
        $postMenuWrapper,
        $postMenu,
        $monthsWrapper,
        postMenuHiddenCssClass = 'hidden',
        build,
        buildYear,
        $year,
        $years = [],
        months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        contentBuild,
        u;

    $fragment = global.document.createDocumentFragment();
    $contentFragment = global.document.createDocumentFragment();

    for (var i = 2013; i < 2016; i++) {

        buildYear = tp('postYear', {year: i}, $contentFragment);

        $monthsWrapper = buildYear.monthsWrapper;
        $year = buildYear.r;
        $years.push($year);

        $monthFragment = global.document.createDocumentFragment();

        for (var j = 0; j < 12; j++) {
            tp('postMonth', {title: months[j], index: j, year: i}, $monthFragment);
        }

        $monthsWrapper.appendChild($monthFragment);

        a9.addEvent($year, eventOnPointerEnd, onYearClick);

        //yearBuild.r.appendChild($monthsWrapper);

    }

    build = tp('postMenuWrapper', $fragment);

    $link = build.toggleLink;
    $menuContent = build.menuContent;
    $closeButton = build.closeButton;
    $postMenu = build.postMenuContainer;


    //console.log($link);

    $menuContent.appendChild($contentFragment);


    //var $postMenuWrapper = tp('postMenuWrapper').r;

    function toggleMenu(e) {
        if (a9.hasClass($postMenu, postMenuHiddenCssClass)) {
            a9.removeClass($postMenu, postMenuHiddenCssClass);
        } else {
            a9.addClass($postMenu, postMenuHiddenCssClass);
        }
        //e.preventDefault();
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }

        //return false;
        //e.cancelBubble();
    }

    function closeMenu() {
        if (!a9.hasClass($postMenu, postMenuHiddenCssClass)) {
            a9.addClass($postMenu, postMenuHiddenCssClass);
        }
    }

    function doNotCloseMenu(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    }

    //function openMenu(){
    //    if(a9.hasClass($postMenu,postMenuHiddenCssClass)){
    //        a9.removeClass($postMenu,postMenuHiddenCssClass);
    //    }
    //}

    function onYearClick(e) {
        unselectAllYears();
        triggerYearClick(e.target);
    }

    function unselectAllYears() {
        a9.each($years, function ($year) {
            a9.removeClass($year, 'selected');
            var $months = a9.$c('months',$year)[0];
            if ($months) {
                if (!a9.hasClass($months, 'hidden')) {
                    a9.addClass($months, 'hidden');
                }
            }
        });
    }

    function triggerYearClick($target) {
        //console.log($target);
        var $year = a9.getParentByClass($target, 'year');
        var $months = a9.$c('months', $year)[0];
        if ($months) {
            a9.removeClass($months, 'hidden');
            a9.addClass($year, 'selected');
        }

        //a9.addClass($year, 'selected');
    }


    $postMenuWrapper = tp('postMenu').r;
    $postMenuWrapper.appendChild(build.r);

    $object.appendChild($postMenuWrapper);


    a9.addEvent($link, eventOnPointerEnd, toggleMenu);
    a9.addEvent($closeButton, eventOnPointerEnd, closeMenu);
    a9.addEvent($body, eventOnPointerEnd, closeMenu);
    a9.addEvent($postMenuWrapper, eventOnPointerEnd, doNotCloseMenu);


    //a9.each(posts, function(post,i){
    //
    //});


};