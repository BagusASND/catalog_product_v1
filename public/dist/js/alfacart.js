$(window).load(function() {
    $(".loader-wrapper").fadeOut("slow");
})

$(document).ready(function(){
    $('.single-slide').slick({
        autoplay: true,
        dots: true,
        arrows: false,
        focusOnSelect: false
    });

    $('.img-slider-pdp').slick({
        dots: true,
        arrows: false,
        focusOnSelect: false
    });

    // Autofocus on search dialog
    $("#modalSearchSuggest").on("shown.bs.modal", function(){
        $(this).find('input').focus();
    });

    $("#changeQty").on("shown.bs.modal", function(){
        $(this).find('input').focus();
    });


    // SideBar

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
        $('#categorySubmenuNext').removeClass('active');
        $('.slide-child li a.has-sub').addClass('collapsed');
        $('.slide-child li ul').removeClass('show');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        // $('.collapse.in').toggleClass('in');
        // $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });


    // Submenu Slide
    $('#categorySubmenu').click(function () {
        $('#categorySubmenuNext').addClass('active');
    })
    $('#categorySubmenuNext li a.dismiss').click(function () {
        $('#categorySubmenuNext').removeClass('active');
        $('.slide-child li a.has-sub').addClass('collapsed');
        $('.slide-child li ul').removeClass('show');
    })


    // Show More Footer Content

    $('#moreBtn').click(function () {
        $('.view-content').removeClass('less',1000);
        $('#moreBtn').addClass('d-none');
        $('#lessBtn').removeClass('d-none');
    })
    $('#lessBtn').click(function () {
        $('.view-content').addClass('less',1000);
        $('#moreBtn').removeClass('d-none');
        $('#lessBtn').addClass('d-none');
    })

    $('#scrollTopBtn').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });


    $("#nominalToken").show(300);
    $("#infoTagihan").hide(300);
    $("#tagihanNext").hide(300);
    $("#token").click(function () {
        $("#nominalToken").show(300);
        $("#showTotal").show(300);
        $("#infoTagihan").hide(300);
        $("#tokenNext").show(300);
        $("#tagihanNext").hide(300);
    })
    $("#tagihan").click(function () {
        $("#nominalToken").hide(300);
        $("#showTotal").hide(300);
        $("#infoTagihan").show(300);
        $("#tokenNext").hide(300);
        $("#tagihanNext").show(300);
    })

});

var scrollPixel = 0;

$(window).scroll(function() {
    if($(this).scrollTop() > scrollPixel) {
        if ($(this).scrollTop() > 150){
            $('.header-search-float').addClass("sticky");
            $('#stickyFilter').addClass("active");
            $('.main-logo').hide();
        }
        $('#float-fixed-filter').removeClass("active");

        if ($(this).scrollTop() > 400){
            $('#scrollTopBtn').fadeIn('slow');
        }
    } else {
        if ($(this).scrollTop() < 150){
            $('.header-search-float').removeClass("sticky");
            $('#stickyFilter').removeClass("active");
            $('.main-logo').show();
        }
        $('#float-fixed-filter').addClass("active");

        if ($(this).scrollTop() < 400){
            $('#scrollTopBtn').fadeOut('slow');
        }
    }
    scrollPixel = $(this).scrollTop();
});

function saveNumberFunction() {
    var savenum = document.getElementById("saveNumber");
    if(savenum.checked == true){
        $('#saveNumberDialog').modal('show');
    }
}
function cancelSaveFunction() {
    document.getElementById("saveNumber").checked = false;
}


function increaseValue() {
    var value = parseInt(document.getElementById('qtyValue').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    if(value > 1){
        $('#decrease .input-group-text').addClass('text-primary');
    }
    document.getElementById('qtyValue').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('qtyValue').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    if(value <= 1){
        value = 1;
        $('#decrease .input-group-text').removeClass('text-primary');
    }
    document.getElementById('qtyValue').value = value;
}

function increaseValue1() {
    var value = parseInt(document.getElementById('qtyValue1').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    if(value > 1){
        $('#decrease1 .input-group-text').addClass('text-primary');
    }
    document.getElementById('qtyValue1').value = value;
}

function decreaseValue1() {
    var value = parseInt(document.getElementById('qtyValue1').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    if(value <= 1){
        value = 1;
        $('#decrease1 .input-group-text').removeClass('text-primary');
    }
    document.getElementById('qtyValue1').value = value;
}