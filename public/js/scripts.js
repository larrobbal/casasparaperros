// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
/*var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}
// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; } 
    }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
function disableScroll() 
{
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}
  
function enableScroll() 
{
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}*/
(function ($) 
{
    "use strict";
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) 
    {
    // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) 
        {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) 
            {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({scrollTop: target.offset().top}, 500, function(){
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) 
                    { // Checking if the target was focused
                        return false;
                    } 
                    else 
                    {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
    $(document).on("scroll", function()
    {
        var logo = document.querySelector('#navBrandDesk')
        var links = document.querySelector('#navbarMenu');
        var $window = $(window);
        if($window.width()>640)
        {
            if ($(document).scrollTop() > 100)
            {
                logo.classList.add('brand-shrink');
                links.classList.add('menu-shrink');
                $("#contactInfo").slideUp("fast");
            } 
            else 
            {
                $("#contactInfo").slideDown("fast");
                logo.classList.remove('brand-shrink');
                links.classList.remove('menu-shrink');
            }
        }
    });
    $(document).ready(function () {
        var xhr = new XMLHttpRequest();
        var catalogContent = $('div#mini-catalog-content');
        var catalog = document.getElementById('mini-catalog-content');
        var myObj;
        var data={};
        data['cat']=true;
        var json_string = JSON.stringify(data);
        xhr.open('POST',"assets/php/productos.php",true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(json_string);

        xhr.onreadystatechange = function()
        {
            if(this.readyState == 4 && this.status == 200)
            {
                myObj = JSON.parse(this.responseText);
                catalogContent.empty();
                myObj.forEach(element => 
                {
                    var divElement = document.createElement('div');
                    divElement.setAttribute('class','mx-3 my-3 justify-center content-center items-center h-full');
                    divElement.setAttribute('id','mini-catalog-product');
                    divElement.innerHTML='<div class="flex justify-center my-2"><a href="#" class="max-w-min rounded bg-gray-400 bg-opacity-25 flex justify-center content-center items-center transition hover:shadow-xl duration-200 ease-in-out" id="'+element.idDescripcion+'" onclick="showModal(\''+element.idDescripcion+'\',\''+element.producto+'\',event)"><img class="object-center h-80 w-80 sm:h-80 sm:w-80 min-h-full min-w-max md:min-h-full md:min-w-max" src="assets/img/product/thumbnail/'+element.imagen+'.webp" alt="'+element.producto+'"></a></div><div><h2 class="text-2xl font-bold font-montserrat uppercase">'+element.producto+'</h2></div>';
                    catalog.appendChild(divElement);
                });
            }
        }
    });
    $(window).on('resize',function () {
        var $window = $(window);
        if($window.width()>=640 && !($('#mobile-menu').hasClass('hidden')))
            $('#mobile-menu').addClass('hidden');
        if($window.width()<640 && !($('#contactInfo').hasClass('hidden')))
            $('#contactInfo').addClass('hidden');
    });
    /*
    var showInfo = function()
    {
        var elements;
        var windowHeight;

        function init() {
            elements = document.querySelectorAll('.hidden');
            windowHeight = window.innerHeight;
        }

        function checkPosition() {
            for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                element.classList.add('fade-in-element');
                element.classList.remove('hidden');
            }
            }
        }

        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', init);

        init();
        checkPosition();
    };
    // Collapse now if page is not at top
    navbarCollapse();
    showInfo();
    functionButton();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
    $(window).scroll(showInfo);
    $("a.cb-link.cb-anchor").hover(
        function() 
        {
            $("a.cb-link.cb-anchor span#social-float-layer").removeClass("social-float-layer");
        },
        function() 
        {
            $("a.cb-link.cb-anchor span#social-float-layer").addClass("social-float-layer")
        }
    );
    $(function()
    {
        var scrollButton=$('span.shaped-button');
        scrollButton.mouseenter(function()
        {
            $(this).stop().animate({'top':'10px'},'normal');
        })
        .mouseleave(function()
        {
            $(this).stop().animate({'top':'0px'},'normal');
        });
    });
    $(window).bind("resize", function () {
        if ($(this).width() < 992) {
            $('div#card').addClass('card col-12 info-card');
            $('div#card-header').addClass('custom-header');
            $('div#card-body').addClass('card-body');
        } else {
            $('div#card').removeClass('card col-12 info-card');
            $('div#card-header').removeClass('custom-header');
            $('div#card-body').removeClass('card-body');
        }
    }).trigger('resize');*/
    })(jQuery); // End of use strict*
function showModal(idproducto,name,e)
{
    e.preventDefault();
    var spinner = new jQuerySpinner({
        parentId:'modal-template'
    });
    let windowHeight = window.scrollY;
    let modal = document.getElementById("modal-div");
    let layout = document.getElementById("modal-layout");
    let closeBtn = document.getElementById("close-btn");
    let okBtn = document.getElementById("ok-btn");
    modal.classList.toggle("hidden");
    modal.style.top = (window.scrollY+100)+"px";
    layout.classList.toggle("hidden");
    var heading = ['Descripcion:','Linea:','Acabado:','Material:','Calibre:','Capacidad:','Colores:','Anclaje:','Vaciado:','Largo Total:','Ancho Total:','Alto Total:','Diametro Total:','Largo Contenedor:','Ancho Contenedor:','Alto Contenedor:','Diametro Contenedor:','Largo Letrero:','Alto Letrero:','Adicional:'];
    var modalTitle = document.getElementById('modal-product-title');
    modalTitle.innerHTML=name;
    var modalBody = $('#row-modal');
    var aux="";
    var cont=0;
    $.ajax({
        data: {"idProducto" : idproducto},
        type: "POST",
        dataType: "json",
        url: "assets/php/productos.php",
        beforeSend: function()
        {
            spinner.show();
            $('#modal-div').addClass('filter blur');
            modalBody.empty();
        }
    })
    .done(function( data, textStatus, jqXHR ) {
    if(data==null)
        modalBody.empty();
    data.forEach(element => 
    {
        var tablaModal = document.createElement('table');
        tablaModal.setAttribute('class','table-fixed text-sm md:text-lg')
        var tablaBody = document.createElement('tbody');
        var divImg = document.createElement('div');
        var divInfo = document.createElement('div');
        var divSlider = document.createElement('div');
        var divInnerSlider = document.createElement('div');
        var divThumbnails = document.createElement('div');

        divImg.setAttribute('id','image-modal-product');
        divInfo.setAttribute('id','info-modal-product');

        divSlider.setAttribute('class','slider p-3');
        divInnerSlider.setAttribute('class','inner-slider flex justify-center');
        var img = document.createElement('img');
        img.setAttribute('class','slider-featuredImage');
        img.setAttribute('id','featuredImage');
        img.setAttribute('src','assets/img/product/'+idproducto+'/0.webp');
        divInnerSlider.appendChild(img);
        divThumbnails.setAttribute('class','slider-thumbnails flex justify-center');

        for(var i=0;i<4;i++)
        {
            var thumbLink = document.createElement('a');
            var thumbImg = document.createElement('img');
            if(i==0)
                thumbLink.setAttribute('class','Slider-thumbnail w-24 active');
            else
                thumbLink.setAttribute('class','Slider-thumbnail w-24');
            thumbLink.setAttribute('href','assets/img/product/'+idproducto+'/'+i+'.webp');
            thumbImg.setAttribute('class','w-24');
            thumbImg.setAttribute('src','assets/img/product/'+idproducto+'/thumbnail/'+i+'.webp');
            thumbLink.appendChild(thumbImg);
            divThumbnails.appendChild(thumbLink);
        }
        
        divSlider.appendChild(divInnerSlider);
        divSlider.appendChild(divThumbnails);

        divImg.appendChild(divSlider);

        for(var i in element)
        {
            if(i!='imagen')
            {
                if(element[i]!='')
                {
                    if(i=='capacidad')
                    {
                        aux=aux+'<tr class="text-left align-top"><td class="font-extrabold w-1/5 uppercase">'+heading[cont]+'</td><td class="w-4/5">'+element[i]+' LT</td></tr><tr><td>';
                    }
                    else if((i.includes('alto')||i.includes('ancho')||i.includes('largo')||i.includes('diametro'))&&element[i]!='')
                    {
                        aux=aux+'<tr class="text-left align-top"><td class="font-extrabold w-1/5 uppercase">'+heading[cont]+'</td><td class="w-4/5">'+element[i]+' cm</td></tr><tr><td>';
                    }
                    else
                        aux=aux+'<tr class="text-left align-top"><td class="font-extrabold w-1/5 uppercase">'+heading[cont]+'</td><td class="w-4/5">'+element[i]+'</td></tr><tr><td>';
                }
                cont+=1;
            }
        }
        tablaBody.innerHTML=aux;
        tablaModal.appendChild(tablaBody);
        divInfo.appendChild(tablaModal);
        var rowModal = document.getElementById('row-modal');
        rowModal.appendChild(divImg);
        rowModal.appendChild(divInfo);
        $('#modal-div').removeClass('filter blur');
        spinner.hide();
        /*Gallery script*/
        let thumbnails = document.getElementsByClassName('Slider-thumbnail');
        let activeImages = document.getElementsByClassName('active');
        /* iterate through each thumbnail */
        for (var i=0; i < thumbnails.length; i++)
        {
            /* listen for click events on each thumbnail */
            thumbnails[i].addEventListener('click', function(e){
                /* prevent default action on a tag */   
                e.preventDefault()
                /* if more than one image has .active then remove class */
                if (activeImages.length > 0){
                activeImages[0].classList.remove('active')
                }
                /* add .active class on click */
                this.classList.add('active')
                /* replace src url in #featuredImage with clicked thumbnail src url */
                document.getElementById('featuredImage').src = this.href
            })
        }
        /*End Gallery script*/
    });
    })
    .fail(function( jqXHR, textStatus, errorThrown ) {
        if ( console && console.log ) {
            console.log( "La solicitud a fallado: " +  textStatus + errorThrown);
        }
    });
    closeBtn.onclick = function()
    {
        modal.classList.toggle("hidden");
        layout.classList.toggle("hidden");
        $(window).scrollTop(windowHeight);
        /*enableScroll();*/
    }
    okBtn.onclick = function()
    {
        modal.classList.toggle("hidden");
        layout.classList.toggle("hidden");
        /*enableScroll();*/
        $(window).scrollTop(windowHeight);
    }
}
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});
