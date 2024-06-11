# Weather Grabber

## Purpose

To provide an interface for viewing regularly updated weather readings, and compare these readings to recently saved weather data as well as data from the preceding five days.

## Features

* View most recently fetched weather data from Open-Meteo API (https://open-meteo.com/). Weather data includes temperature, timestamp, and weather code (conditions)
* Weather data automatically updates every 60 seconds, but be aware that Open-Meteo only provides new readings every 15 minutes
* Live updates can be toggled on or off using the labeled button
* Current weather data can be persisted to a database using the "Save Snapshot" button
* The high temperatures of the previous five days (including the current day) are displayed in a bar chart in the "Temps of the Last Five Days" component
* The five most recently saved "weather snapshots" can be retrieved from the database by clicking the "Retrieve Saved Reports" button in the Saved Weather Reports component. Clicking this will populate the component with individual cards for each weather snapshot

## Usage

Weather Grabber is not a live, deployed application. To use the app, the following steps are suggested:

1) Clone the repo to your machine
2) Open two terminals. In the first terminal, navigate to the `client` directory, run `npm install` and run `npm start` to run the front end of the application on localhost, port 3000.
3) In the second terminal, navigate to the `server` directory, install all dependencies and run `python app.py` within a Python shell, such as pipenv. This will run the server on port 5555. You may need to first initialize/migrate the database; I did this in the Flask shell using `db.create_all()`. A walkthrough of this process can be found here: https://www.digitalocean.com/community/tutorials/how-to-use-flask-sqlalchemy-to-interact-with-databases-in-a-flask-application
4) With both the front and back ends up and running, enjoy the app!

## Development, Trade-Offs and Ideas for Future Development

Weather Grabber was developed using a React front-end, along with Python/Flask/SQLAlchemy back end. SQLite was used as a database for local development purposes.

Some trade-offs or considerations include:
* Styling through CSS modules. Modules often result in a great deal of repeated CSS code, and libraries like Sass may provide cleaner processes for establishing responsiveness variables. However, using modules for a small project allows for clear, easy association between components and a specific style file.
* Other databases, like Postgres, are common for deployed applications. The decision to use SQLite was made as Weather Grabber is only intended be a local development showcase, and will not likely be deployed or put in front of a large, live userbase.
* Some fetch requests (API calls, db retrievals) would do well to have more try/catch blocks in place to bolster the sturdiness of the app.
* More information could be provided to the user (loading wheels, countdown timers to next update, etc).
* Bar Graph could be built using a stronger external library, rather than the simple (and brittle) version here.
* Further ideas and feedback submissions are welcome: scottschwab86@gmail.com

Weather codes provided by stellasphere
https://gist.github.com/stellasphere/9490c195ed2b53c707087c8c2db4ec0c


Developed by Scott Schwab, 2024
