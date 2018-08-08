var index = 0;
index += 1;

var num = $('#images > img').length;
for (let i=0; i<num; i++) {
  if (i === 0) {
    $(`#images > img:nth-child(${i+1})`).addClass('show');
  }

  $(`#images > img:nth-child(${i+1})`).addClass('arrival');
}

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

function moveImage(delayTime, imgNum) {
  setInterval(()=>{
      let $img = $(`#images > img:nth-child(${limitIndex(index, imgNum)})`);
      $img.removeClass('show').addClass('departure')
          .one('transitionend', (e)=>{
              // when transition event is end
              $(e.currentTarget).removeClass('departure').addClass('arrival');
          });
      index += 1;
      $img = $(`#images > img:nth-child(${limitIndex(index, imgNum)})`);
      $img.removeClass('arrival').addClass('show');
  }, delayTime);
}

moveImage(2000, num);
