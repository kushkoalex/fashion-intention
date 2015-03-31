FIN.slider = function ($object) {
    var fin = this,
        global = fin.global,
        a9 = global.A9,
        tp = global.cnCt.tp,
        settings = fin.settings,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        $slidePrev,
        $slideNext,
        $sliderItem,

        currentSlide = 0,
        $contentImages = [],
        build,
        images = a9.$c('image', $object),
        sliderContainerClass = 'images-container',
        i,
        u;


    //build = tp('slider');


    $slidePrev = a9.$c('left', $object)[0];
    $slideNext = a9.$c('right', $object)[0];


    //console.log(images);


    //$sliderItem = build.imagesContainer;
    //$sliderItem.images = build.img;
    //$sliders.push($sliderItem);

    a9.addEvent($slidePrev, eventOnPointerEnd, onSlidePrevClick);
    a9.addEvent($slideNext, eventOnPointerEnd, onSlideNextClick);


    //
    //setTimeout(slideImageFrame, 100);
    //
    //function setInactiveImages() {
    //    for (i = 0; i < $contentImages.length; i++) {
    //        a9.removeClass($contentImages[i], "active");
    //    }
    //}
    //
    //function updateCurrentVisibleFrameIndex() {
    //    currentVisibleFrameIndex++;
    //    if (currentVisibleFrameIndex >= $contentImages.length) {
    //        currentVisibleFrameIndex = 0;
    //    }
    //}
    //
    //function setActiveImage() {
    //    for (i = 0; i < $contentImages.length; i++) {
    //        if (i == currentVisibleFrameIndex) {
    //            a9.addClass($contentImages[i], "active");
    //        }
    //    }
    //}
    //
    //function slideImageFrame() {
    //    setInactiveImages();
    //    updateCurrentVisibleFrameIndex();
    //    setActiveImage();
    //    setTimeout(slideImageFrame, controlsDescriptors.site.mainPageSlideTimeout);
    //}
    //

    function onSlidePrevClick() {
        onSliderClick('prev');
    }

    function onSlideNextClick() {
        onSliderClick('next');
    }

    function onSliderClick(direction) {

        for (i = 0; i < images.length; i++) {
            a9.removeClass(images[i], 'active');
        }
        if (direction == 'next') {
            if (currentSlide < images.length - 1) {
                currentSlide = currentSlide + 1;
            } else {
                currentSlide = 0;
            }
        } else if (direction == 'prev') {
            if (currentSlide > 0) {
                currentSlide = currentSlide - 1;
            } else {
                currentSlide = images.length - 1;
            }
        }
        a9.addClass(images[currentSlide], 'active');
    }
};