// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

    $("a[href*='#portfolioModal']").on('click', function(event) {
      console.log("inside portfolioModal1:" + document.URL + "/" + $(this).attr('href'))
      history.pushState(null, null, document.URL + "/" + $(this).attr('href'))
      // event.preventDefault();
    });

    $("#portfolioModalDataScienceVideo").on('hidden.bs.modal', function (e) {
        $("#portfolioModalDataScienceVideo iframe").attr("src", $("#portfolioModalDataScienceVideo iframe").attr("src"));
    });

    $("#portfolioModalXmasVid").on('hidden.bs.modal', function (e) {
        $("#portfolioModalXmasVid iframe").attr("src", $("#portfolioModalXmasVid iframe").attr("src"));
    });

    $("#portfolioModaliOTComp").on('hidden.bs.modal', function (e) {
        $("#portfolioModaliOTComp iframe").attr("src", $("#portfolioModaliOTComp iframe").attr("src"));
    });

    $("#portfolioModalNescafeVid").on('hidden.bs.modal', function (e) {
        $("#portfolioModalNescafeVid iframe").attr("src", $("#portfolioModalNescafeVid iframe").attr("src"));
    });

    $("#portfolioModalPharmatonVid").on('hidden.bs.modal', function (e) {
        $("#portfolioModalPharmatonVid iframe").attr("src", $("#portfolioModalPharmatonVid iframe").attr("src"));
    });

    $("#portfolioModalRedHorseVid").on('hidden.bs.modal', function (e) {
        $("#portfolioModalRedHorseVid iframe").attr("src", $("#portfolioModalRedHorseVid iframe").attr("src"));
    });

    $("#portfolioModalSmartCow").on('hidden.bs.modal', function (e) {
        $("#portfolioModalSmartCow iframe").attr("src", $("#portfolioModalSmartCow iframe").attr("src"));
    });

    // $("#portfolioModalRedHorseVid, #portfolioModaliOTComp, #portfolioModalDataScienceVideo").on('hidden.bs.modal', function (e) {
    //     $("#portfolioModalRedHorseVid, #portfolioModaliOTComp, #portfolioModalDataScienceVideo").attr("src", $("#portfolioModalRedHorseVid, #portfolioModaliOTComp, #portfolioModalDataScienceVideo iframe").attr("src"));
    // });

    // $(function(){
    //     $('#portfolioModalDataScienceVideo').modal({
    //         show: false
    //     }).on('hidden.bs.modal', function(){
    //         $(this).find('video')[0].pause();
    //     });
    // });



})(jQuery); // End of use strict
