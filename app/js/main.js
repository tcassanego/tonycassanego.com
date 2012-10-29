var loadBackground = function() {
  var num = Math.floor((Math.random()*4)+1);
  
  var exp = new Date();
  exp.setTime(exp.getTime() + 2592000000); /* 30 days */
  
  var start, end;
  var cookie_name = 'last_background';
  
  if ((start = document.cookie.indexOf(cookie_name)) === -1) {
    document.cookie = cookie_name + '=' + num + '; expires=' + exp.toUTCString() + '; path=/'
  } else {
    end = ((i = document.cookie.indexOf(';', start)) === -1 ? document.cookie.length : i);
    num = parseInt(document.cookie.slice(start + cookie_name.length + 1, end), 10);
    num = (num % 4) + 1; /* 1-4 */
    document.cookie = cookie_name + '=' + num + '; expires=' + exp.toUTCString() + '; path=/'
  }

  var img = new Image();
  var bg = $('#bg');
  $(img).load(function() {
    bg.fadeIn({duration: 600});
  });
  img.src = '/img/bg-' + num + '.jpg';
  bg.css({backgroundImage: 'url("' + img.src + '")'});
};

var setupAboutBox = function() {
  var about_displayed = false;
  $('#about_link').bind('click', function() {
    if (about_displayed) return;
    about_displayed = true;
    $('#slide_in_bar').animate({
      width: '100%',
      marginLeft: '0%'
    },{
      complete: function() {
        $('#about_text').slideDown({complete: function(){$('#close').fadeIn();}});
      }
    });
  });

  $('#close').bind('click', function() {
    $('#close').fadeOut({
      complete: function() {
        $('#about_text').slideUp({
          complete: function() {
            $('#slide_in_bar').animate({
              width: '0%',
              marginLeft: '100%'
            },{
              complete: function() {
                about_displayed = false;
              }
            });
          }
        });
      }
    });
  });
};

$(window).load(function() {
  setupAboutBox();
  loadBackground();
});


