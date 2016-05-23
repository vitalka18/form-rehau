$(function (){

    $('.tooltip').tooltipster({
        animation: 'grow',
        delay: 200,
        position: 'top',
        maxWidth: 300,
        theme: 'tooltipster-light',
		contentAsHTML: true
    });

    $('.choose-who-you-are .close').on('click', function (){
        $('.choose-who-you-are').fadeOut();			
    });			


    $('.choose-who-you-are .client').on('click', function (){
        $('.promotions-wrapper').fadeOut();			
        $('.seminars-wrapper').fadeOut();			
        $('.news-wrapper').fadeOut();			
        $('.enter-reg-wrapper').fadeOut();			
        $('.choose-who-you-are').fadeOut();
        
        $('.proffi_menu').fadeOut();


        $.cookie("user", "client");
    });			


    $('.choose-who-you-are .proffi').on('click', function (){
        $('.examples-wrapper').fadeOut();	
        $('.choose-who-you-are').fadeOut();		
        $.cookie("user", "proffi");

        $('.client_menu').fadeOut();

    });			

    $( "#tabs" ).tabs();
  
    //$('input, select').styler();

    $(".cb_youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});

});