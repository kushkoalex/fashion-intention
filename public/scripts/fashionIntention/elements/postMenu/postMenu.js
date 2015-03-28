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
        years = [],
        year,
        months = [],
        monthsLocalization = [
            {id:'01',title:'Январь'},
            {id:'02',title:'Февраль'},
            {id:'03',title:'Март'},
            {id:'04',title:'Апрель'},
            {id:'05',title:'Май'},
            {id:'06',title:'Июнь'},
            {id:'07',title:'Июль'},
            {id:'08',title:'Август'},
            {id:'09',title:'Сентябрь'},
            {id:'10',title:'Октябрь'},
            {id:'11',title:'Ноябрь'},
            {id:'12',title:'Декабрь'}
            ],
        contentBuild,
        calendar = [],
        u;

    $fragment = global.document.createDocumentFragment();
    $contentFragment = global.document.createDocumentFragment();


    a9.each(posts, function (post) {

        var date = post.date,
            yearStr = date.substr(6, 4),
            monthStr = date.substr(3, 2),
            months,
            u;

        var hasYear = false;
        var hasMonth = false;

        for (var i = 0; i < calendar.length; i++) {
            if (!hasYear && calendar[i].year == yearStr) {
                hasYear = true;
                months = calendar[i].months;

                for (var j = 0; j < months.length; j++) {
                    if (months[j] == monthStr) {
                        hasMonth = true;
                    }
                }

                if (!hasMonth) {
                    months.push(monthStr);
                }

            }
        }

        if (!hasYear) {
            months = [];
            months.push(monthStr);
            calendar.push({year: yearStr, months: months});
        }
    });



    a9.each(calendar,function(item){
        item.months.sort(compareMonths);
    });

    calendar.sort(compareYears);

    //console.log(calendar);

    function compareYears(a, b) {
        if (a.year < b.year) return 1;
        if (a.year > b.year) return -1;
    }

    function compareMonths(a, b){
        if (a < b) return 1;
        if (a > b) return -1;
    }

    function getMonthTitle(index){
        for(var i = 0; i< monthsLocalization.length; i++){
           if(monthsLocalization[i].id==index){
               return monthsLocalization[i].title;
           }
        }
    }

    for (var i = 0; i < calendar.length; i++) {
        year = calendar[i];
        buildYear = tp('postYear', {year: year.year}, $contentFragment);
        $monthsWrapper = buildYear.monthsWrapper;
        $year = buildYear.r;
        $years.push($year);
        $monthFragment = global.document.createDocumentFragment();
        for (var j = 0; j < year.months.length; j++) {
            tp('postMonth', {title:getMonthTitle( year.months[j]), index: months[j], year: year.year}, $monthFragment);
        }
        $monthsWrapper.appendChild($monthFragment);
        a9.addEvent($year, eventOnPointerEnd, onYearClick);
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