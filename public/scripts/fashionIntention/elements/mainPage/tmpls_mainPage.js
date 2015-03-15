(function (fin) {
    var tmpls = fin.tmpls,
        a9 = fin.global.A9,
        l10n = a9.l10n,
        u;


    tmpls.mainPage = function () {
        return [
            tmpls.header(),

            {c:'main-image-content'},
            tmpls.postMenu(),

            tmpls.footer()
        ];
    };

}(FIN));