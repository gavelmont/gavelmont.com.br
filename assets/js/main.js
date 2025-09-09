AOS.init({
    duration: 1000,
    delay: 200,
});

$(document).ready(() => {
    // Mostrar/ocultar menu de navegação
    $('#menu_button').bind('click', () => {
        $('#menu_items').toggle(400);
    })

    if ($('#menu_button').is(':visible')) {
        $('#menu_button').click();
    }
});
