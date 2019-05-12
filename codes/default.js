var ww = $(window).width(),
    mm = 0;

$(document)
    .ready(function() {
        ww = $(window).width();
        mm = ww < 575 ? 120 : 0;

        jQuery("#mobile-menu").jqueryAccordionMenu({ clickEffect: false });

        $(".menu-opener").click(function() {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(".nav-mobile").removeClass("active");

                if ($("#mobile-menu .submenu").css("display") === "block") {
                    $("#mobile-menu .submenu")
                        .parent()
                        .find("a")
                        .removeClass("submenu-indicator-minus");
                    $("#mobile-menu .submenu").slideUp(300);
                }
            } else {
                $(this).addClass("active");
                $(".nav-mobile").addClass("active");
            }
        });

       
        var homepageScree3Slide = $(
                ".homepage .screen3 .slider-container .slide-wrap"
            ).slick({
                infinite: false,
                dots: false,
                arrows: false,
                autoplay: false,
                autoplaySpeed: 4100,
                centerMode: false,
                speed: 900,
                slidesToShow: 1,
                slidesToScroll: 1,
                draggable: false,
                pauseOnFocus: false,
                pauseOnHover: false
            }),
            homepageScree3Prev = $(
                ".homepage .screen3 .slide-controller .btn-prev"
            ),
            homepageScree3Next = $(
                ".homepage .screen3 .slide-controller .btn-next"
            );

        var homepageScreen3ButtonTimerSet = {
                startAngle: -Math.PI * 0.5,
                thickness: 2,
                value: 1,
                size: 50,
                animation: {
                    duration: 5000
                },
                fill: {
                    color: "#fff"
                }
            },
            homepageScreen3ButtonTimer = null;

        var timerForHomepageScree3 = 0,
            changeTime = 5;

        function startHomepageScreen3Slider() {
            homepageScreen3ButtonTimer = $(
                ".homepage .screen3 .slide-controller .circle-animate"
            ).circleProgress(homepageScreen3ButtonTimerSet);

            setInterval(function() {
                timerForHomepageScree3++;

                if (timerForHomepageScree3 === changeTime) {
                    timerForHomepageScree3 = 0;
                    homepageScree3Slide.slick("slickNext");
                }
            }, 1000);
        }

        homepageScree3Slide
            .on("beforeChange", function(
                event,
                slick,
                currentSlide,
                nextSlide
            ) {
                var sliderNumber = nextSlide + 1;

                homepageScreen3Ilustration(sliderNumber);

                homepageScreen3ButtonTimer.circleProgress();

                switch (sliderNumber) {
                    case 1:
                        $(".hidable-1").removeClass("hided");
                        $(".hidable-2").removeClass("hided");
                        break;
                    case 2:
                        $(".hidable-1").addClass("hided");
                        $(".hidable-2").removeClass("hided");
                        break;
                    case 3:
                        $(".hidable-1").addClass("hided");
                        $(".hidable-2").addClass("hided");
                        break;
                    default:
                        break;
                }
            })
            .on("afterChange", function(slick, currentSlide) {
                if (currentSlide.currentSlide === 2) {
                    setTimeout(function() {
                        $(
                            ".homepage .screen3 .slider-container .slide-wrap"
                        ).slick("slickGoTo", 0);
                        $(
                            ".homepage .screen3 .slider-container .slide-wrap"
                        ).slick("slickPlay");
                        
                    }, 4000);
                }
            });

        function homepageScreen3Ilustration(number) {
            var objects = $(".screen3 .illustration-container .content-item");

            objects.removeClass("active");

            switch (number) {
                case 1:
                    $(".screen3 .illustration-container .step1").addClass(
                        "active"
                    );
                    break;
                case 2:
                    $(".screen3 .illustration-container .step2").addClass(
                        "active"
                    );
                    break;
                case 3:
                    $(".screen3 .illustration-container .step3").addClass(
                        "active"
                    );
                    break;
                default:
                    break;
            }
        }

        homepageScree3Prev.click(function() {
            timerForHomepageScree3 = 0;
            homepageScree3Slide.slick("slickPrev");
            homepageScreen3ButtonTimer.circleProgress();
        });
        homepageScree3Next.click(function() {
            timerForHomepageScree3 = 0;
            homepageScree3Slide.slick("slickNext");
            homepageScreen3ButtonTimer.circleProgress();
        });

        ScrollReveal().reveal(
            ".homepage .screen4 .texts-container label, .homepage .screen4 .texts-container .title-label",
            {
                origin: "bottom",
                distance: "50px",
                duration: 600,
                interval: 200
            }
        );
        ScrollReveal().reveal(".homepage .screen4 .card-container .card-item", {
            delay: 500,
            origin: "right",
            distance: "80px",
            duration: 600,
            interval: 50
        });
        ScrollReveal().reveal(".homepage .screen4 .we-implement", {
            delay: 700,
            origin: "bottom",
            distance: "30px",
            duration: 800
        });

        ScrollReveal().reveal(".homepage .screen5 .imagery-container.desktop", {
            scale: 0.2,
            duration: 800
        });
        ScrollReveal().reveal(
            ".homepage .screen5 .content-container label, .homepage .screen5 .content-container .title-label, .homepage .screen5 .content-container hr, .homepage .screen5 .content-container .list-container > li",
            {
                delay: 500,
                origin: "right",
                distance: "80px",
                duration: 600,
                interval: 50
            }
        );

        function homepageScreen6Activator(posiiton) {
            var imageryDesktopLeft = $(
                    ".screen5 .imagery-container.desktop .for-left"
                ),
                imageryDesktopRight = $(
                    ".screen5 .imagery-container.desktop .for-right"
                );

            $(
                ".homepage .screen5 .left, .homepage .screen5 .right"
            ).removeClass("active");
            imageryDesktopLeft.removeClass("active");
            imageryDesktopRight.removeClass("active");

            switch (posiiton) {
                case "left":
                    imageryDesktopLeft.addClass("active");
                    $(".homepage .screen5 .left").addClass("active");
                    break;
                case "right":
                    imageryDesktopRight.addClass("active");
                    $(".homepage .screen5 .right").addClass("active");
                    break;
                default:
                    break;
            }
        }
        $(".homepage .screen5 .left").hover(function() {
            homepageScreen6Activator("left");
        });
        $(".homepage .screen5 .right").hover(function() {
            homepageScreen6Activator("right");
        });

        ScrollReveal().reveal(".homepage .screen6 .texts-container > label", {
            origin: "left",
            distance: "100px",
            duration: 600
        });
        ScrollReveal().reveal(
            ".homepage .screen6 .texts-container .title-label, .homepage .screen6 .texts-container .description-label, .homepage .screen6 .texts-container .partner-container, .homepage .screen6 .texts-container .buttons-container",
            {
                origin: "bottom",
                distance: "30px",
                duration: 400,
                interval: 150
            }
        );

        ScrollReveal().reveal(".why-opencity .menus-in-page", {
            origin: "top",
            distance: "150px",
            duration: 400
        });

        ScrollReveal().reveal(
            ".why-opencity .screen2 .texts-container > label",
            {
                origin: "left",
                distance: "50px",
                duration: 400
            }
        );
        ScrollReveal().reveal(
            ".why-opencity .screen2 .image-container, .why-opencity .screen2 .image-container > img",
            {
                delay: 250,
                origin: "bottom",
                distance: "50px",
                duration: 600,
                interval: 250,
                viewFactor: 0.5
            }
        );
        ScrollReveal().reveal(
            ".why-opencity .screen2 .texts-container > .title-label, .why-opencity .screen2 .texts-container > .description-label, .why-opencity .screen2 .texts-container > hr, .why-opencity .screen2 .texts-container > .buttons-container",
            {
                delay: 300,
                origin: "bottom",
                distance: "25px",
                duration: 400,
                interval: 200
            }
        );

        ScrollReveal().reveal(".why-opencity .screen3 .header-label", {
            delay: 200,
            origin: "top",
            distance: "80px",
            duration: 400
        });
        ScrollReveal().reveal(
            ".why-opencity .screen3 .cards-container .card-container",
            {
                delay: 200,
                origin: "bottom",
                distance: "80px",
                rotate: {
                    x: 0,
                    y: 80,
                    z: 0
                },
                easing: "ease-in-out",
                duration: 600,
                interval: 300
            }
        );

        ScrollReveal().reveal(
            ".why-opencity .screen4 .texts-container > label",
            {
                origin: "left",
                distance: "50px",
                duration: 400
            }
        );
        ScrollReveal().reveal(
            ".why-opencity .screen4 .image-background-desktop",
            {
                delay: 250,
                origin: "right",
                distance: "100px",
                duration: 800
            }
        );
        ScrollReveal().reveal(
            ".why-opencity .screen4 .texts-container > .title-label, .why-opencity .screen4 .texts-container > .description-label",
            {
                origin: "top",
                distance: "30px",
                duration: 400,
                interval: 150
            }
        );
        ScrollReveal().reveal(
            ".why-opencity .screen4 .texts-container .list-container > li",
            {
                delay: 400,
                origin: "bottom",
                distance: "30px",
                duration: 400,
                interval: 150
            }
        );

        ScrollReveal().reveal(
            ".how-it-works .screen1 .steps-container .step-container .image-container",
            {
                origin: "bottom",
                distance: "50px",
                rotate: {
                    x: 0,
                    y: 80,
                    z: 0
                },
                easing: "ease-in-out",
                duration: 500,
                interval: 300
            }
        );
        ScrollReveal().reveal(
            ".how-it-works .screen1 .steps-container .step-container .image-container .image",
            {
                delay: 150,
                origin: "top",
                distance: "50px",
                rotate: {
                    x: 0,
                    y: -80,
                    z: 0
                },
                easing: "ease-in-out",
                duration: 500,
                interval: 300
            }
        );
        ScrollReveal().reveal(
            ".how-it-works .screen1 .steps-container .step-container .text-container",
            {
                delay: 200,
                origin: "bottom",
                distance: "30px",
                easing: "ease-in-out",
                duration: 500,
                interval: 300
            }
        );
        ScrollReveal().reveal(
            ".how-it-works .screen1 .steps-container .step-container .bar",
            {
                delay: 1200,
                origin: "top",
                distance: "20px",
                scale: 0.5,
                duration: 200,
                interval: 100
            }
        );

        ScrollReveal().reveal(
            ".how-it-works .screen2 .illustration-container, .how-it-works .screen2 .illustration-container > img",
            {
                origin: "bottom",
                distance: "50px",
                duration: 600,
                interval: 250,
                viewFactor: 0.5
            }
        );
        ScrollReveal().reveal(
            ".how-it-works .screen2 .texts-container > .title-label, .how-it-works .screen2 .texts-container > .description-label, .how-it-works .screen2 .texts-container > hr, .how-it-works .screen2 .texts-container > .list-container",
            {
                delay: 250,
                origin: "bottom",
                distance: "25px",
                duration: 400,
                interval: 200
            }
        );

        ScrollReveal().reveal(
            ".how-it-works .screen3 .texts-container > label",
            {
                origin: "left",
                distance: "50px",
                duration: 400
            }
        );
        ScrollReveal().reveal(
            ".how-it-works .screen3 .texts-container > .title-label, .how-it-works .screen3 .texts-container > .description-label",
            {
                delay: 250,
                origin: "top",
                distance: "30px",
                duration: 400,
                interval: 150
            }
        );
        ScrollReveal().reveal(".how-it-works .screen3 .logos-container", {
            origin: "left",
            distance: "150px",
            opacity: 1,
            duration: 800
        });
        ScrollReveal().reveal(".how-it-works .screen3 .logos-container .logo", {
            scale: 0.5,
            duration: 450,
            interval: 150
        });

        var howItWorksScree3Slide = $(
            ".how-it-works .screen3 .logos-container .logos-slider"
        ).slick({
            infinite: true,
            dots: false,
            fade: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            centerMode: false,
            speed: 900,
            slidesToShow: 1,
            draggable: false,
            slidesToScroll: 1
        });

        ScrollReveal().reveal(".how-it-works .screen4 .left", {
            origin: "left",
            distance: "80%",
            duration: 1300
        });
        ScrollReveal().reveal(".how-it-works .screen4 .right", {
            origin: "right",
            distance: "80%",
            duration: 1300
        });

        ScrollReveal().reveal(".customers .screen2 .main-video-container", {
            origin: "bottom",
            distance: "30px",
            duration: 700
        });
        ScrollReveal().reveal(
            ".customers .screen2 .main-video-container .texts-container > label",
            {
                delay: 250,
                origin: "left",
                distance: "50px",
                duration: 400
            }
        );
        ScrollReveal().reveal(
            ".customers .screen2 .main-video-container .texts-container > .title-label, .customers .screen2 .main-video-container .texts-container > .description-label",
            {
                delay: 450,
                origin: "bottom",
                distance: "30px",
                duration: 600,
                interval: 350
            }
        );

        $(
            ".customers .screen2 .slide-videos-container .slide-item:not(.slick-cloned) .js-modal-btn-vimeo-cst"
        ).modalVideo({
            channel: "vimeo",
            vimeo: {
                autoplay: 1,
                controls: 0
            }
        });

        var customersScree2Slide = $(
                ".customers .screen2 .slide-videos-container .slider-container .slide-wrap"
            ).slick({
                infinite: true,
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 4000,
                centerMode: false,
                speed: 900,
                slidesToShow: 2,
                slidesToScroll: 1,
                pauseOnFocus: false,
                pauseOnHover: false,
                focusOnSelect: false,
                draggable: false,
                responsive: [
                    {
                        breakpoint: 757,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            }),
            customersScree2Prev = $(
                ".customers .screen2 .slide-videos-container .slide-controller .btn-prev"
            ),
            customersScree2Next = $(
                ".customers .screen2 .slide-videos-container .slide-controller .btn-next"
            );

        customersScree2Slide.on("beforeChange", function(
            event,
            slick,
            currentSlide,
            nextSlide
        ) {
            var sliderNumber = nextSlide + 1;

            customerScreen2ButtonTimer.circleProgress("redraw");
        });

        var customerScreen2ButtonTimerSet = {
                startAngle: -Math.PI * 0.5,
                thickness: 2,
                value: 1,
                size: 50,
                animation: {
                    duration: 4900
                },
                fill: {
                    color: "#b30096"
                }
            },
            customerScreen2ButtonTimer = $(
                ".customers .screen2 .slide-videos-container .slide-controller .circle-animate"
            ).circleProgress(customerScreen2ButtonTimerSet);

        customersScree2Prev.click(function() {
            customersScree2Slide.slick("slickPrev");
            customerScreen2ButtonTimer.circleProgress("redraw");
        });
        customersScree2Next.click(function() {
            customersScree2Slide.slick("slickNext");
            customerScreen2ButtonTimer.circleProgress("redraw");
        });

        $(
            ".customers .screen2 .slide-videos-container .slide-item.slick-cloned .js-modal-btn-vimeo-cst"
        ).modalVideo({
            channel: "vimeo",
            vimeo: {
                autoplay: 1,
                controls: 0
            }
        });

        // handle slide and timer.
        $(".js-modal-btn-vimeo-cst").click(function(e) {
            $(customerScreen2ButtonTimer.circleProgress("widget")).stop();

            customersScree2Slide.slick("slickPause");

            $(".modal-video-close-btn").click(function() {
                customerScreen2ButtonTimer.circleProgress("redraw");
                customersScree2Slide.slick("slickPlay");
            });
            $(".modal-video").click(function() {
                customerScreen2ButtonTimer.circleProgress("redraw");
                customersScree2Slide.slick("slickPlay");
            });
        });

        ScrollReveal().reveal(
            ".customers .screen3 .texts-container > label, .customers .screen3 .texts-container .title-label",
            {
                origin: "bottom",
                distance: "30px",
                duration: 400,
                interval: 250
            }
        );
        ScrollReveal().reveal(".customers .screen3 .card-container", {
            delay: 150,
            origin: "bottom",
            distance: "100px",
            duration: 700
        });
        ScrollReveal().reveal(
            ".customers .screen3 .card-container .card-item",
            {
                delay: 350,
                origin: "bottom",
                distance: "50px",
                rotate: {
                    x: -10,
                    y: -80,
                    z: -10
                },
                easing: "ease-in-out",
                duration: 400,
                interval: 250
            }
        );
        ScrollReveal().reveal(
            ".customers .screen3 .card-container .start-now-for-free .title-label, .customers .screen3 .card-container .start-now-for-free .description-label, .customers .screen3 .card-container .start-now-for-free .buttons-container",
            {
                delay: 350,
                origin: "bottom",
                distance: "50px",
                duration: 300,
                interval: 175
            }
        );

        ScrollReveal().reveal(".customers .screen6 .texts-container > label", {
            origin: "top",
            distance: "50px",
            duration: 400
        });
        ScrollReveal().reveal(
            ".customers .screen6 .texts-container .title-label, .customers .screen6 .texts-container .buttons-container",
            {
                delay: 150,
                origin: "bottom",
                distance: "30px",
                duration: 400,
                interval: 250
            }
        );

        var customersScree4Slide = $(
                ".customers .screen4 .slider-container .slider-wrap"
            ).slick({
                infinite: true,
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 6000,
                centerMode: false,
                adaptiveHeight: true,
                speed: 900,
                slidesToShow: 1,
                slidesToScroll: 1,
                pauseOnFocus: false,
                pauseOnHover: false,
                draggable: false
            }),
            customersScree4Prev = $(
                ".customers .screen4 .slide-controller .btn-prev"
            ),
            customersScree4Next = $(
                ".customers .screen4 .slide-controller .btn-next"
            );

        var customerScreen4ButtonTimerSet = {
                startAngle: -Math.PI * 0.5,
                thickness: 2,
                value: 1,
                size: 50,
                animation: {
                    duration: 6900
                },
                fill: {
                    color: "#b30096"
                }
            },
            customerScreen4ButtonTimer = $(
                ".customers .screen4 .slider-container .circle-animate"
            ).circleProgress(customerScreen4ButtonTimerSet);

        customersScree4Slide.on("beforeChange", function(
            event,
            slick,
            currentSlide,
            nextSlide
        ) {
            var sliderNumber = nextSlide + 1;

            customerScreen4ButtonTimer.circleProgress("redraw");
        });
        customersScree4Prev.click(function() {
            customersScree4Slide.slick("slickPrev");
            customerScreen4ButtonTimer.circleProgress("redraw");
        });
        customersScree4Next.click(function() {
            customersScree4Slide.slick("slickNext");
            customerScreen4ButtonTimer.circleProgress("redraw");
        });

        ScrollReveal().reveal(".about-us .screen2 .texts-container > label", {
            origin: "left",
            distance: "50px",
            duration: 400
        });
        ScrollReveal().reveal(
            ".about-us .screen2 .texts-container .title-label",
            {
                delay: 150,
                origin: "bottom",
                distance: "30px",
                duration: 400
            }
        );
        ScrollReveal().reveal(
            ".about-us .screen2 .texts-container .description-label",
            {
                delay: 450,
                origin: "bottom",
                distance: "30px",
                duration: 400,
                interval: 100
            }
        );
        ScrollReveal().reveal(".about-us .screen2 .image-background-desktop", {
            origin: "left",
            distance: "150px",
            duration: 1200
        });

        ScrollReveal().reveal(".about-us .screen3 .header-label", {
            origin: "top",
            distance: "80px",
            duration: 400
        });
        ScrollReveal().reveal(".about-us .screen3 .people-container", {
            delay: 300,
            origin: "bottom",
            distance: "50px",
            rotate: {
                x: 0,
                y: -10,
                z: 0
            },
            easing: "ease-in-out",
            duration: 300,
            interval: 200
        });

        ScrollReveal().reveal(".about-us .screen4 .texts-container > label", {
            delay: 200,
            origin: "left",
            distance: "50px",
            duration: 400
        });
        ScrollReveal().reveal(
            ".about-us .screen4 .texts-container > .title-label",
            {
                delay: 450,
                origin: "top",
                distance: "30px",
                duration: 400
            }
        );
        ScrollReveal().reveal(
            ".about-us .screen4 .articles-container .article-item",
            {
                delay: 550,
                origin: "bottom",
                distance: "80px",
                duration: 400,
                interval: 200
            }
        );
        ScrollReveal().reveal(
            ".about-us .screen4 .articles-container .buttons-container",
            {
                duration: 600
            }
        );

        ScrollReveal().reveal(".about-us .screen5 .header-label", {
            origin: "top",
            distance: "80px",
            duration: 400
        });
        ScrollReveal().reveal(".about-us .screen5 .item-container", {
            delay: 300,
            origin: "bottom",
            distance: "30px",
            rotate: {
                x: 0,
                y: -80,
                z: 0
            },
            easing: "ease-in-out",
            duration: 300,
            interval: 200
        });

        ScrollReveal().reveal(".about-us .screen6 .texts-container > label", {
            origin: "top",
            distance: "50px",
            duration: 400
        });
        ScrollReveal().reveal(
            ".about-us .screen6 .texts-container .title-label, .about-us .screen6 .texts-container .description-label, .about-us .screen6 .texts-container .buttons-container",
            {
                delay: 150,
                origin: "bottom",
                distance: "30px",
                duration: 400,
                interval: 250
            }
        );

        ScrollReveal().reveal(".banner.see-how-it-works", {
            origin: "bottom",
            distance: "50px",
            duration: 600
        });

        ScrollReveal().reveal(".get-started-today", {
            origin: "bottom",
            distance: "50px",
            duration: 1000
        });
        ScrollReveal().reveal(
            ".get-started-today .texts-container > label, .get-started-today .texts-container .title-label, .get-started-today .texts-container .description-label, .get-started-today .texts-container .buttons-container",
            {
                delay: 500,
                origin: "bottom",
                distance: "30px",
                duration: 400,
                interval: 150
            }
        );

        ScrollReveal().reveal(".contact-us .screen2 .texts-container > label", {
            origin: "left",
            distance: "50px",
            duration: 400,
            interval: 250
        });
        ScrollReveal().reveal(
            ".contact-us .screen2 .texts-container .title-label, .contact-us .screen2 .texts-container .description-label",
            {
                delay: 200,
                origin: "bottom",
                distance: "30px",
                duration: 400,
                interval: 150
            }
        );
        ScrollReveal().reveal(
            ".contact-us .screen2 .texts-container .buttons-container",
            {
                delay: 350,
                origin: "bottom",
                distance: "50px",
                duration: 400
            }
        );
        ScrollReveal().reveal(
            ".contact-us .screen2 .texts-container .sns-container",
            {
                delay: 450,
                origin: "bottom",
                distance: "50px",
                duration: 400
            }
        );
        ScrollReveal().reveal(".contact-us .screen2 .form-container", {
            origin: "right",
            distance: "70%",
            duration: 600
        });

        ScrollReveal().reveal(".sign-up .registration-form .image-container", {
            origin: "right",
            distance: "10%",
            duration: 600
        });
        ScrollReveal().reveal(
            ".sign-up .confirmation-form .title-label, .sign-up .confirmation-form .code-container, .sign-up .confirmation-form .email-form",
            {
                origin: "bottom",
                distance: "30px",
                duration: 600,
                interval: 250
            }
        );

        ScrollReveal().reveal(
            ".request-demo .registration-form .image-container",
            {
                origin: "right",
                distance: "10%",
                duration: 600
            }
        );

        $(".btn-show_and_hide").click(function() {
            if ($(this).hasClass("activated")) {
                $(this)
                    .parent()
                    .parent()
                    .find(".show-and-hide")
                    .removeClass("show");
                $(this).removeClass("activated");
                $(this)
                    .find("span")
                    .text("Show tech specs");
            } else {
                $(this)
                    .parent()
                    .parent()
                    .find(".show-and-hide")
                    .addClass("show");
                $(this).addClass("activated");
                $(this)
                    .find("span")
                    .text("Hide tech specs");
            }
        });

        $("button.btn-add").click(function(e) {
            e.preventDefault();

            var item = $(".duplicatable"),
                container = $(".multiple-inputs");

            if (item) {
                container.append(
                    item
                        .clone()
                        .removeClass("duplicatable")
                        .addClass("duplicated")
                        .val("")
                );
            }
        });

        $(".about-us .screen4 .btn-show_more").click(function() {
            var objects = $(".about-us .screen4 .article-item");

            if (objects.hasClass("opened")) {
                $(this).text("Show more");
                $(".about-us .screen4 .article-item.opened")
                    .removeClass("opened")
                    .addClass("hidden");
            } else {
                $(this).text("Show less");
                $(".about-us .screen4 .article-item.hidden")
                    .addClass("opened")
                    .removeClass("hidden");
            }
        });

        // banner: logo infinite slide.
        // $(".slide-banner .banners-wrap").slick({
        //     arrows: false,
        //     dots: false,
        //     speed: 2000,
        //     autoplay: true,
        //     autoplaySpeed: 0,
        //     adaptiveHeight: true,
        //     infinite: true,
        //     slidesToShow: 5,
        //     slidesToScroll: 2,
        //     centerMode: true,
        //     variableWidth: true,
        //     pauseOnFocus: false,
        //     pauseOnHover: false,
        //     pauseOnDotsHover: false,
        //     cssEase: "linear",
        //     focusOnSelect: false,
        //     draggable: false,
        //     touchMove: false,
        //     responsive: [
        //         {
        //             breakpoint: 575,
        //             speed: 1000,
        //             settings: {
        //                 slidesToShow: 4,
        //                 slidesToScroll: 2
        //             }
        //         }
        //     ]
        // });
        $(".slide-banner .banners-wrap").infiniteslide({
            'speed': 200,
            'pauseonhover': false
        });

        var tooltipMsg = "Please complete all required fields.";
        $("#form-validation").validate({
            rules: {
                thefield: {
                    digits: true,
                    required: true
                },
                email: {
                    email: true
                }
            },
            tooltip_options: {
                thefield: {
                    placement: "right"
                }
            }
        });

        // scroll down clicked notify box.
        $(".notify-box.bottom").click(function(event) {
            $("html, body").animate({ scrollTop: "500px" }, 800);
        });

        // Anchor control.
        function scrollSmooth(location) {
            var n = 0;

            if ($(window).width() < 575) {
                n = 80;
            }

            $("html,body").animate(
                {
                    scrollTop: location - n
                },
                800,
                function(x, t, b, c, d) {
                    if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
                    return (-c / 2) * (--t * (t - 2) - 1) + b;
                }
            );
        }

        $("a[href*=#]").click(function(e) {
            if (this.hash) {
                scrollSmooth($(this.hash).offset().top);
            }

            if ($(".menu-opener").hasClass("active")) {
                $(".menu-opener").removeClass("active");
                $(".nav-mobile").removeClass("active");

                if ($("#mobile-menu .submenu").css("display") === "block") {
                    $("#mobile-menu .submenu")
                        .parent()
                        .find("a")
                        .removeClass("submenu-indicator-minus");
                    $("#mobile-menu .submenu").slideUp(300);
                }
            }
        });


        var inPageMenus = $('.menus-in-page .menus-wrap .menu');

        function checkInPageMenu(id, menus) {
            var item = $('.menu-' + id.replace('#', ''));

            if (item.length > 0) {
                menus.removeClass('active');
                item.addClass('active');
            }
        }

        if (inPageMenus.length > 1) {
            inPageMenus.click(function() {
                inPageMenus.removeClass('active');
                $(this).addClass('active');
            });
        }

        if (location.hash) {
            setTimeout(function() {
                scrollSmooth($(location.hash).offset().top);
            }, 100);

            // in-page menu handle.
            checkInPageMenu(location.hash, inPageMenus);
        }
    })
    .resize(function() {
        ww = $(window).width();

        mm = ww < 575 ? 120 : 0;
    });

$(window)
    .on('hashchange', function(){
        var hash = window.location.hash,
            inPageMenus = $('.menus-in-page .menus-wrap .menu');

        function checkInPageMenu(id, menus) {
            var item = $('.menu-' + id.replace('#', ''));

            if (item.length > 0) {
                menus.removeClass('active');
                item.addClass('active');
            }
        }

        checkInPageMenu(hash, inPageMenus);
    });
