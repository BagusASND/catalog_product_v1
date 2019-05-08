$(document).ready(function () {
    $('.slider-testimony-home').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        centerMode: false,
        leftMode: true,
        focusOnSelect: false
    });

    $('.single-slider').slick({
        autoplay: true,
        dots: false,
        arrows: true,
        focusOnSelect: false
    });


    // SideBar

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
    });


    $('#inputGroupFile02').on('change',function(){
        //get the file name
        var fileName = $(this).val();
        //replace the "Choose a file" label
        $(this).next('.custom-file-label').html(fileName);
    })


    // DatePicker
    $('#datepicker').datepicker({
        uiLibrary: 'bootstrap4'
    });
});

function trainingStatementNo(){
    document.getElementById('trainingForm').style.display = 'none';
}
function trainingStatementYes(){
    document.getElementById('trainingForm').style.display = 'block';
}


var scrollPixel = 0;
$(window).scroll(function() {
    if($(this).scrollTop() > scrollPixel) {
        if ($(this).scrollTop() > 150){
            $('header').addClass("after-scroll");
        }
    } else {
        if ($(this).scrollTop() < 150){
            $('header').removeClass("after-scroll");
        }
    }
    scrollPixel = $(this).scrollTop();
});