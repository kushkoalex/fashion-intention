FIN.header = function ($object) {
    var fin = this,
        global = fin.global,
        a9 = global.A9,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        tp = global.cnCt.tp,
        build,
        $subscribeLink,
        $subscribeInput,
        $subscribed,
        u;


    build = tp('headerContent');

    $subscribeLink = build.subscribeLink;
    $subscribeInput = build.subscribeInput;
    $subscribed = build.subscribed;


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


    //a9.addEvent($subscribeLink, eventOnPointerEnd, onSubscribeLinkClick);
    //a9.addEvent($subscribeInput, 'keydown', onSubscribeInputKeydown);

    $object.appendChild(build.r);
};