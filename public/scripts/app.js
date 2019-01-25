/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  */
$(document).ready(function() => {
    const ROOT_URL = 'http://localhost:8080';

//  const request = (options, cb ) => {
//     $.ajax(options)
//     .done(response => {
//         cb (reponse);
//     })
//     .fail(err => {
//         console.log("Err: ", err);
//     })
//     .always(() => {
//         console.log('Request Completed.');
//     });
// };

// const createTweetElement = articleObj => {
//     const newTweet = createTweetElement(response);
//     $('<article>').append(newTweet);
// }

let $tweet = createTweetElement(tweetData){

let newTweet = $("<article>").addClass("tweet-header");
let newHeader= $("<header>");
let newImg= $("<img>").attr("src", tweet.user.avatars.regular);
let newh2 = $("<h2>");
let newdiv = $("<div>");
let newp = $("<p>");
let newFooter = $("<footer>").attr("text");

return $tweet;
};

console.log($tweet);

$('<article>').append($tweet);