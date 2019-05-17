var topics = ["apple", "banana", "lemon", "lime", "mango"];

function renderButtons() {

    $("#fruit-buttons").empty();

    for (var i = 0; i < topics.length; i++) {
      var newfruit = $("<button>");
      newfruit.text(topics[i]);
      newfruit.attr("data-fruit", topics[i]);
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