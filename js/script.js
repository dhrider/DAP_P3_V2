$(document).ready(function () {
    $('#lienActu').click(function () {
        $('.pageActu').show();
        $('.pageFestival').hide();
        $('.pageProg').hide();
        $('.pageContact').hide();
    });

    $('#lienFest').click(function () {
        $('.pageActu').hide();
        $('.pageFestival').show();
        $('.pageProg').hide();
        $('.pageContact').hide();
    });

    $('#lienProg').click(function () {
        $('.pageActu').hide();
        $('.pageFestival').hide();
        $('.pageProg').show();
        $('.pageContact').hide();
    });

    $('#lienContact').click(function () {
        $('.pageActu').hide();
        $('.pageFestival').hide();
        $('.pageProg').hide();
        $('.pageContact').show();
    });
});


