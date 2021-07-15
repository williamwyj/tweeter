$(document).ready(function() {
  const $input = $('#tweet-text');

  wordCounter = function(){
    const $value = $input;
    const wordLimit = 140;
    $value.parents().find('.counter')['0'].value = wordLimit - $value['0'].value.length;
    if ($value.parents().find('.counter')['0'].value < 0) {
      $value.parents().find('.counter')[0].name = "counterMinus";
    } else if ($value.parents().find('.counter')['0'].value > 0) {
      $value.parents().find('.counter')[0].name = "counter";
    }
  }
  
  $input.on('input', wordCounter);
  
  const $button = $("#submit-new-tweet");
  $button.on('click', function(){
    if ($input['0'].value.length <= 140) {
    $input.parents().find('.counter')['0'].value = 140;
    }
  });
})
