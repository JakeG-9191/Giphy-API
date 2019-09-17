var topics = [
    "Game of Thrones", "Harry Potter", "Carnival Row", "Brothers Grimm"
];


function displayGif(){

// var search = $(this).attr("data-name");
var search = "harry potter"
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&q=" + search +"&limit=10&offset=10";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
}

displayGif();