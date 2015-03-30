FIN.header = function($object){
    var fin = this,
        global = fin.global,
        a9 = global.A9,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        tp = global.cnCt.tp,
        build,
        $subscribeLink,
        $subscribeInput,
        u;


    build = tp('headerContent');

    $subscribeLink = build.subscribeLink;
    $subscribeInput = build.subscribeInput;



    function onSubscribeLinkClick(){
        //console.log('click');
        //alert('');

        a9.addClass($subscribeLink,'hidden');
        a9.removeClass($subscribeInput,'hidden');
    }


    a9.addEvent($subscribeLink, eventOnPointerEnd, onSubscribeLinkClick);

    $object.appendChild(build.r);
};