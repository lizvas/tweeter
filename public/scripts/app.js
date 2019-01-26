/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  */
$(document).ready(function() {
  const ROOT_URL = "http://localhost:8080";

  const data = [
    {
      user: {
        name: "Newton",
        avatars: {
          small:
            "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          regular:
            "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          large:
            "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        handle: "@SirIsaac"
      },
      content: {
        text:
          "If I have seen further it is by standing on the shoulders of giants"
      },
      created_at: 1461116232227
    },
    {
      user: {
        name: "Descartes",
        avatars: {
          small:
            "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          regular:
            "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          large:
            "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        handle: "@rd"
      },
      content: {
        text: "Je pense , donc je suis"
      },
      created_at: 1461113959088
    },
    {
      user: {
        name: "Johann von Goethe",
        avatars: {
          small:
            "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          regular:
            "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          large:
            "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        handle: "@johann49"
      },
      content: {
        text: "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      created_at: 1461113796368
    }
  ];

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

  renderTweets(data);

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

  $("form").on("submit", function(event) {
    event.preventDefault();
    const addTweetFrm = createAddTweetFrm();
    console.log("form submit");

    //extracting the tweet from the textarea
    const tweetContent = $("textarea").val();
    console.log(tweetContent);

    //request tweet properties
    const options = {
      type: "POST",
      url: "/tweets",
      data: { text: tweetContent }
    };

    $.ajax(options)
      .done(response => {
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
