var topics = [
  "Die Hard", "Mission Impossible", "Jurassic Park", "The Day After Tomorrow", "The Martian", "The Matrix", "Indiana Jones", "Mad Max", "John Wick", "James Bond",
];

var gifNess = "";

$(document).on("click", ".button-click", function () {
  $(".button-here").empty();
  $(".holder").empty();
  gifNess = $(this).attr("data-name");
  console.log(gifNess)
  searchGif();
  createGif();
});

function searchGif() {
  var search = gifNess;
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&q=" + search + "&offset=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var giphyData = response.data;

    for (var i = 0; i < 15; i++) {
      var newDivide = $("<span>");
      var rating = $("<p>");

      rating.text("Rating: " + giphyData[i].rating);

      var holdStill = $("<img>");
      holdStill.attr("src", giphyData[i].images.fixed_height_still.url);
      holdStill.attr("data-still", giphyData[i].images.fixed_height_still.url);
      holdStill.attr("data-animate", giphyData[i].images.original.url);
      holdStill.attr("data-state", "still")
      holdStill.attr("class", "gifs");

      newDivide.append(rating, holdStill);
      $(".holder").prepend(newDivide);
    }

    $(".gifs").on("click", function () {
      var gifState = $(this).attr("data-state");
      var still = $(this).attr("data-still");
      var animate = $(this).attr("data-animate");

      if (gifState === "still") {
        $(this).attr("src", animate)
        $(this).attr("data-state", "animate")
      } else {
        $(this).attr("src", still)
        $(this).attr("data-state", "still")
      }

      console.log(gifState)
    });
  });
};

function createGif(){
for (var i = 0; i < topics.length; i++) {
  var gifValue = topics[i];
  var gifButton = $("<button>").attr("data-name", gifValue).text(gifValue)

  //create $(this).something to grab value

  gifButton.attr("class", "button-click");
  gifButton.attr("class", "btn btn-dark");
  $(".button-here").append(gifButton);
}};

// $("#button-click").on("click", function () {
//   var gifNess = $(this).attr("data-name")
//   console.log(gifNess)
// });


searchGif();
createGif();