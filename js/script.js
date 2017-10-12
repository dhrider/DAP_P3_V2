$(document).ready(function () {

    $('#lienActu').click(function () {
        $('.pageActu').removeClass('hide');
        $('.pageFestival').addClass('hide');
        $('.pageProg').addClass('hide');
        $('.pageContact').addClass('hide');
    });

    $('#lienFest').click(function () {
        $('.pageActu').addClass('hide');
        $('.pageFestival').removeClass('hide');
        $('.pageProg').addClass('hide');
        $('.pageContact').addClass('hide');
    });

    $('#lienProg').click(function () {
        $('.pageActu').addClass('hide');
        $('.pageFestival').addClass('hide');
        $('.pageProg').removeClass('hide');
        $('.pageContact').addClass('hide');
    });

    $('#lienContact').click(function () {
        $('.pageActu').addClass('hide');
        $('.pageFestival').addClass('hide');
        $('.pageProg').addClass('hide');
        $('.pageContact').removeClass('hide');
    });

    $('#btn').click(function () {
        $('.modal').modal('show');
    })
});


