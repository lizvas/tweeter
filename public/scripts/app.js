/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  */
$(document).ready(function() {
  const ROOT_URL = "http://localhost:8080";

  //building blocks to create new element in HTML
  function createTweetElement(tweetData) {
    let newTweet = $("<article>").addClass("tweet-header");
    let newHeader = $("<header>");
    let newImg = $("<img>").attr("src", tweetData.user.avatars.regular);
    let newh2 = $("<h2>").text(tweetData.user.name);
    let newdiv = $("<div>").text(tweetData.user.handle);
    let newp = $("<p>").text(tweetData.content.text);
    let newFooter = $("<footer>").text(tweetData.created_at);

    //buidling the DOM tree out of the blocks above to have them all go to my container, newTweet
    $(newHeader).appendTo(newTweet);
    $(newImg).appendTo(newHeader);
    $(newh2).appendTo(newHeader);
    $(newdiv).appendTo(newHeader);
    $(newp).appendTo(newTweet);
    $(newFooter).appendTo(newTweet);

    return newTweet;
  }
  //loop through each tweet and place them in tweets-container
  function renderTweets(tweets) {
    for (let tweet of tweets) {
      let $tweet = createTweetElement(tweet);
      $("#tweets-container").append($tweet);
    }
  }

  const request = (options, cb) => {
    $.ajax(options)
      .done(response => {
        cb(response);
      })
      .fail(err => {
        console.log("Error: ", err);
      })
      .always(() => {
        console.log("Request completed.");
      });
  };

  //format for new tweets
  const createAddTweetFrm = () => {
    return {
      user: {
        name: "text",
        avatars: {},
        handle: "text"
      },
      content: {
        text: "text"
      },
      created_at: "date"
    };
  };

  const loadTweets = {
    method: "GET",
    datatype: "json",
    url: "/tweets"
  };
  //AJAX get request
  $.ajax(loadTweets)
    .done(response => {
      renderTweets(response);
      console.log("response completed:", response);
    })
    .fail(err => {
      console.log("Error: ", err);
    })
    .always(() => {
      console.log("Request completed.");
    });

  //event traget for submitted tweet
  $("form").on("submit", function(event) {
    if ($("textarea").val() == "") {
      alert("Please enter text");
    } else if ($("textarea").val().length > 140) {
      alert("Over the limit");
      event.stopPropagation();
      return false;
    }
    event.preventDefault();

    // const addTweetFrm = createAddTweetFrm();
    console.log("form submit");

    //extracting the tweet from the textarea
    const tweetContent = $("textarea").val();
    // console.log(tweetContent);

    //request tweet properties
    const options = {
      type: "POST",
      url: "/tweets",
      data: { text: tweetContent }
    };
    //AJAX post request
    $.ajax(options)
      .done(response => {
        let $tweet = createTweetElement(response);
        $("#tweets-container").prepend($tweet);
        console.log(response);
      })
      .fail(err => {
        console.log("Error: ", err);
      })
      .always(() => {
        console.log("Request completed.");
      });
  });
});
