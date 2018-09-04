function gotoSlide(buttonIndex) {
  if (buttonIndex > $buttons.length - 1) {
    buttonIndex = 0;
  } else if (buttonIndex < 0) {
    buttonIndex = $buttons.length - 1;
  }

  if (buttonIndex === 0 && curIndex === $buttons.length - 1) {
    // 从最后一张跳转到第一张
    $('#images').css({
      transform: `translateX(${-(curIndex+2)*400}px)`
    }).one('transitionend', function() {
      $('#images').hide().offset();
      $('#images').css({
        transform: `translateX(${-(buttonIndex+1)*400}px)`
      }).show();
    })
  } else if (buttonIndex === $buttons.length - 1 && curIndex === 0) {
    // 从第一张跳转到最后一张
    $('#images').css({
      transform: 'translateX(0px)'
    }).one('transitionend', function() {
      $('#images').hide().offset();
      $('#images').css({
        transform: `translateX(${-(buttonIndex+1)*400}px)`
      }).show();
    })
  } else {
    $('#images').css({
      transform: `translateX(${-(buttonIndex+1)*400}px)`
    });
  }
  curIndex = buttonIndex;
}

function bindEvents() {
  $('#buttonWrapper').on('click', 'button', function(e) {
    let $curButton = $(e.currentTarget);
    let buttonIndex = $curButton.index();
    gotoSlide(buttonIndex);
  });

  $('#prev').on('click', function() {
    gotoSlide(curIndex - 1);
  });
  $('#next').on('click', function() {
    gotoSlide(curIndex + 1);
  });
}

function setSlideOn() {
  return setInterval(function() {
    gotoSlide(curIndex + 1);
  }, 2000);
}

let $buttons = $('#buttonWrapper > button');
let $images = $('#images');
let $imagesChild = $images.children('img');
let $firstFake = $imagesChild.eq(0).clone(true);
let $lastFake = $imagesChild.eq($imagesChild.length - 1).clone(true);

$images.prepend($lastFake);
$images.append($firstFake);
$images.hide().offset();
$images.css({
  transform: 'translateX(-400px)'
});
$images.show();

let curIndex = 0;
bindEvents();

var timeId = setSlideOn();
$('#mainWindow').on('mouseenter', function() {
  window.clearInterval(timeId);
});
$('#mainWindow').on('mouseleave', function() {
  timeId = setSlideOn();
});
