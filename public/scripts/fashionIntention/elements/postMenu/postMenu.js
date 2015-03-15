FIN.postMenu = function($object){
    var fin = this,
        global = fin.global,
        a9 = global.A9,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        tp = global.cnCt.tp,
        settings = fin.settings,
        posts = settings.dataModels.posts,
        $fragment,

        build,
        u;

        $fragment = global.document.createDocumentFragment();



        for(var i= 2013; i<2016;i++){
            build = tp('postYear',{year:i}, $fragment);
        }


        $object.appendChild($fragment);


        //a9.each(posts, function(post,i){
        //
        //});



};