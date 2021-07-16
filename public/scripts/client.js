/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//function to render all tweets in the database
const renderTweets = function(tweets) {
  $('#tweets-container').empty();
  for (const tweet of tweets) {
    const $tweetData = createTweetElement(tweet);
    $('#tweets-container').prepend($tweetData);
  }
};
//Creates HTML code for displaying existing tweets using jQuery to avoid Cross-Site scripting hack
const createTweetElement = (tweetData) => {
  const $section = $('<section>').addClass('existing-tweets');
  const $header = $('<header>').addClass('tweet-header');
  const $article = $('<article>').text(tweetData.content.text);
  const $hr = $('<hr>');
  const $footer = $('<footer>');
  $section.append($header, $article, $hr, $footer);
  const $img = $('<img>').addClass('tweeter').attr("src",tweetData.user.avatars);
  const $h2 = $('<h2>').addClass('tweeter').attr("name","username").text(tweetData.user.name);
  const $handle = $('<handle>').addClass('tweeter');
  const $strong = $('<strong>').text(tweetData.user.handle);
  $handle.append($strong);
  $header.append($img, $h2, $handle);
  const $output = $('<output>').attr("name", "time").text(timeago.format(tweetData['created_at']));
  const $div = $('<div>').attr("name", "tweet-footer-icons");
  const $i1 = $('<i>').addClass('fas fa-flag').addClass('tweet-footer-icons');
  const $i2 = $('<i>').addClass('fas fa-retweet').addClass('tweet-footer-icons');
  const $i3 = $('<i>').addClass('fas fa-heart').addClass('tweet-footer-icons');
  $div.append($i1, $i2, $i3);
  $footer.append($output, $div);
  
  return $section;
};

$(document).ready(()=> {
  //For the Write a tweet button to reveal the write-new-tweet area if it is hidden or hide it if it is hidden
  const $button = $("#new-tweet-button");
  $button.on ('click', function() {
    if ($('.new-tweet').is(":hidden")) {
      $('.new-tweet').slideDown("slow");
      $('#tweet-text').focus();
    } else if ($('.new-tweet').is(":visible")) {
      $('.new-tweet').slideUp("slow");
    }
  });
  //To show the topButton on the bottom right corner if page scrolled down, to hide it if page already at the top
  const $topButton = $('#topButton');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
      $topButton.show();
    } else {
      $topButton.hide();
    }
  });
  //function to move to the top of the page for the top button
  
  $topButton.on ('click', function topFunction() {
    $(window).scrollTop(0);
  });

  // ajax GET request to process response data from server, use the data to render
  const loadTweets = function() {
    $.ajax('/tweets/', {method: 'GET'})
      .then(function(allTweets) {
        renderTweets(allTweets);
      });
  };

  //form for entering new tweets
  const $form = $('#new-tweet');
  $form.on ('submit', function() {
    event.preventDefault();
    //hide error message before submitted text is processed for error
    $('#overError').hide();
    $('#emptyError').hide();
    
    const input = $("#tweet-text")['0'].value.length;
    if (input <= 0) {
      if ($('#emptyError').is(":hidden")) {
        $('#emptyError').slideDown("slow");
      } 
    } else if (input > 140) {
      if ($('#overError').is(":hidden")) {
        $('#overError').slideDown("slow");
      }
      return;
    }
    const urlEncodedData = $(this).serialize();
    //record new tweet in database and clear the tweet text entry form
    $.post('/tweets/',urlEncodedData, (response) => {
      loadTweets();
      $("#tweet-text").val('');
    });
  });
  loadTweets();
});