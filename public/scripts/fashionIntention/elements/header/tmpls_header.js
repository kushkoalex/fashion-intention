(function (fin) {
    var tmpls = fin.tmpls,
        a9 = fin.global.A9,
        l10n = a9.l10n;

    tmpls.headerContent = function (isMainPage) {

        var logo,
            socialUrl = fin.settings.controlsDescriptors.site.url;
        if (isMainPage) {
            logo = {c: 'logo'};
        } else {
            logo = {e: 'a', h: fin.settings.controlsDescriptors.site.mainPageUrl, c: 'logo'};
        }

        return {
            c: 'header', n: 'header', C: [
                tmpls.subscribeControl(),
                {e: 'a', h: socialUrl.fb, c: 'social fb'},
                {e: 'a', h: socialUrl.twitter, c: 'social twitter'},
                {e: 'a', h: socialUrl.pinterest, c: 'social pin'},
                //{e: 'a', h: '', c: 'feedback',t:l10n('feedbackTitle')},
                //{e: 'input', T: 'text', c: 'search', a: {placeholder: l10n('searchInputText','firstUpper')}},
                logo
            ]
        }
    };

    tmpls.header = function () {
        return {c: 'header', n: 'header'};
    };

    tmpls.subscribeControl = function () {
        return {
            c: 'subscribeControlContainer', n: 'subscribeControl', C: [
                {e: 'a', h: '#', c: 'subscribe', t: l10n('subscribeTitle'), n: 'subscribeLink'},
                {
                    e: 'input',
                    c: 'subscribe-input hidden',
                    n: 'subscribeInput',
                    a: {placeholder: l10n('subscribeEnterEmail', 'firstUpper')}
                },
                {c: 'subscribed hidden', n: 'subscribed', t: l10n('subscribeSuccessful', 'firstUpper')}
            ]
        };
    };

}(FIN));