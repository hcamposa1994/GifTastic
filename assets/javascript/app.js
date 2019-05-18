var topics = ["apple", "banana", "lemon", "lime", "mango"];

function renderButtons() {

    $("#fruit-buttons").empty();

    for (var i = 0; i < topics.length; i++) {
      var newfruit = $("<button>");
      newfruit.text(topics[i]);
      newfruit.attr("data-fruit", topics[i]);
      newfruit.attr("class", "fruit-group");
      $("#fruit-buttons").append(newfruit);

    }

}

$("#add-fruit").on("click", function() {

    event.preventDefault();
    
    var userInput = $("#fruit-input").val();
    if (userInput) {
    topics.push(userInput);
    }
    renderButtons();

  });

renderButtons();

$(document).on("click", ".fruit-group", function() {
    var fruit = $(this).attr("data-fruit");
    var api_key = "&api_key=GFIHFicY1XEDTegb3grxyAzfTQ35fowX&limit=10";
    var limit = "&limit=10"
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      fruit + api_key + limit;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      console.log(response);

        var results = response.data;
        $("#fruit-gifs").empty();
       for (var i = 0; i < results.length; i++) {
           
      var fruitDiv = $("<div>");

      var p = $("<p>");

      p.text(results[i].rating);

      var fruitGif = $("<img>");

      fruitGif.attr('src', results[i].images.fixed_height.url);

      fruitDiv.append(p);

      fruitDiv.append(fruitGif);

      $("#fruit-gifs").prepend(fruitDiv);

       }

    });
  });