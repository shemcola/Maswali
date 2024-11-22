from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, SelectField
from wtforms.validators import DataRequired, Email

class LoginForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Login')

class QuestionForm(FlaskForm):
    question = StringField('Question', validators=[DataRequired()])
    subject = StringField('Subject', validators=[DataRequired()])
    topic = StringField('Topic', validators=[DataRequired()])
    sub_topic = StringField('Sub-topic', validators=[DataRequired()])
    grade = SelectField('Grade', choices=[('1', 'Grade 1'), ('2', 'Grade 2'), ('3', 'Grade 3')], validators=[DataRequired()])
    submit = SubmitField('Add Question')
