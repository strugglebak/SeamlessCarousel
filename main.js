let $buttons = $('#buttonWrapper > button');
let index = 0;

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

$buttons.eq(0).on('click', function() {
  console.log('index = ' + index);
  if (index === 4) {
    console.log('从 最后一张 跳到 第一张');
    $('#images').css({
         transform: 'translateX(-2000px)'
    }).one('transitionend', function() {
      console.log('动画结束');
      $('#images').hide().offset();
      $('#images').css({
        transform: 'translateX(-400px)'
      }).show();
    })
  } else {
    $('#images').css({
      transform: 'translateX(-400px)'
    });
  }
  index = 1;
});
$buttons.eq(1).on('click', function() {
  $('#images').css({
    transform: 'translateX(-800px)'
  });
  index = 2;
});
$buttons.eq(2).on('click', function() {
  $('#images').css({
    transform: 'translateX(-1200px)'
  });
  index = 3;
});
$buttons.eq(3).on('click', function() {
  if (index === 1) {
    console.log('从 第一张 跳到 最后一张');
    $('#images').css({
      transform: 'translateX(0px)'
    }).one('transitionend', function() {
      console.log('动画结束');
      $('#images').hide().offset();
      $('#images').css({
        transform: 'translateX(-1600px)'
      }).show();

    })
  } else {
    $('#images').css({
      transform: 'translateX(-1600px)'
    });
  }
  index = 4;
});
