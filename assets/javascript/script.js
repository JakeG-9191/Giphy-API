var topics = [
  "Die Hard", "Mission Impossible", "Signs", "", ""
];


function searchGif() {

  // var search = $(this).attr("data-name");
  var search = "Die Hard"
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
      holdStill.attr("data-still", giphyData[i].images.fixed_height_still.url);
      holdStill.attr("data-animate", giphyData[i].images.original.url);
      holdStill.attr("data-state", "still")
      holdStill.attr("class", "gifs");

      
      newDiv.append(rating, holdStill);
      $(".holder").prepend(newDiv);
    }
    
    $(".gifs").on("click", function() {
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
      
      console.log(gifState)
    });
  });
}

for (var i = 0; i < topics.length; i++){

}


searchGif();