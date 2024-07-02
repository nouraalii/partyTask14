/// <reference types="../@types/jquery"/>

$(document).ready(function() {
    // -------------------Open and close navigation sidebar ------------------
    $('.openNav').on('click', function() {
        $("#leftMenu").animate({ width: '250px' }, 200);
        $('#header-content').animate({ marginLeft: '250px' }, 200);
    });

    $('.closebtn').on('click', function() {
        $("#leftMenu").animate({ width: '0' }, 200);
        $("#header-content").animate({ marginLeft: '0' }, 200);
    });


    // -------------------Open and close sliderDown section ------------------
    $('.singerText').not('.active').hide();
    $('#sliderDown .toggle').on('click', function() {
        let $target = $(this).next('.singerText');
        $('.singerText').not($target).slideUp(500);
        $target.slideToggle(500);
    });

    // -------------------scroll ------------------
    $('.sidenav a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();

            // Store hash
            let hash = this.hash;

            // Animate smooth scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });
     // -------------------Countdown Timer Function ---------------------------
     function countDownToTime(countDate) {
        const futureDate = new Date(countDate).getTime();
        
        const updateCountdown = () => {
            const now = new Date().getTime();
            let timeDifference = futureDate - now;
    
            if (timeDifference < 0) {
                clearInterval(interval);
                $(".days").html(`0 D`);
                $(".hours").html(`0 h`);
                $(".minutes").html(`0 m`);
                $(".seconds").html(`0 s`);
                return;
            }
    
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
            $(".days").html(`${days} D`);
            $(".hours").html(`${hours} h`);
            $(".minutes").html(`${mins} m`);
            $(".seconds").html(`${secs} s`);
        };
    
        updateCountdown();
    
        const interval = setInterval(updateCountdown, 1000);
    }
    
    countDownToTime("18 March 2025 00:00:00");

    // -----------------numberCounter-------------------
    $('#messageTextarea').on('input', function() {
        let maxLength = 100;
        let currentLength = $(this).val().length;
        let charsRemaining = maxLength - currentLength;

        $('#charsRemaining').text(charsRemaining);
    });
    
});


