if (typeof window.jQuery === 'undefined') {
    window.jQuery = $;
}

$(document).ready(function () {
    $('.click1').click(function () {
        var form = $('.one-click-products-area');
        console.log(form);
        form.html('');
        $('[data-shopcart-item]').map(function(i, item) {
            form.append('<input type="hidden" name="products[]" value="' + item.outerText + ' | ' + $(item).find('.name a')[0].href + '">');
        });
    });

    const btnNext = document.querySelector('#btn-quiz-next');
    const btnPrev = document.querySelector('#btn-quiz-prev');
    const btnStepOne = document.querySelectorAll('.step__one');
    const rBtnStp2 = document.getElementsByName('step2type');
    const rBtnStp3 = document.getElementsByName('step3type');
    btnPrev.hidden = true;
    btnNext.addEventListener('click', () => {
        if (!document.getElementById('step1').hidden) {
            document.getElementById('step1').hidden = true;
            document.getElementById('step2').hidden = false;
            document.getElementById('tempprev').hidden = true;
            document.getElementById('quiz__steps').innerText = "Шаг 2";
            btnPrev.hidden = false;
        } else if (!document.getElementById('step2').hidden) {
            document.getElementById('step2').hidden = true;
            document.getElementById('step3').hidden = false;
            document.getElementById('quiz__steps').innerText = "Шаг 3";
        } else if (!document.getElementById('step3').hidden) {
            document.getElementById('step3').hidden = true;
            document.getElementById('step4').hidden = false;
            document.getElementById('tempnext').hidden = false;
            document.getElementById('quiz__steps').innerText = "Шаг 4";
            btnNext.hidden = true;
        }

    });
    btnPrev.addEventListener('click', () => {
        if (!document.getElementById('step4').hidden) {
            document.getElementById('step4').hidden = true;
            document.getElementById('step3').hidden = false;
            document.getElementById('tempnext').hidden = true;
            document.getElementById('quiz__steps').innerText = "Шаг 3";
            btnNext.hidden = false;
        } else if (!document.getElementById('step3').hidden) {
            document.getElementById('step3').hidden = true;
            document.getElementById('step2').hidden = false;
            document.getElementById('quiz__steps').innerText = "Шаг 2";
        } else if (!document.getElementById('step2').hidden) {
            document.getElementById('step2').hidden = true;
            document.getElementById('step1').hidden = false;
            document.getElementById('tempprev').hidden = false;
            document.getElementById('quiz__steps').innerText = "Шаг 1";
            btnPrev.hidden = true;
        }


    });
    for (let i = 0; i < btnStepOne.length; i++) {
        btnStepOne[i].addEventListener('click', () => {
            document.querySelector('#answer1').value = btnStepOne[i].value;
        });
    }
    for (let i = 0; i < rBtnStp2.length; i++) {
        rBtnStp2[i].addEventListener('click', () => {
            document.querySelector('#answer2').value = rBtnStp2[i].value;
        });
    }
    for (let i = 0; i < rBtnStp3.length; i++) {
        rBtnStp3[i].addEventListener('click', () => {
            document.querySelector('#answer3').value = rBtnStp3[i].value;
        });
    }


    $('#btn-quiz-submit').click(function (){
        $('#step4').hide();
        $('.success').show();
    });
});


