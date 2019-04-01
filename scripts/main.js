'use strict';

// ready
$(document).ready(function () {

    // slider {http://idangero.us/swiper/}
    var mySwiper = new Swiper('.catalog', {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
    // slider

    // popup {magnific-popup}
    $('.popup-modal').magnificPopup({
        type: 'inline'
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
    // popup

    //tooltip
    $('.tooltip').mouseover(function () {
        var data = $(this).data('tooltip');
        $(this).html('<div class="tooltip-body">' + $(this).data('tooltip') + '</div>');
    });
    $('.tooltip').mouseleave(function () {
        $(this).html('');
    });
    //tooltip

    //switcherBlock--js
    var switcherInput = $('.switcherBlock--js input');
    var switcherText = $('.switcherBlock--js .switcher-text');
    var forPhone = $('.forPhone');
    var forCard = $('.forCard');
    switcherInput.click(function () {
        switcherText.removeClass('active');
        forPhone.removeClass('active');
        forCard.removeClass('active');
        if ($(this).prop('checked')) {
            $('.switcherBlock--js .switcher-text:last-child').addClass('active');
            forCard.addClass('active');
        } else {
            $('.switcherBlock--js .switcher-text:first-child').addClass('active');
            forPhone.addClass('active');
        }
    });
    switcherText.click(function () {
        switcherText.removeClass('active');
        $(this).addClass('active');
        if ($(this).is(':first-child')) {
            switcherInput.prop("checked", false);
            forCard.removeClass('active');
            forPhone.addClass('active');
        } else {
            switcherInput.prop("checked", true);
            forPhone.removeClass('active');
            forCard.addClass('active');
        }
    });
    //switcherBlock--js

    // mask phone {maskedinput}
    $("[name=phone]").mask("+7 (999) 999-9999");
    // mask phone

    //.control-pass
    $('.control-pass .icon-eye').click(function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).prev().attr('type', 'text');
        } else {
            $(this).prev().attr('type', 'password');
        }
    });
    $('input[name=phone]').blur(function () {
        if ($(this).val().length == 0 || $(this).val() == "") {
            $(this).parent().next().find('.btn').attr('disabled', true);
        } else {
            $(this).parent().next().find('.btn').attr('disabled', false);
        }
    });
    //.control-pass

    // $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    //     $(this)
    //         .addClass('active').siblings().removeClass('active')
    //         .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    // });

    var minutes = 60 * 1,
        display = $('#time');

    function startTimer(duration, display) {
        var timer = duration,
            minutes = undefined,
            seconds = undefined;
        var i = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            display.html(minutes + " мин. " + seconds + " сек.");
            if (--timer < 0) {
                display.parent().hide();
                display.parent().next().show();
                clearInterval(i);
            }
        }, 1000);
    }

    startTimer(minutes, display);
    $('.sentagain--js').click(function () {
        $(this).hide();
        $(this).prev().show();
        startTimer(minutes, display);
        return false;
    });

    //sticky
    var $sticky = $('.sticky');
    var $stickyrStopper = $('.sticky-stopper');
    if (!!$sticky.offset()) {
        (function () {

            var generalSidebarHeight = $sticky.innerHeight();
            var stickyTop = $sticky.offset().top;
            var stickOffset = 0;
            var stickyStopperPosition = $stickyrStopper.offset().top;
            var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
            var diff = stopPoint - 210;

            $(window).scroll(function () {
                // scroll event
                var windowTop = $(window).scrollTop(); // returns number

                if (stopPoint < windowTop) {
                    $sticky.css({ position: 'absolute', top: diff });
                } else if (stickyTop < windowTop + stickOffset) {
                    $sticky.css({ position: 'fixed', top: stickOffset });
                } else {
                    $sticky.css({ position: 'relative', top: 'initial' });
                }
            });
        })();
    }
    //sticky

    //select
    $('select').select2({
        minimumResultsForSearch: Infinity
    });
    $('select').on("change", function () {
        var value = $(this).val();
        $('.cabinetCatalog-item').hide();
        $('.' + value).show(500);
        if (value === 'all') {
            $('.cabinetCatalog-item').show(500);
        }
    });
    //select

    //.btn--js
    $('.btn--js').click(function () {
        $(this).closest('.cabinetCatalog-inner').toggleClass('active');
        if ($(this).closest('.cabinetCatalog-inner').hasClass('active')) {
            $(this).find('span').text('выбран');
        } else {
            $(this).find('span').text('выбрать');
        }
        return false;
    });
    //.btn--js

    //.flip-card
    $('.close-btn').click(function () {
        $(this).parent().toggleClass('active');
    });
    //.flip-card
});
// ready

// mobile sctipts
var screen_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if (screen_width <= 767) {}
// mobile sctipts
//# sourceMappingURL=main.js.map
