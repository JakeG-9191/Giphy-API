var topics = [
  "Game of Thrones", "Harry Potter", "Carnival Row", "Brothers Grimm"
];


function searchGif() {

  // var search = $(this).attr("data-name");
  var search = "harry potter"
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&q=" + search + "&limit=10&offset=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var giphyData = response.data;
    console.log(giphyData)
    console.log(giphyData[0])
    console.log(giphyData[0].rating)
    console.log(giphyData[0].images.fixed_height_still.url)
    console.log(giphyData[0].images.original.url)

    for (var i = 0; i < topics.length; i++){
      var newDiv = $("<div>");
      var rating = $("<p>");

      rating.text("Rating: " + giphyData[i].rating);

      var holdStill = $("<img>");
      holdStill.attr("src", giphyData[i].images.fixed_height_still.url);

      newDiv.append(rating, holdStill);
      $(".gifs").prepend(newDiv);
    }

  });
}

function displayGif() {
  // $(".gifs").empty();
  
  var gifState = $(this).attr("data-state");

  var still = $(this).attr("data-still");
  var animate = $(this).attr("data-animate");

  if (gifState === "still"){
    $(this).attr("src", animate)
    $(this).attr("data-state", "animate")
  } else {
    $(this).attr("src", still)
    $(this).attr("data-state", "still")
  }

}

searchGif();
displayGif();