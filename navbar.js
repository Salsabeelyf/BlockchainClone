$(function () {
    $("#dropdownContainer").load("dropdownMenu.html");
    $('.dropdown').hover(function () {
        $(this).addClass('show');
        $('#dropdownContainer').addClass('show');
    }, function () {
        $(this).removeClass('show');
        $('#dropdownContainer').removeClass('show');
    });
});
