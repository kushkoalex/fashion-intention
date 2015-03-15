(function (fin) {
    var tmpls = fin.tmpls,
        a9 = fin.global.A9,
        l10n = a9.l10n;

    tmpls.header = function () {
        return {
            c: 'header', C: [
                {e: 'a', h: '', c: 'subscribe', t: l10n('subscribeTitle')},
                {e: 'a', h: '', c: 'social fb'},
                {e: 'a', h: '', c: 'social twitter'},
                {e: 'a', h: '', c: 'social pin'},
                {e: 'a', h: '', c: 'feedback'},
                {e: 'input', T: 'text', c: 'search', a: {placeholder: 'Поиск по сайту'}},
                {c: 'logo'}
            ]
        }
    };
}(FIN));