$('#images > img:nth-child(1)').addClass('show');
$('#images > img:nth-child(2)').addClass('arrival');
$('#images > img:nth-child(3)').addClass('arrival');

var index = 0;
index += 1;


function limitIndex(index) {
    // if index = 6, 9, 12...
    if (index > 3) {
      index = index % 3;
      if (index === 0) {
        index = 3;
      }
    }
    return index;
}

function moveImage(index, delayTime) {
  setInterval(()=>{
      let $img = $(`#images > img:nth-child(${limitIndex(index)})`);
      $img.removeClass('show').addClass('departure')
          .one('transitionend', (e)=>{
              // when transition event is end
              $(e.currentTarget).removeClass('departure').addClass('arrival');
          });
      index += 1;
      $img = $(`#images > img:nth-child(${limitIndex(index)})`);
      $img.removeClass('arrival').addClass('show');
  }, delayTime);
}

moveImage(index, 2000);
