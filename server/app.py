import os
from flask import Flask, render_template, request, url_for, redirect
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func
from flask_cors import CORS

from datetime import datetime

#for testing purposes
c = datetime.now()

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] =\
        'sqlite:///' + os.path.join(basedir, 'database.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
CORS(app)


class Weather(db.Model):
    __tablename__ = "weather"
    id = db.Column(db.Integer, primary_key=True)
    temperature = db.Column(db.Integer, nullable=False)
    weather_code = db.Column(db.Integer, nullable=False)
    timestamp = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())

    def __repr__(self):
        return f'<Weather {self.id, self.temperature}>'

    def to_dict(self):
        return {
            "id": self.id,
            "temperature": self.temperature,
            "weather_code": self.weather_code,
            "timestamp": self.timestamp
        }

@app.route('/api/saved-weather-data', methods=('GET', 'POST'))
def saved_weather_data():
    if request.method == 'GET':
        query_result = Weather.query.limit(5).all()
        last_five_reports = [report.to_dict() for report in query_result]
        return last_five_reports
    if request.method == 'POST':
        req_data = request.get_json()

        timestamp = datetime.strptime(req_data['timestamp'], '%Y-%m-%dT%H:%M')

        temperature = req_data['temperature']
        weather_code = req_data['weather_code']
        weather_data = Weather(temperature=temperature, weather_code=weather_code, timestamp=timestamp)

        db.session.add(weather_data)
        db.session.commit()

        return {"Success": "Data Saved!"}

if __name__ == '__main__':
    app.run(port=5555)