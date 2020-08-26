$(document).ready(function() {
    var school = $(window);
    var page = $('html, body');

    // hide some default btn  
    $('#goal_mark_done').hide();


    // this is all goals mark function 
    $('#goals_star,#goals_star2').on('click',function(){
      $(this).toggleClass('active');
    })

    $('#set_goals_btn').on('click',function(){
      $(this).addClass('dissabled');
      $('#goals_star,#goals_star2').addClass('show');
      $('#goal_mark_done').show();
      $('#how_pass_btn').hide();
      return false;
    })


    $('#goal_mark_done').on('click',function(){
      $('#goal_mark_done').hide();
      $('#how_pass_btn').show();
      $('#set_goals_btn').toggleClass('dissabled');
      $('#goals_star,#goals_star2').removeClass('show');
      return false;
    })

    // end all goals mark function 



    // this header top fix scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#main_header').addClass("animated slideInDown fix");
        } else {
            $('#main_header').removeClass("animated slideInDown fix");
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#mobile_header').addClass("animated slideInDown fix");
        } else {
            $('#mobile_header').removeClass("animated slideInDown fix");
        }
    });

  // signin popup funtion
  $('#singinBtn,#signIn_btn_mobile').on('click',function(){
    $('#signUpPopup').addClass('show');
    return false;
  })
  $('#popup_close').on('click',function(){
    $('#signUpPopup').removeClass('show');
  })
  
  // otp popup fucntion
  $('#form_1').on('submit',function(){
    $('#signUpPopup').removeClass('show');
    $('#otp_popup').addClass('show');
    return false;
  })
  $('#popup_close_otp').on('click',function(){
    $('#otp_popup').removeClass('show');
  })

  // this is for signinConfirmation_popup

  $('.myPinCode').on('submit',function(){
    $('#otp_popup').removeClass('show');
    $('#signinConfirmation_popup').addClass('show');
    return false;
  })
  $('#popup_close_confirm').on('click',function(){
    $('#signinConfirmation_popup').removeClass('show');
  })
  
  // scroll master class active class
  $('.masterClass_scroll_header_item a').on('click',function(){
    $('.masterClass_scroll_header_item a').removeClass('active');
    $(this).addClass('active');
    return false;
  })

  // scroll spy for class list
  // Add scrollspy to <body>
  $('body').scrollspy({target: "#masterClass_scroll_header", offset: 50});   

  $(".masterClass_scroll_header_item a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
        $('#masterClass_scroll_header').addClass("animated slideInDown fix");
    } else {
        $('#masterClass_scroll_header').removeClass("animated slideInDown fix");
    }
});


// this is for skill 2 slider actie
  $('.skill_2_slider').owlCarousel({
        stagePadding: 59,
        loop: false,
        margin: 10,
        nav: true,
        autoPlay: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                stagePadding: 30,
            },
            576:{
              items: 2,
              stagePadding: 50,
            },
            768: {
                items: 3,
                stagePadding: 40,
            },
            992:{
              items: 3
            },
            1000: {
                items: 4
            },
        }
    })

  // this is student work slider
  $('.whatStudentCreateSliderActive').owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        autoPlay: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
        }
    })


    // this is book class popup function
    $('#bookClassctionBtn').on('click',function(){
      $('#bookClassPopup').addClass('show');
      return false;
    })
    $('#bookClassClose').on('click',function(){
      $('#bookClassPopup').removeClass('show');
    })
    
    $('#confirmBookingInsufficantAction').on('click',function(){
      $('#bookClassPopup').removeClass('show');
      $('#bookClassInsufficant').addClass('show');
      return false;
    })
    $('#bookClassinsufficenClose').on('click',function(){
      $('#bookClassInsufficant').removeClass('show');
    })

    // this is for JoinClassAtionBtn function
    $('#JoinClassAtionBtn').on('click',function(){
      $('#joinClassPopup').addClass('show');
      return false;
    })
    $('#joinCLassPopupClose').on('click',function(){
      $('#joinClassPopup').removeClass('show');
    })

    //badgePopupSlider
    $('.badgePopupSlider').owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        autoPlay: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
        }
    })    


    // badge popup function
    $('.bade_main_item').on('click',function(){
      $('#badgePopup').addClass('show');
    })
    $('#badgePopupClose').on('click',function(){
      $('#badgePopup').removeClass('show');
    })


    // success file submit popup
    $('#submit_file').on('click',function(){
      $('#submission_success').addClass('show');
      return false;
    })
    $('#submissionSuccessClose').on('click',function(){
      $('#submission_success').removeClass('show');
    })

    // error file submit popup
    $('#submissionErrorClose').on('click',function(){
      $('#submission_error').removeClass('show');
    })

    // earn poin popup
    $('#earndPointPopupClose').on('click',function(){
      $('#earndPointPopup').removeClass('show');
    })


    // all mobile slider active
    // this is for skill 2 slider actie
    $('.badge_single_goals_mobile_slide').owlCarousel({
          stagePadding: 80,
          loop: true,
          margin: 0,
          nav: false,
          autoPlay: false,
          smartSpeed: 1000,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 1
              },
              1000: {
                  items: 1
              },
          }
      })

      $('.master_class_project_main_slider').owlCarousel({
          stagePadding: 50,
          loop: true,
          margin: 20,
          nav: false,
          autoPlay: false,
          smartSpeed: 1000,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 1
              },
              1000: {
                  items: 1
              },
          }
      })

        $('.badge_single_goals_mobile_slider').owlCarousel({
          
          loop: true,
          margin: 20,
          nav: false,
          autoPlay: false,
          smartSpeed: 1000,
          responsive: {
              0: {
                  items: 2
              },
              600: {
                  items: 2
              },
              1000: {
                  items: 2
              },
          }
      })
      $('.bqdge_slider_mobile_active').owlCarousel({
          loop: true,
          margin: 20,
          nav: false,
          autoPlay: false,
          smartSpeed: 1000,
          stagePadding: 20,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 1
              },
              1000: {
                  items: 1
              },
          }
      })

        $('.masterClassAssingment_main_slider_mobile_item_active').owlCarousel({
          loop: true,
          margin: 20,
          nav: false,
          autoPlay: false,
          smartSpeed: 1000,
          stagePadding: 30,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 1
              },
              1000: {
                  items: 1
              },
          }
      })

      $('.attendClassMasterCLassMain_slider_actie').owlCarousel({
          loop: true,
          margin: 20,
          nav: false,
          autoPlay: false,
          smartSpeed: 1000,
          stagePadding: 20,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 1
              },
              1000: {
                  items: 1
              },
          }
      })


        $('.skills_bottom_attend_slider_mobile').owlCarousel({
          loop: true,
          margin: 10,
          nav: false,
          autoPlay: false,
          smartSpeed: 1000,
          stagePadding: 40,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 1
              },
              1000: {
                  items: 1
              },
          }
      })


        



    
});