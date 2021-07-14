/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]


        // <section class="existing-tweets">
        //   <header class="tweet-header">
        //     <img class="tweeter" src="https://i.imgur.com/73hZDYK.png">
        //     <h2 class="tweeter" name="username">Newton</h2>
        //     <handle class="tweeter" ><strong>@SirIssac</strong></handle>
        //   </header>
        //   <article>
        //     If I have seen further it is by standing on the shoulders of giants
        //   </article>
        //   <hr>
        //   <footer>
            
        //     <output name ="time">10 days ago</output>
        //     <div name="tweet-footer-icons">
        //       <i class="fas fa-flag tweet-footer-icons"></i>
        //       <i class="fas fa-retweet tweet-footer-icons"></i>
        //       <i class="fas fa-heart tweet-footer-icons"></i>
        //     </div>
        //   </footer>
        // </section>

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    console.log('appended')
    const $tweetData = createTweetElement(tweet);
    $('#tweets-container').append($tweetData);
  }
}

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
  return $section
}

$(document).ready(()=> {
   renderTweets(data);

})