    (function ($) {
        var $li = $('.img-list').find('> li'),
            $links = $li.find('> a'),
            $lightbox = $('.lightbox'),
            $next = $('.next'),
            $prev = $('.prev'),
            $overlay = $('.overlay'),
            $cancel = $('.cancel'),
            liIndex,
            targetImg;

        //preload images
        var imgSources = [
            ''
        ];

        var imgs = [];
        for (var i = 0; i < imgSources.length; i++) {
            imgs[i] = new Image();
            imgs[i].src = imgSources[i];
        }

        function replaceImg(src) {
            $lightbox.find('img').attr('src', src);
        }

        function getHref(index) {
            return $li.eq(index).find('>a').attr('href');
        }

        function closeLigtbox() {
            $lightbox.fadeOut();
        }

        $overlay.click(closeLigtbox);
        $cancel.click(closeLigtbox);



        $links.click(function (e) {
            e.preventDefault();
            targetImg = $(this).attr('href');
            liIndex = $(this).parent().index();
            replaceImg(targetImg);
            $lightbox.fadeIn();
        });


        //    $next.click(function () {
        //       if ((liIndex) < $li.length + 1) {
        //       targetImg = getHref($li.length + 1);
        //       // targetImg = getHref(liIndex); 
        //            liIndex++;
        //           
        //        }else {
        //            targetImg = getHref(0);
        //            liIndex = 0;
        //        }
        //       replaceImg(targetImg);
        //    });
        //
        //    $prev.click(function () {
        //        if ((liIndex) > 0) {
        //            targetImg = getHref(liIndex - 1);
        //           // targetImg = getHref(liIndex);
        //            liIndex - 1;
        //        } else {
        //            targetImg = getHref($li.length - 1);
        //            liIndex = $li.length - 1;
        //        }
        //        replaceImg(targetImg);
        //    });





        $('#Button_zakaz1').click(function () {
            $('html, body').animate({
                scrollTop: $('#offers').offset().top
            }, 2000);
        })

        $('#Button_zakaz2').click(function () {
            $('html, body').animate({
                scrollTop: $('#gallery_photo').offset().top
            }, 2000);
        })

        $('#Button_zakaz3').click(function () {
            $('html, body').animate({
                scrollTop: $('#contact').offset().top
            }, 2000);
        })


        !function (a) {
            a.fn.ZooMove = function (b) {
                var c = a.extend({ image: "/HappyTogether/GetImage/?imageId=@item.Id", cursor: "false", scale: "1.5", move: "true", over: "false" }, b);
                c.cursor = "true" === c.cursor ? "pointer" : "default", this.each(function () { c.overD = a(this).attr("zoo-over") ? a(this).attr("zoo-over") : c.over, "true" === c.overD && a(this).css({ overflow: "visible", "z-index": "100" }), c.imageD = a(this).attr("zoo-image") ? a(this).attr("zoo-image") : c.image, a(this).append('<div class="zoo-img"></div>').children(".zoo-img").css({ "background-image": "url(" + c.imageD + ")", cursor: c.cursor }) }).on("mouseover", function (b) { b.preventDefault(), c.scaleD = a(this).attr("zoo-scale") ? a(this).attr("zoo-scale") : c.scale, c.moveD = a(this).attr("zoo-move") ? a(this).attr("zoo-move") : c.move, a(this).children(".zoo-img").css({ transform: "scale(" + c.scaleD + ")" }) }).on("mousemove", function (b) { b.preventDefault(), "true" === c.moveD && a(this).children(".zoo-img").css({ "transform-origin": (b.pageX - a(this).offset().left) / a(this).width() * 100 + "% " + (b.pageY - a(this).offset().top) / a(this).height() * 100 + "%" }) }).on("mouseout", function (b) { b.preventDefault(), a(this).children(".zoo-img").css({ transform: "scale(1)" }) })
            }
        }


    })(jQuery);





















