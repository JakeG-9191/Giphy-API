var topics = [
  "Die Hard", "Mission Impossible", "Jurassic Park", "The Day After Tomorrow", "The Martian", "The Matrix", "Indiana Jones", "Mad Max", "John Wick", "James Bond",
];

var gifNess = "";


$(document).on("click", ".button-click", function () {
  $(".button-here").empty();
  $(".holder").empty();
  gifNess = $(this).attr("data-name");
  searchGif();
  createGif();
});

$(document).on("click", ".btn-block", function (event) {
  event.preventDefault();
  var addGif = $("#gif-search").val().trim();
  topics.push(addGif);
  $(".button-here").empty();
  $(".holder").empty();
  createGif();
  $("#gif-search").val("");
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

    });
  });
};

function createGif(){
for (var i = 0; i < topics.length; i++) {
  var gifValue = topics[i];
  var gifButton = $("<button>").attr("data-name", gifValue).text(gifValue)

  gifButton.attr("class", "button-click");
  $(".button-here").append(gifButton);
}};

searchGif();
createGif();