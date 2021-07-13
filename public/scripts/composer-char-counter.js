$(document).ready(function() {
  const $input = $('#tweet-text');
  $input.on('input', function() {
    const $value = $(this);
    const wordLimit = 140;
    //console.log(wordLimit);
    $value.parents().find('.counter')['0'].value = wordLimit - $value['0'].value.length;
    if ($value.parents().find('.counter')['0'].value < 0) {
      $value.parents().find('.counter')[0].name = "counterMinus";
    } else if ($value.parents().find('.counter')['0'].value > 0) {
      $value.parents().find('.counter')[0].name = "counter";
    }
  })
})