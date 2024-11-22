from flask import Blueprint, render_template

# Create a Blueprint instance for organizing routes
app = Blueprint('app', __name__)

# Home route
@app.route('/')
def home():
    return render_template('home.html')  # Ensure home.html exists in templates/
