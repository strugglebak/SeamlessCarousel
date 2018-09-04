let $buttons = $('#buttonWrapper > button');
let index = 0;

let $images = $('#images');
let $imagesChild = $images.children('img');

let $firstFake = $imagesChild.eq(0).clone(true);
let $lastFake = $imagesChild.eq($imagesChild.length - 1).clone(true);

function gotoSlide(buttonIndex, curIndex) {
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
}

$images.prepend($lastFake);
$images.append($firstFake);

$images.hide().offset();
$images.css({
  transform: 'translateX(-400px)'
});
$images.show();


let curIndex = 0;
$('#buttonWrapper').on('click', 'button', function(e) {
  let $curButton = $(e.currentTarget);
  let buttonIndex = $curButton.index();
  gotoSlide(buttonIndex, curIndex);
  curIndex = buttonIndex;
});
