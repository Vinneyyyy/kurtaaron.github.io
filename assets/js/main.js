(function($){
    "use strict";

    //VARIABLES USED
    var $body = $('body'),
      $siteNavbar = $('.site-navbar'),
      siteNavbar_base = $siteNavbar.attr('data-navbar-base') ? $siteNavbar.attr('data-navbar-base') : '',
      siteNavbar_toggled = $siteNavbar.attr('data-navbar-toggled') ? $siteNavbar.attr('data-navbar-toggled') : '',
      siteNavbar_scrolled = $siteNavbar.attr('data-navbar-scrolled') ? $siteNavbar.attr('data-navbar-scrolled') : '';

    // LOADER
    window.addEventListener( 'load', function(){
      document.querySelector('body').classList.add('loaded');
    });

    // NAVIGATION
  
    function navOnScroll(){
      if ( $siteNavbar.length > 0 ){
        var currentPos = $(window).scrollTop();
  
        if ( currentPos > 0 ){
          if ( $siteNavbar.hasClass('scrolled') ){
            return;
          }
  
          $siteNavbar.addClass('scrolled').removeClass('scrolled-0');
  
          if( $siteNavbar.hasClass('navbar-toggled-show') ){
            navChangeClasses('toggled');
          } else {
            navChangeClasses('scrolled');
          }
        } else {
          $siteNavbar.removeClass('scrolled').addClass('scrolled-0');
  
          if( $siteNavbar.hasClass('navbar-toggled-show') ){
            navChangeClasses('toggled');
          } else if( $body.hasClass('flyer-open') ){
            navChangeClasses('flyer');
          } else {
            navChangeClasses();
          }
        }
      }
    }

    var nav_event_old;
    function navChangeClasses(nav_event){
      if( nav_event_old === nav_event && !( nav_event == '' || nav_event == undefined ) )
        return;
  
      if( nav_event === 'toggled' && siteNavbar_toggled ){
        $siteNavbar.removeClass('navbar-light navbar-dark', siteNavbar_base, siteNavbar_scrolled);
        $siteNavbar.addClass(siteNavbar_toggled);
      } else if( nav_event === 'scrolled' && siteNavbar_scrolled ){
        $siteNavbar.removeClass('navbar-light navbar-dark', siteNavbar_base, siteNavbar_toggled);
        $siteNavbar.addClass(siteNavbar_scrolled);
      } else {
        if(siteNavbar_base){
          $siteNavbar.removeClass('navbar-light navbar-dark', siteNavbar_toggled, siteNavbar_scrolled);
          $siteNavbar.addClass(siteNavbar_base);
        }
      }
  
      if( $siteNavbar.hasClass('navbar-light') ){
        $('[data-on-navbar-light]').each(function(){
          var el = $(this);
  
          if( el.attr('data-on-navbar-dark') ){
            el.removeClass(el.attr('data-on-navbar-dark'));
          }
          if( el.attr('data-on-navbar-light') ){
            el.addClass(el.attr('data-on-navbar-light'));
          }
        });
      } else if( $siteNavbar.hasClass('navbar-dark') ){
        $('[data-on-navbar-dark]').each(function(){
          var el = $(this);
  
          if( el.attr('data-on-navbar-light') ){
            el.removeClass(el.attr('data-on-navbar-light'));
          }
          if( el.attr('data-on-navbar-dark') ){
            el.addClass(el.attr('data-on-navbar-dark'));
          }
        });
      }
  
      nav_event_old = nav_event;
    }
  
    // BACKGROUND
    function background(){  
      // IMAGE
      var $bgImage = $('.bg-image-holder');
      if($bgImage.length){
        $bgImage.each(function(){
          var $self = $(this);
          var src = $self.children('img').attr('src');
          $self.css('background-image','url('+src+')').children('img').hide();
        });
      }
    }

    // TYPED TEXT
    function typedText(){
      var toggle = document.querySelectorAll('[data-toggle="typed"]');
      function init(el) {
        var elementOptions = el.dataset.options;
            elementOptions = elementOptions ? JSON.parse(elementOptions) : {};
        var defaultOptions = {
          typeSpeed: 40,
          backSpeed: 40,
          backDelay: 3000,
          loop: true
        }
        var options = Object.assign(defaultOptions, elementOptions);
        new Typed(el, options);
      }
      if (typeof Typed !== 'undefined' && toggle) {
        [].forEach.call(toggle, function(el) {
          init(el);
        });
      }
    }
    
    $(document).ready(function(){
        navOnScroll();
        background();
        typedText();
    });

    $(window).on('scroll', function(){
        navOnScroll()
    })

    $(window).on('resize', function(){
        navOnScroll();
      });
    
})(jQuery);

//PARTICLES JS 

window.onload = function() { 
    Particles. init ({ 
      selector: '.Particles' 
    }); 
  };

  var particles = Particles.init({
    selector: '.background',
    color: ['#DA0463', '#404B69', '#DBEDF3'],
    connectParticles: true,
    maxParticles: 100
    });