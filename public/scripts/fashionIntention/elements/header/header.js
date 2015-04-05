FIN.header = function ($object) {
    var fin = this,
        global = fin.global,
        a9 = global.A9,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        tp = global.cnCt.tp,
        build,
        $body = document.body,
        $subscribeLink,
        $subscribeInput,
        $subscribed,
        $feedbackPanel,
        $feedbackLink,
        u;


    build = tp('headerContent');

    $subscribeLink = build.subscribeLink;
    $subscribeInput = build.subscribeInput;
    $subscribed = build.subscribed;
    $feedbackPanel = build.feedBackPanel;
    $feedbackLink = build.feedbackLink;


    function onSubscribeLinkClick() {
        a9.addClass($subscribeLink, 'hidden');
        a9.removeClass($subscribeInput, 'hidden');
        $subscribeInput.focus();
    }

    function onSubscribeInputKeydown(e) {
        a9.removeClass($subscribeInput, 'error');

        if (a9.testEventOfKeyName(e, 'enter')) {
            var email = e.target.value;
            if (!email || !a9.validation.validators.email(email)) {
                a9.addClass($subscribeInput, 'error');
                return;
            }

            a9.request({
                method: 'POST',
                postData: {
                    email: email
                },
                url: '/subscribe',
                onSuccess: function (success) {
                    a9.addClass($subscribeInput, 'hidden');
                    a9.removeClass($subscribed, 'hidden');
                },
                onError: function (error) {
                    //alert(''+error);
                }
            });
        }else if(a9.testEventOfKeyName(e, 'esc')){
            a9.addClass($subscribeInput, 'hidden');
            a9.removeClass($subscribeLink, 'hidden');
        }
    }

    function onFeedbackLinkClick(e){
        toggleFeedbackPanel(e);
    }

    function toggleFeedbackPanel(e){
        if(a9.hasClass($feedbackPanel,'hidden')){
            a9.removeClass($feedbackPanel, 'hidden');
        }else{
            a9.addClass($feedbackPanel, 'hidden');
        }
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    }

    function closeFeedbackPanel() {
        if (!a9.hasClass($feedbackPanel, 'hidden')) {
            a9.addClass($feedbackPanel, 'hidden');
        }
    }

    function preventCloseFeedbackPanel(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    }


    a9.addEvent($subscribeLink, eventOnPointerEnd, onSubscribeLinkClick);
    a9.addEvent($subscribeInput, 'keydown', onSubscribeInputKeydown);
    a9.addEvent($feedbackLink,eventOnPointerEnd, onFeedbackLinkClick);

    a9.addEvent($body, eventOnPointerEnd, closeFeedbackPanel);
    a9.addEvent($feedbackPanel, eventOnPointerEnd, preventCloseFeedbackPanel);

    $object.appendChild(build.r);
};