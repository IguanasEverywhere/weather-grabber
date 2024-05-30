import os
from flask import Flask, render_template, request, url_for, redirect
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func
from flask_cors import CORS

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] =\
        'sqlite:///' + os.path.join(basedir, 'database.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
CORS(app)


class Weather(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    temperature = db.Column(db.Integer, nullable=False)
    weather_code = db.Column(db.Integer, nullable=False)
    timestamp = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())

    def __repr__(self):
        return f'<Weather {self.id, self.temperature}>'

    @app.route('/api/saved-weather-data', methods=['GET'])
    def get_weather_data():
        return{'test':'content'}


if __name__ == '__main__':
    app.run(port=5555)