(function (fin) {
    var tmpls = fin.tmpls,
        a9 = fin.global.A9,
        l10n = a9.l10n,
        u;


    tmpls.postYear =function(year){
        return {c:'year',t:year.year}
    };

    tmpls.postMonth = function(month){
        return {c:'month',C:{e:'a',h:'#',t:month}}
    };

    tmpls.postMenu = function (data) {



        return {
            c: 'post-menu-wrapper', C: [
                {c: 'post-menu-link', t: 'все посты'},
                {
                    c: 'post-menu', C: [
                    {c: 'post-menu-triangle'},
                    {c: 'close-button'},
                    {c: 'inc-top'},
                    {c: 'all-posts', t: 'все посты'},
                    {c: 'content', n: data.n},
                    {c: 'inc-bottom'}
                ]
                }]
        };
    };

}(FIN));