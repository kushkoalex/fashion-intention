FIN.postMenu = function ($object) {
    var fin = this,
        global = fin.global,
        a9 = global.A9,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        tp = global.cnCt.tp,
        settings = fin.settings,
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
        currentMonth,
        year,
        months = [],
        monthsLocalization = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь', 'Ноябрь', 'Декабрь'],
        calendar = settings.dataModels.calendar,
        u;

    $fragment = global.document.createDocumentFragment();
    $contentFragment = global.document.createDocumentFragment();

    a9.each(calendar,function(item){
        item.months.sort(compareMonths);
    });

    calendar.sort(compareYears);

    function compareYears(a, b) {
        if (a.year < b.year) return 1;
        if (a.year > b.year) return -1;
    }

    function compareMonths(a, b){
        if (a < b) return 1;
        if (a > b) return -1;
    }

    for (var i = 0; i < calendar.length; i++) {
        year = calendar[i];
        buildYear = tp('postYear', {year: year.year}, $contentFragment);
        $monthsWrapper = buildYear.monthsWrapper;
        $year = buildYear.r;
        $years.push($year);
        $monthFragment = global.document.createDocumentFragment();

        for (var j = 0; j < year.months.length; j++) {
            currentMonth = year.months[j]-1;
            tp('postMonth', {title: monthsLocalization[currentMonth] , month: currentMonth+1, year: year.year}, $monthFragment);
        }
        $monthsWrapper.appendChild($monthFragment);
        a9.addEvent($year, eventOnPointerEnd, onYearClick);
    }

    build = tp('postMenuWrapper', $fragment);

    $link = build.toggleLink;
    $menuContent = build.menuContent;
    $closeButton = build.closeButton;
    $postMenu = build.postMenuContainer;

    $menuContent.appendChild($contentFragment);

    function toggleMenu(e) {
        if (a9.hasClass($postMenu, postMenuHiddenCssClass)) {
            a9.removeClass($postMenu, postMenuHiddenCssClass);
        } else {
            a9.addClass($postMenu, postMenuHiddenCssClass);
        }
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
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
            var $months = a9.$c('months', $year)[0];
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