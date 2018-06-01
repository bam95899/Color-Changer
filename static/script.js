/*
Uses JQuery to determine what happens when a button is clicked,
when it is clicked we use AJAX to send the data to python to decide
what color the button should be, python returns that color and it
is set using JQuery.
 */
$(document).ready(function () {
    $(".project-buttons").click(function () {
        var button = this;
        var button_id = button.id;
        $.ajax({
            type: "POST",
            url: "/buttonsData",
            data: {"id": button_id},
            contentType: "multipart/form-data",
            success: function (response) {
                console.log(response);
                var color = $(button).css("background-color");
                console.log(color);
                if (color != 'rgb(255, 255, 255)') {
                    $(button).css("background-color", "white");
                } else {
                    $(button).css("background-color", '' + response);
                }
            },
            error: function (error) {
                console.log(error);
            }
        });
    });
});

/*
Uses JQuery to determine what happens when hovering over a button.
Uses AJAX to send button data to python who sends back what color
the button should display when hovered over
 */
$(document).ready(function () {
    $(".project-buttons").hover(function () {
        var parent = this;
        var target = event.target.id;
        $.ajax({
            type: "POST",
            url: "http://127.0.0.1:5000/buttonsData",
            data: {"id": target},
            contentType: "multipart/form-data",
            success: function (response) {
                console.log(response);
                var color = $(parent).css("background-color");
                console.log(color);
                if (color != 'rgb(255, 255, 255)') {
                    $('html').css('backgroundImage', 'url(https://media.giphy.com/media/1yTi0kB22h0Hdveov8/source.gif)');
                    $(parent).css("background-color", "white");
                } else {
                    $(parent).css("background-color", '' + response);
                }
            },
            error: function (error) {
                console.log(error);
            }
        });
    });
});