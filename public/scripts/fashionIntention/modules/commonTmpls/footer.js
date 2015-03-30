(function (fin) {
    var tmpls = fin.tmpls,
        a9 = fin.global.A9,
        l10n = a9.l10n;

    tmpls.footer = function () {
        var controlsDescriptors = fin.settings.controlsDescriptors;

        return {
            c: 'footer', C: {
                c: 'em',
                H: l10n('emMadeIn', 'firstUpper'),
                C: [
                    {e: 'br'},
                    {e: 'a', h: controlsDescriptors.site.url.em, t: l10n('emStudio', 'firstUpper')}
                ]
            }
        };
    };
}(FIN));