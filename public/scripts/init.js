A9.ready(function (a9, global) {
    var fin = global.FIN,
        settings = fin.settings,
        $body = global.document.body,
        tp = global.cnCt.tp,
        $ = a9.$,
        //$footer = $('footer'),
        $mainPage = $('mainPage'),
        //$events = $('events'),
        //$eventDetails = $('eventDetails'),
        //$media = $('media'),
        //$partnership = $('partnership'),
        //$news = $('news'),
        //$contacts = $('contacts'),

    //domNodesQuery = a9.$cs('showDetails'),
    //$showDetails = domNodesQuery.showDetails,
        i,
        u;


    global.cnCt.bindTemplates(fin.tmpls);

    if ($mainPage !== null) {
        fin.mainPage($mainPage);
    }

    //if ($events !== null) {
    //    nv.events($events);
    //}
    //
    //if ($eventDetails !== null) {
    //    nv.eventDetails($eventDetails);
    //}
    //
    //if ($media !== null) {
    //    nv.media($media);
    //}
    //
    //if ($partnership !== null) {
    //    nv.partnership($partnership);
    //}
    //
    //if ($news !== null) {
    //    nv.news($news);
    //}
    //
    //if ($contacts !== null) {
    //    nv.contacts($contacts);
    //}

    //if ($footer !== null) {
    //    tp('footer', $footer);
    //}
});