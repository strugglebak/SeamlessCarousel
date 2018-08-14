function limitIndex(imgIndex, imgNum) {
    if (imgIndex > imgNum) {
      // if index is multiple of imgNum like imgNum * n
      imgIndex = imgIndex % imgNum;
      if (imgIndex === 0) {
        imgIndex = imgNum;
      }
    }
    return imgIndex;
}

function moveImage(index, imgNum) {
  let $img = $(`#images > img:nth-child(${limitIndex(index, imgNum)})`);
  $img.removeClass('arrival').addClass('show');
}

function showImage(index, imgNum) {
  let $img = $(`#images > img:nth-child(${limitIndex(index, imgNum)})`);
  $img.removeClass('show').addClass('departure')
      .one('transitionend', (e)=>{
          // when transition event is end
          $(e.currentTarget).removeClass('departure').addClass('arrival');
      });
}

function init(imgNum) {
  for (let i=0; i<imgNum; i++) {
    if (i === 0) {
      $(`#images > img:nth-child(${i+1})`).addClass('show');
    }
    $(`#images > img:nth-child(${i+1})`).addClass('arrival');
  }
}

var index = 1;
var num = $('#images > img').length;

init(num);

setInterval(function() {
  showImage(index, num);
  index += 1;
  moveImage(index, num);
}, 2000);
