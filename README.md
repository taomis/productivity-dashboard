# Productivity Dashboard
FastAPI web app.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![](https://github.com/twangles/productivity-dashboard/blob/main/extra/screenshot-edit.png?raw=true)

## Description
The user interface of the website is made with HTML, CSS, and the Bootstrap 5 framework.
### #1 - Sidebar
Can be expanded to accomodate extra hyperlinks for different widget pages in an organized manner.
### #2 - Clock Widgets
The clock widgets are implementations of the clocks on [timeanddate.com](https://www.timeanddate.com/). The clock on the 
left is synced to the Pacific Time Zone while the one on the right is synced to the Eastern Time Zone.
### #3 - Pomodoro Timer
JavaScript implementation of a method for time management invented by Francesco Cirillo, where work sessions are broken up into 
25-minute intervals with 5-minute breaks in between.
### #4 - (Inspirational) Quote Generator
A widget that displays a new inspiring quote each time the button is clicked to help boost motivation and productivity. 
Quotes are pulled from [forismatic.com](https://www.forismatic.com/en/) through their API.
### #5 - To-do List
A dynamic to-do list that can keep track of whatever the user inputs. All inputted tasks are saved in the database until 
deleted by the user. The backend of this widget is managed by 
FastAPI and SQLite (through SQLAlchemy).

## Future Improvements
- Migrate the database over to MongoDB
- Implement the FARM stack (FastAPI, React.js, MongoDB)

## Image Credits
"Eo circle red number-1.svg", "Eo circle red number-2.svg", "Eo circle red number-3.svg", "Eo circle red number-4.svg", 
"Eo circle red number-5.svg" by [IagoQnsi](https://commons.wikimedia.org/wiki/User:IagoQnsi) 
is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.en)