$(document).ready(function () {

    var screenTop = $(document).scrollTop();

    if (screenTop >= 250) {
        $('#scrlTop').css('display', 'block');
    } else {
        $('#scrlBotm').css('display', 'block');
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() > 250) {
            $('#scrlTop').fadeIn(500);
            $('#scrlBotm').fadeOut(500);
        } else {
            $('#scrlTop').fadeOut(500);
            $('#scrlBotm').fadeIn(500);
        }
    });


    $('#scrlBotm').click(function () {
        $('html, body').animate({
                scrollTop: $(document).height()
            },
            1500);

        return false;

    });

    $('#scrlTop').click(function () {
        $('html, body').animate({
                scrollTop: '0px'
            },
            1500);

        return false;

    });

    if ($('#vertical').length) {

        $('#vertical').lightSlider({
            gallery: true,
            item: 1,
            loop: true,
            adaptiveHeight: true,
            vThumbWidth: 110,
            thumbItem: 6,
            thumbMargin: 30,
            slideMargin: 0,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        item: 1,
                        slideMove: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        item: 1,
                        slideMove: 1,
                    }
                }
            ]
        });

    }

    $('[data-toggle="tooltip"]').tooltip();

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: false,
        autoplay: true
    });

    $('#go-page').click(function () {
        $('#cart-hiden-block').removeClass('visible').addClass('hiden');
        $('#cart-hiden-block').animate({
            right: "-360px"
        }, 400);
    });
    var $win = $(window); // or $box parent container
    var $box = $("#cart");
    var $box_hiden = $('#cart-hiden-block');

    $win.on("click.Bst", function (event) {
        if ($box.has(event.target).length == 0 && !$box.is(event.target) && $box_hiden.has(event.target).length == 0 && !$box_hiden.is(event.target)) {
            $('#cart-hiden-block').removeClass('visible').addClass('hiden');
            $('#cart-hiden-block').animate({
                right: "-360px"
            }, 400);
        } else {

        }
    });


    $('.c-filter-slider').each(function() {
        var currentSlider = noUiSlider.create(this, {
            start: [this.dataset.from, this.dataset.to],
            connect: true,
            range: {
                'min': parseInt(this.dataset.min),
                'max': parseInt(this.dataset.max)
            },
            pips: {
                mode: 'positions',
                values: [0, 50, 100],
                density: 3
            }
        });

        var target = {
            min: $('#' + this.dataset.targetMin),
            max: $('#' + this.dataset.targetMax)
        };

        var cb = function () {
            var input = $(this);
            var val = [input.val(), null];
            if (input.data('svfilter-type') === 'max') {
                val = [null, input.val()];
            }
            currentSlider.set(val);
        };
        target.min.change(cb);
        target.max.change(cb);

        this.noUiSlider.on('change', function (val) {
            var target = {
                min: $('#' + this.target.dataset.targetMin),
                max: $('#' + this.target.dataset.targetMax)
            };
            val = [Math.round(val[0]), Math.round(val[1])];
            filterPut(val, this.target);
            target.min.val(val[0]);
            target.max.val(val[1]);
        });
    });

    $('#block-filter').on('ready', function () {
        var sliders = document.getElementsByClassName('c-filter-slider');
        for (var i = 0; i < sliders.length; i++) {
            filterPut(sliders[i].noUiSlider.get(), sliders[i]);
        }
    });

    $('input[name="filter_manufacturer[]"]').click(function () {
        var values = {};
        $('input[name="filter_manufacturer[]"]:checked').each(function (i) {
            values['filter_manufacturer[' + i + ']'] = $(this).val();
        });
        window.svFilter.put(values);
    });

    function filterPut(val, slider) {
        var values = {};
        values[slider.dataset.name + '_from'] = val[0];
        values[slider.dataset.name + '_to'] = val[1];
        window.svFilter.put(values);
    }

    $(function(){

        $('#burger').click(function(){
            $("#menu-burger").css("display","block");
        });
       
       $('#burger-close').click(function(){
          $("#menu-burger").css("display","none");
       });
      
      $('#menu-burger .modal-close-fon').click(function(){
          $("#menu-burger").css("display","none");
      });
      
    });

      let isMobile = {
        Android: function() {return navigator.userAgent.match(/Android/i);},
        BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
        iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
        Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
        Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
        any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
      };
    if(isMobile.any()){
        $("#menu-burger").addClass('touch');
        let HeaderArrow = $('.main-header__arrow');
        for(i=0; i<HeaderArrow.length; i++){
                let subMenu=HeaderArrow[i].nextElementSibling;
                let thisArrow=HeaderArrow[i];

            HeaderArrow[i].addEventListener('click', function(){
                subMenu.classList.toggle('d-block');
                thisArrow.classList.toggle('active');
            });
        }
    }else{
        $("#menu-burger").addClass('mouse');
    }
    
    $(function(){

        $('#button-filter').click(function(){
            $(".modal-block-filter").addClass('d-block');
        });
       
       $('#block-filter-close').click(function(){
           $(".modal-block-filter").removeClass('d-block');
       });
       
       $('.modal-block-filter .modal-close-fon').click(function(){
           $(".modal-block-filter").removeClass('d-block');
       });
      
    });
    
    $(function(){
        var myElemCardPrice = document.querySelector('.card-price');
        var myDraggieCardPrice = new Draggabilly( myElemCardPrice, {
            axis: 'y',
            handle: '#card-price__button-modal'
        });
        
        myDraggieCardPrice.on('dragStart', function() {
            $('.card-price').toggleClass('card-price__bottom');
        });
    });

    function filterArrow() {
        let filterArrow = $('.filter__item-arrow');
        for(f=0; f<filterArrow.length; f++){
                let filterArrowsubMenu=filterArrow[f].nextElementSibling;
                let filterArrowthisArrow=filterArrow[f];
            
          filterArrow[f].addEventListener('click', function(){
              filterArrowsubMenu.classList.toggle('d-block');
              filterArrowthisArrow.classList.toggle('active');
          });
        }
    }
    filterArrow();
    
      function copyToClipboard(element) {
        var $temp = $("<input id='copyToClipboard'>");
        $("body").append($temp);
        $temp.val(element).select();
        document.execCommand("copy");
        $temp.remove();
      }
    
      
      $(".b-btn__share").on("click", function() { 
        copyToClipboard(window.location.href);
        alert("Ссылка на страницу скопирована");  
      });


      $('#cart-hiden-button').click(function(){
        $('#cart-hiden-block').removeClass('hiden');
        $('#cart-hiden-block').addClass('visible');
        $('#cart-hiden-block').addClass('right-0');
      });

      $('#closeCardButton').click(function(){
        $('#cart-hiden-block').removeClass('visible');
        $('#cart-hiden-block').addClass('hiden');
        $('#cart-hiden-block').removeClass('right-0');
      });

      
      $('.geoapi__action--get-list').click(function(){
            $('.geoapi__cities-list__wrapper').removeClass('hidden');
      });

      $('.geoapi__cities-list__close').click(function(){
        $('.geoapi__cities-list__wrapper').addClass('hidden');
      });

});
