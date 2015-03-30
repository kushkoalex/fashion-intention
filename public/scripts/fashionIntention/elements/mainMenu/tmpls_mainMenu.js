(function (fin) {
    var tmpls = fin.tmpls;

    tmpls.mainMenu = function () {
        return {
            c:'main-menu-container',C:{
                e:'ul', c:'main-menu',C:[
                    {e:'li',c:'author two-lines',H:'<span>оксана<br>литвиненко</span>'},
                    {e:'li',c:'press one-line',H:'<a href="">пресса</a>'},
                    {e:'li',c:'travel one-line',H:'<a href="">путешествия</a>'},
                    {e:'li',c:'category one-line',H:'<a href=""> категории</a>'},
                    {e:'li',c:'media one-line',H:'<a href="">медиа</a>'}
                ]
            }
        };
    };

}(FIN));