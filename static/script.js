/*
Function that takes in button data and weather or not
it is being clicked (true/false) and either changes the
color of the button when isClicked = true or sets color
of button when isClicked is false (since button is being
hovered over)
 */
function button_color_changer(button, isClicked) {
    $.ajax({
        type: "POST",
        url: "/button-data",
        data: {"id": button.id},
        contentType: "multipart/form-data",
        success: function (response) {
            console.log(response);
            var color = $(button).css("background-color");
            console.log(color);
            // $('id').hasClass("active");
            // if (color != 'rgb(255, 255, 255)') {
            if ($(button).hasClass('active')) {
                if (isClicked == true) {
                    $(button).css("background-color", "white");
                    $(button).toggleClass('active')
                } else {
                    $('body').css('backgroundImage', 'url(https://media.giphy.com/media/1yTi0kB22h0Hdveov8/source.gif)');
                    $(button).css("background-color", "white");
                    $(button).toggleClass('active')
                }
            } else {
                $(button).css("background-color", '' + response);
                $(button).toggleClass('active')
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}

/*
Uses JQuery to determine what happens when a button is clicked,
when it is clicked we use AJAX to send the data to python to decide
what color the button should be, python returns that color and it
is set using JQuery.
 */
$(document).ready(function () {
    $(".project-buttons").click(function () {
        button_color_changer(this, true);
    });
});

/*
Uses JQuery to determine what happens when hovering over a button.
Uses AJAX to send button data to python who sends back what color
the button should display when hovered over
 */
$(document).ready(function () {
    $(".project-buttons").hover(function () {
        button_color_changer(this, false);
    });
});
