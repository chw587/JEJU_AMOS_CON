$(document).ready(function () {
    // 제주 (icon_1)
    $('.sec_1 .content_button .btn').eq(0).on('click', function () {
        $('.sec_1 .page_1').show();
        $('.sec_1 .page_2').hide();
        $('.sec_2 .page_1').hide();
        $('.sec_2 .page_2').hide();
        $('.sec_3 .page_1').hide();
        $('.sec_3 .page_2').hide();
        $('.sec_4 .page_1').hide();

        $('.sec_1').show();
        $('.sec_2').hide();
        $('.sec_3').hide();
        $('.sec_4').hide();

        $('.sec_1 .content_button .btn').eq(0).addClass('ghost');
        $('.sec_1 .content_button .btn').eq(1).removeClass('ghost');

        // sidebar active
        $(".icon_1").addClass('active');
        $(".icon_2").removeClass('active')
        $(".icon_3").removeClass('active')
        $(".icon_4").removeClass('active')
        $(".icon_5").removeClass('active')
        $(".icon_6").removeClass('active')
        $(".icon_7").removeClass('active')

        $(".menu_1 .item").eq(0).addClass('active');
        $(".menu_1 .item").eq(1).removeClass('active')
        $(".menu_2 .item").eq(0).removeClass('active');
        $(".menu_2 .item").eq(1).removeClass('active')
        $(".menu_3 .item").eq(0).removeClass('active');
        $(".menu_3 .item").eq(1).removeClass('active')
        $(".menu_4 .item").eq(0).removeClass('active')
    });

    $(".menu_1 .item:first-child").on('click', function () {
        $('.sec_1 .page_1').show();
        $('.sec_1 .page_2').hide();
        $('.sec_2 .page_1').hide();
        $('.sec_2 .page_2').hide();
        $('.sec_3 .page_1').hide();
        $('.sec_3 .page_2').hide();
        $('.sec_4 .page_1').hide();

        $('.sec_1').show();
        $('.sec_2').hide();
        $('.sec_3').hide();
        $('.sec_4').hide();

        $('.sec_1 .content_button .btn').eq(0).addClass('ghost');
        $('.sec_1 .content_button .btn').eq(1).removeClass('ghost');

        // sidebar active
        $(".icon_1").addClass('active');
        $(".icon_2").removeClass('active')
        $(".icon_3").removeClass('active')
        $(".icon_4").removeClass('active')
        $(".icon_5").removeClass('active')
        $(".icon_6").removeClass('active')
        $(".icon_7").removeClass('active')

        $(".menu_1 .item").eq(0).addClass('active');
        $(".menu_1 .item").eq(1).removeClass('active')
        $(".menu_2 .item").eq(0).removeClass('active');
        $(".menu_2 .item").eq(1).removeClass('active')
        $(".menu_3 .item").eq(0).removeClass('active');
        $(".menu_3 .item").eq(1).removeClass('active')
        $(".menu_4 .item").eq(0).removeClass('active')
    })

    // 인천 (icon_2)
    $('.sec_1 .content_button .btn').eq(1).on('click', function () {
        $('.sec_1 .page_1').hide();
        $('.sec_1 .page_2').show();
        $('.sec_2 .page_1').hide();
        $('.sec_2 .page_2').hide();
        $('.sec_3 .page_1').hide();
        $('.sec_3 .page_2').hide();
        $('.sec_4 .page_1').hide();

        $('.sec_1').show();
        $('.sec_2').hide();
        $('.sec_3').hide();
        $('.sec_4').hide();

        $('.sec_1 .content_button .btn').eq(1).addClass('ghost');
        $('.sec_1 .content_button .btn').eq(0).removeClass('ghost');

        // sidebar active
        $(".icon_1").removeClass('active');
        $(".icon_2").addClass('active')
        $(".icon_3").removeClass('active')
        $(".icon_4").removeClass('active')
        $(".icon_5").removeClass('active')
        $(".icon_6").removeClass('active')
        $(".icon_7").removeClass('active')

        $(".menu_1 .item").eq(0).removeClass('active');
        $(".menu_1 .item").eq(1).addClass('active')
        $(".menu_2 .item").eq(0).removeClass('active');
        $(".menu_2 .item").eq(1).removeClass('active')
        $(".menu_3 .item").eq(0).removeClass('active');
        $(".menu_3 .item").eq(1).removeClass('active')
        $(".menu_4 .item").eq(0).removeClass('active')
    });

    $(".menu_1 .item:last-child").on('click', function () {
        $('.sec_1 .page_1').hide();
        $('.sec_1 .page_2').show();
        $('.sec_2 .page_1').hide();
        $('.sec_2 .page_2').hide();
        $('.sec_3 .page_1').hide();
        $('.sec_3 .page_2').hide();
        $('.sec_4 .page_1').hide();

         $('.sec_1').show();
        $('.sec_2').hide();
        $('.sec_3').hide();
        $('.sec_4').hide();

        $('.sec_1 .content_button .btn').eq(1).addClass('ghost');
        $('.sec_1 .content_button .btn').eq(0).removeClass('ghost');

        // sidebar active
        $(".icon_1").removeClass('active');
        $(".icon_2").addClass('active')
        $(".icon_3").removeClass('active')
        $(".icon_4").removeClass('active')
        $(".icon_5").removeClass('active')
        $(".icon_6").removeClass('active')
        $(".icon_7").removeClass('active')

        $(".menu_1 .item").eq(0).removeClass('active');
        $(".menu_1 .item").eq(1).addClass('active')
        $(".menu_2 .item").eq(0).removeClass('active');
        $(".menu_2 .item").eq(1).removeClass('active')
        $(".menu_3 .item").eq(0).removeClass('active');
        $(".menu_3 .item").eq(1).removeClass('active')
        $(".menu_4 .item").eq(0).removeClass('active')
    })

    // 수신파일 (icon_3)
    $('.menu_2 .item:first-child').on('click', function () {
        $('.sec_1 .page_1').hide();
        $('.sec_1 .page_2').hide();
        $('.sec_2 .page_1').show();
        $('.sec_2 .page_2').hide();
        $('.sec_3 .page_1').hide();
        $('.sec_3 .page_2').hide();
        $('.sec_4 .page_1').hide();

        $('.sec_1').hide();
        $('.sec_2').show();
        $('.sec_3').hide();
        $('.sec_4').hide();

        $('.sec_2 .content_button .btn').eq(0).addClass('ghost');
        $('.sec_2 .content_button .btn').eq(1).removeClass('ghost');

        // sidebar active
        $(".icon_1").removeClass('active');
        $(".icon_2").removeClass('active')
        $(".icon_3").addClass('active')
        $(".icon_4").removeClass('active')
        $(".icon_5").removeClass('active')
        $(".icon_6").removeClass('active')
        $(".icon_7").removeClass('active')

        $(".menu_1 .item").eq(0).removeClass('active');
        $(".menu_1 .item").eq(1).removeClass('active')
        $(".menu_2 .item").eq(0).addClass('active');
        $(".menu_2 .item").eq(1).removeClass('active')
        $(".menu_3 .item").eq(0).removeClass('active');
        $(".menu_3 .item").eq(1).removeClass('active')
        $(".menu_4 .item").eq(0).removeClass('active')
    })

    $('.sec_2 .content_button .btn').eq(0).on('click', function () {
        $('.sec_1 .page_1').hide();
        $('.sec_1 .page_2').hide();
        $('.sec_2 .page_1').show();
        $('.sec_2 .page_2').hide();
        $('.sec_3 .page_1').hide();
        $('.sec_3 .page_2').hide();
        $('.sec_4 .page_1').hide();

        $('.sec_1').hide();
        $('.sec_2').show();
        $('.sec_3').hide();
        $('.sec_4').hide();

        $('.sec_2 .content_button .btn').eq(0).addClass('ghost');
        $('.sec_2 .content_button .btn').eq(1).removeClass('ghost');

        // sidebar active
        $(".icon_1").removeClass('active');
        $(".icon_2").removeClass('active')
        $(".icon_3").addClass('active')
        $(".icon_4").removeClass('active')
        $(".icon_5").removeClass('active')
        $(".icon_6").removeClass('active')
        $(".icon_7").removeClass('active')

        $(".menu_1 .item").eq(0).removeClass('active');
        $(".menu_1 .item").eq(1).removeClass('active')
        $(".menu_2 .item").eq(0).addClass('active');
        $(".menu_2 .item").eq(1).removeClass('active')
        $(".menu_3 .item").eq(0).removeClass('active');
        $(".menu_3 .item").eq(1).removeClass('active')
        $(".menu_4 .item").eq(0).removeClass('active')
    });

    // 장비 (icon_4)
    $('.menu_2 .item:last-child').on('click', function () {
        $('.sec_1 .page_1').hide();
        $('.sec_1 .page_2').hide();
        $('.sec_2 .page_1').hide();
        $('.sec_2 .page_2').show();
        $('.sec_3 .page_1').hide();
        $('.sec_3 .page_2').hide();
        $('.sec_4 .page_1').hide();

        $('.sec_1').hide();
        $('.sec_2').show();
        $('.sec_3').hide();
        $('.sec_4').hide();

        $('.sec_2 .content_button .btn').eq(1).addClass('ghost');
        $('.sec_2 .content_button .btn').eq(0).removeClass('ghost');

        // sidebar active
        $(".icon_1").removeClass('active');
        $(".icon_2").removeClass('active')
        $(".icon_3").removeClass('active')
        $(".icon_4").addClass('active')
        $(".icon_5").removeClass('active')
        $(".icon_6").removeClass('active')
        $(".icon_7").removeClass('active')

        $(".menu_1 .item").eq(0).removeClass('active');
        $(".menu_1 .item").eq(1).removeClass('active')
        $(".menu_2 .item").eq(0).removeClass('active');
        $(".menu_2 .item").eq(1).addClass('active')
        $(".menu_3 .item").eq(0).removeClass('active');
        $(".menu_3 .item").eq(1).removeClass('active')
        $(".menu_4 .item").eq(0).removeClass('active')
    })

    $('.sec_2 .content_button .btn').eq(1).on('click', function () {
        $('.sec_1 .page_1').hide();
        $('.sec_1 .page_2').hide();
        $('.sec_2 .page_1').hide();
        $('.sec_2 .page_2').show();
        $('.sec_3 .page_1').hide();
        $('.sec_3 .page_2').hide();
        $('.sec_4 .page_1').hide();

        $('.sec_1').hide();
        $('.sec_2').show();
        $('.sec_3').hide();
        $('.sec_4').hide();

        $('.sec_2 .content_button .btn').eq(1).addClass('ghost');
        $('.sec_2 .content_button .btn').eq(0).removeClass('ghost');

        // sidebar active
        $(".icon_1").removeClass('active');
        $(".icon_2").removeClass('active')
        $(".icon_3").removeClass('active')
        $(".icon_4").addClass('active')
        $(".icon_5").removeClass('active')
        $(".icon_6").removeClass('active')
        $(".icon_7").removeClass('active')

        $(".menu_1 .item").eq(0).removeClass('active');
        $(".menu_1 .item").eq(1).removeClass('active')
        $(".menu_2 .item").eq(0).removeClass('active');
        $(".menu_2 .item").eq(1).addClass('active')
        $(".menu_3 .item").eq(0).removeClass('active');
        $(".menu_3 .item").eq(1).removeClass('active')
        $(".menu_4 .item").eq(0).removeClass('active')
    });


    // 수행관리 (icon_5)
    $('.menu_3 .item:first-child').on('click', function () {
        $('.sec_1 .page_1').hide();
        $('.sec_1 .page_2').hide();
        $('.sec_2 .page_1').hide();
        $('.sec_2 .page_2').hide();
        $('.sec_3 .page_1').show();
        $('.sec_3 .page_2').hide();
        $('.sec_4 .page_1').hide();

        $('.sec_1').hide();
        $('.sec_2').hide();
        $('.sec_3').show();
        $('.sec_4').hide();

        $('.sec_3 .content_button .btn').eq(0).addClass('ghost');
        $('.sec_3 .content_button .btn').eq(1).removeClass('ghost');

        // sidebar active
        $(".icon_1").removeClass('active');
        $(".icon_2").removeClass('active')
        $(".icon_3").removeClass('active')
        $(".icon_4").removeClass('active')
        $(".icon_5").addClass('active')
        $(".icon_6").removeClass('active')
        $(".icon_7").removeClass('active')

        $(".menu_1 .item").eq(0).removeClass('active');
        $(".menu_1 .item").eq(1).removeClass('active')
        $(".menu_2 .item").eq(0).removeClass('active');
        $(".menu_2 .item").eq(1).removeClass('active')
        $(".menu_3 .item").eq(0).addClass('active');
        $(".menu_3 .item").eq(1).removeClass('active')
        $(".menu_4 .item").eq(0).removeClass('active')
    })

    $('.sec_3 .content_button .btn').eq(0).on('click', function () {
        $('.sec_1 .page_1').hide();
        $('.sec_1 .page_2').hide();
        $('.sec_2 .page_1').hide();
        $('.sec_2 .page_2').hide();
        $('.sec_3 .page_1').show();
        $('.sec_3 .page_2').hide();
        $('.sec_4 .page_1').hide();

        $('.sec_1').hide();
        $('.sec_2').hide();
        $('.sec_3').show();
        $('.sec_4').hide();

        $('.sec_3 .content_button .btn').eq(0).addClass('ghost');
        $('.sec_3 .content_button .btn').eq(1).removeClass('ghost');

        // sidebar active
        $(".icon_1").removeClass('active');
        $(".icon_2").removeClass('active')
        $(".icon_3").removeClass('active')
        $(".icon_4").removeClass('active')
        $(".icon_5").addClass('active')
        $(".icon_6").removeClass('active')
        $(".icon_7").removeClass('active')

        $(".menu_1 .item").eq(0).removeClass('active');
        $(".menu_1 .item").eq(1).removeClass('active')
        $(".menu_2 .item").eq(0).removeClass('active');
        $(".menu_2 .item").eq(1).removeClass('active')
        $(".menu_3 .item").eq(0).addClass('active');
        $(".menu_3 .item").eq(1).removeClass('active')
        $(".menu_4 .item").eq(0).removeClass('active')
    });

    // 자료 수집 (icon_6)
    $('.menu_3 .item:last-child').on('click', function () {
        $('.sec_1 .page_1').hide();
        $('.sec_1 .page_2').hide();
        $('.sec_2 .page_1').hide();
        $('.sec_2 .page_2').hide();
        $('.sec_3 .page_1').hide();
        $('.sec_3 .page_2').show();
        $('.sec_4 .page_1').hide();

        $('.sec_1').hide();
        $('.sec_2').hide();
        $('.sec_3').show();
        $('.sec_4').hide();

        $('.sec_3 .content_button .btn').eq(1).addClass('ghost');
        $('.sec_3 .content_button .btn').eq(0).removeClass('ghost');

        // sidebar active
        $(".icon_1").removeClass('active');
        $(".icon_2").removeClass('active')
        $(".icon_3").removeClass('active')
        $(".icon_4").removeClass('active')
        $(".icon_5").removeClass('active')
        $(".icon_6").addClass('active')
        $(".icon_7").removeClass('active')

        $(".menu_1 .item").eq(0).removeClass('active');
        $(".menu_1 .item").eq(1).removeClass('active')
        $(".menu_2 .item").eq(0).removeClass('active');
        $(".menu_2 .item").eq(1).removeClass('active')
        $(".menu_3 .item").eq(0).removeClass('active');
        $(".menu_3 .item").eq(1).addClass('active')
        $(".menu_4 .item").eq(0).removeClass('active')
    })

    $('.sec_3 .content_button .btn').eq(1).on('click', function () {
        $('.sec_1 .page_1').hide();
        $('.sec_1 .page_2').hide();
        $('.sec_2 .page_1').hide();
        $('.sec_2 .page_2').hide();
        $('.sec_3 .page_1').hide();
        $('.sec_3 .page_2').show();
        $('.sec_4 .page_1').hide();

        $('.sec_1').hide();
        $('.sec_2').hide();
        $('.sec_3').show();
        $('.sec_4').hide();

        $('.sec_3 .content_button .btn').eq(1).addClass('ghost');
        $('.sec_3 .content_button .btn').eq(0).removeClass('ghost');

        // sidebar active
        $(".icon_1").removeClass('active');
        $(".icon_2").removeClass('active')
        $(".icon_3").removeClass('active')
        $(".icon_4").removeClass('active')
        $(".icon_5").removeClass('active')
        $(".icon_6").addClass('active')
        $(".icon_7").removeClass('active')

        $(".menu_1 .item").eq(0).removeClass('active');
        $(".menu_1 .item").eq(1).removeClass('active')
        $(".menu_2 .item").eq(0).removeClass('active');
        $(".menu_2 .item").eq(1).removeClass('active')
        $(".menu_3 .item").eq(0).removeClass('active');
        $(".menu_3 .item").eq(1).addClass('active')
        $(".menu_4 .item").eq(0).removeClass('active')
    });


    // 결과 모니터링 (icon_7)
    $('.menu_4 .item').on('click', function () {
        $('.sec_1 .page_1').hide();
        $('.sec_1 .page_2').hide();
        $('.sec_2 .page_1').hide();
        $('.sec_2 .page_2').hide();
        $('.sec_3 .page_1').hide();
        $('.sec_3 .page_2').hide();
        $('.sec_4 .page_1').show();

        $('.sec_1').hide();
        $('.sec_2').hide();
        $('.sec_3').hide();
        $('.sec_4').show();

        $('.sec_4 .content_button .btn').addClass('ghost');


        // sidebar active
        $(".icon_1").removeClass('active');
        $(".icon_2").removeClass('active')
        $(".icon_3").removeClass('active')
        $(".icon_4").removeClass('active')
        $(".icon_5").removeClass('active')
        $(".icon_6").removeClass('active')
        $(".icon_7").addClass('active')

        $(".menu_1 .item").eq(0).removeClass('active');
        $(".menu_1 .item").eq(1).removeClass('active')
        $(".menu_2 .item").eq(0).removeClass('active');
        $(".menu_2 .item").eq(1).removeClass('active')
        $(".menu_3 .item").eq(0).removeClass('active');
        $(".menu_3 .item").eq(1).removeClass('active')
        $(".menu_4 .item").eq(0).addClass('active')
    })
});