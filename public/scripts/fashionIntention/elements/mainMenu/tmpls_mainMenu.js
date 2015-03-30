(function (fin) {
    var tmpls = fin.tmpls;

    tmpls.mainMenu = function () {
        var menuData = fin.settings.dataModels.mainMenu,
            menuItems = [],
            menuItem,
            isActiveMenuItem = false,
            isSelectedMenuItem = false;

        for (var i = 0; i < menuData.length; i++) {
            isSelectedMenuItem = menuData[i].selected;
            isActiveMenuItem = menuData[i].active;

            if(isActiveMenuItem){
                menuItem = {
                    e: 'li', c:'active '+menuData[i].cssClass, C: {
                        e: 'a',
                        h: menuData[i].url,
                        H: menuData[i].title
                    }
                };
            }
            else if(isSelectedMenuItem)
            {
                menuItem = {
                    e: 'li', c:menuData[i].cssClass, C: {
                        H: '<span>'+ menuData[i].title+'</span>'
                    }
                };
            }
            else {
                menuItem = {
                    e: 'li', c:menuData[i].cssClass, C: {
                        e: 'a',
                        h: menuData[i].url,
                        H: menuData[i].title
                    }
                };
            }

            menuItems.push(menuItem);
        }

        //return {
        //    c: 'main-menu-container', C: {
        //        e: 'ul', c: 'main-menu', C: [
        //            {e: 'li', c: 'author two-lines', H: '<span>оксана<br>литвиненко</span>'},
        //            {e: 'li', c: 'press one-line', H: '<a href="">пресса</a>'},
        //            {e: 'li', c: 'travel one-line', H: '<a href="">путешествия</a>'},
        //            {e: 'li', c: 'category one-line', H: '<a href=""> категории</a>'},
        //            {e: 'li', c: 'media one-line', H: '<a href="">медиа</a>'}
        //        ]
        //    }
        //};

        return {
            c: 'main-menu-container', C: {
                e: 'ul', c: 'main-menu', C: menuItems
            }
        };
    };

}(FIN));