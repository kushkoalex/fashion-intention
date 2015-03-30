(function (fin) {
    var tmpls = fin.tmpls,
        a9 = fin.global.A9,
        l10n = a9.l10n;

    tmpls.headerContent = function (isMainPage) {

        var logo,
            mainPageUrl = fin.settings.controlsDescriptors.site.mainPageUrl;
        if (isMainPage) {
            logo = {c: 'logo'};
        } else {
            logo = {e: 'a', h: mainPageUrl, c: 'logo'};
        }

        return {
            c: 'header', n:'header', C: [
                tmpls.subscribeControl(),
                {e: 'a', h: '', c: 'social fb'},
                {e: 'a', h: '', c: 'social twitter'},
                {e: 'a', h: '', c: 'social pin'},
                {e: 'a', h: '', c: 'feedback',t:'обратная связь'},
                {e: 'input', T: 'text', c: 'search', a: {placeholder: 'Поиск по сайту'}},
                logo
            ]
        }
    };

    tmpls.header = function(){
        return {c: 'header', n:'header'};
    };

    tmpls.subscribeControl = function () {
        return {
            c: 'subscribeControlContainer', n:'subscribeControl', C: [
                {e: 'a', h: '#', c: 'subscribe', t: l10n('subscribeTitle'), n:'subscribeLink'},
                {e:'input',c:'subscribe-input hidden',n:'subscribeInput', a: {placeholder: 'Введите email'}}
            ]
        };
    };

}(FIN));