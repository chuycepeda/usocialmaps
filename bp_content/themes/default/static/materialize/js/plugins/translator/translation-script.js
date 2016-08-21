(function(){
    switchLanguage();
})();


/**** Automatic Language Translation ****/
function switchLanguage() {

    var userLang = navigator.language || navigator.userLanguage;
    var language = 'es';
    // if(userLang == 'fr') language = 'fr';
    if(userLang == 'en') language = 'en';

    /* If user has selected a language, we apply it */
    if ($.cookie('app-language')) {
        var language = $.cookie('app-language'); 
        if(language == 'en') {
            $('#tr-flag').attr("src", "/default/materialize/images/flags/US.png");
        }
    }
    /* We get current language on page load */
    $("[data-translate]").jqTranslate('/default/materialize/js/plugins/translator/tr', {
        forceLang: language
    });

    /* Change language on click in a select input for example */
    $('#switch-lang').on('change', function(e) {
        e.preventDefault();
        language = $(this).val();
        $("[data-translate]").jqTranslate('/default/materialize/js/plugins/translator/tr', {
            forceLang: language
        });

        /* We save language inside a cookie */
        $.cookie('app-language', language);
        $.cookie('app-language', language, { path: '/' });
    });
  
}