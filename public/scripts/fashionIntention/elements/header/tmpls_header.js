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
                {e: 'a', c: 'feedback',t:l10n('feedbackTitle'), n:'feedbackLink'},
                {e: 'input', T: 'text', c: 'search', a: {placeholder: l10n('searchInputText','firstUpper')}},
                logo,
                tmpls.feedbackPanel()
            ]
        }
    };

    tmpls.feedbackPanel = function(){
        var url = fin.settings.controlsDescriptors.site.url;
        return {c:'feedbackPanel hidden', n:'feedBackPanel',C:[
            {c:'feedbackPanel-triangle'},
            {c:'feedbackPanel-content',C:[
                {c:'dot'},
                {c:'author-name',t:l10n('authorName')},
                {c:'dot'},
                {c:'phone',t:l10n('phone')},
                {c:'feedback-social fb',C:{e:'a',h:url.fb,t:l10n('fb','firstUpper')}},
                {c:'feedback-social vk',C:{e:'a',h:url.vk,t:l10n('vk','firstUpper')}},
                {c:'feedback-social instagram',C:{e:'a',h:url.instagram,t:l10n('instagram','firstUpper')}}
            ]}
        ]}
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