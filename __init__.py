from flask import Flask, render_template, request

# Color Changer
# - Use Python with Flask Classy to create endpoints/urls
# - Create three buttons that say 'red', 'blue', and 'green'.
# - Have these 3 buttons use AJAX to connect to python and return CSS colors, 'tomato', 'aqua', and 'forestgreen' respectively
# - Use those values to modify the colors of the buttons

app = Flask(__name__)


# Creates and renders in the main page via index.html
@app.route("/")
def index():
    return render_template('index.html')


# Creates and renders in the page with buttons via buttonsPage.html
@app.route("/buttons")
def render_button_html():
    return render_template('button_page.html')


# returns what color the button should be when clicked.
@app.route("/buttonsData", methods=["POST"])
def buttons_data():
    button_id = request.get_data()
    button_id = button_id[3:]
    if button_id == 'red':
        return "tomato"
    elif button_id == 'green':
        return 'forestgreen'
    elif button_id == 'blue':
        return 'aqua'
    else:
        return 'white'


@app.route("/buttons/button_world")
def wonderful_world():
    return render_template('wonderful_world.html')


# Starts the site
if __name__ == "__main__":
    app.run()
