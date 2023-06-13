# Habit Tracker App

## Deployed At

Live on : https://habittracker-nodejs.onrender.com/

### Description

- In this Habit Tracker , You have to login as a default user. Then to create.
- habits enter habit and then click ADD button.
- After Creating Habit you can switch between daily and weekly mode.
- Daily mode has Daily habit data with count of task done status in a week
- Weekly has current Day status with previous 6 days data.
- You can mark Status COMPLETED, NONE , PENDING to any of these 7 days.

### Tech Stack

Used NodeJs , Used Mongodb, EJS , HTML ,CSS, JavaScript Technologies.

## Screenshots

![App Screenshot](/habit1.jpg?raw=true "Optional Title")

![App Screenshot](/habit2.jpg?raw=true "Optional Title")

![App Screenshot](/habit3.jpg?raw=true "Optional Title")

![App Screenshot](/habit4.jpg?raw=true "Optional Title")

### Directory Structure

|-- HABITTRACKER
|-- .env
|-- .gitignore
|-- directoryList.md
|-- habit1.jpg
|-- habit2.jpg
|-- habit3.jpg
|-- habit4.jpg
|-- index.js
|-- package-lock.json
|-- package.json
|-- README.md
|-- assets
| |-- css
| | |-- home.css
| | |-- login.css
| |-- javascript
| |-- habit.js
|-- config
| |-- mongoose.js
|-- controllers
| |-- homeController.js
|-- models
| |-- habit.js
| |-- user.js
|-- routes
| |-- index.js
|-- views
|-- home.ejs
|-- login.ejs
|-- \_addHabit.ejs

### Features

Add multiple habits to track like reading a book, going to the gym etc
Track each habit everyday. These are the 3 statuses of a habit:
Done - Mark the habit as done for a day
Not done - Mark the habit as not done for a day
None - User did not take any action on a habit for a day.
A view to show all current habits. Here give an add button where you can add a new habit to track.

A view to display 7 days of each habit
Show today where user can mark todays habit
And show the previous 6 days and the status of that habit for each day
A user can toggle between the three (above mentioned) statuses of a habit i.e. I can change today’s status as done, not done or none anytime.
Also I should be able to change any of the previous days status i.e. I can change the status of a habit for yesterday, day before yesterday or any previous 6 days as well.

You can create one default user and attach habits to that user (not a necessity, but a plus point). No need for authentication.
Store the data in a DB.
[BONUS FEATURE (Not mandatory for the test)]: You can keep track of the longest streak and the number of days the user completed that habit since the user created the habit (like in the detail view above the user did 38 workouts from 82 days).
