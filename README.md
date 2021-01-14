# CodersCamp 2020 - JavaScript Project

**The project was created as part of the 6th edition of the [CodersCamp](https://coderscamp.pl/) course.**

## Table of Contests
- [The project team](#the-project-team)
- [General info](#general-info)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)

## The project team
Authors of this project are course participants who worked under the supervision of an experienced mentor. <br>
**Mentor:** [Filip Kuca](https://github.com/ruljin) <br>
**Participants:**
- [Dominik Puchała](https://github.com/Suegro24) (Product Owner)
-	[Jędrzej Ratajczak](https://github.com/Mrozelek) (Tech Lead)
-	[Adrianna Krupa](https://github.com/adax10/) (Development Manager)
-	[Weronika Brzeczkowska-Kuzianik](https://github.com/brzeczkowskaw)
-	[Kamila Grusza](https://github.com/kami3la)
-	[Konrad Mierzejewski](https://github.com/KonradMierzejewski)

## General info
Our project is a quiz that tests the knowledge of the Star Wars universe. This is a browser based web application, so no installation is required. 

## Features
-	The main page contains the rules of the game and shows a sample photo and answers to a question relevant to People category.
-	Before each game, you are taken to the settings, where you choose the category (next to it is an example photo), speed and mode of your game. Additionally, if you chose to fight against the computer, you have to select the difficulty level.
-	Once the game starts, the timer starts counting down, and at the bottom of the screen the lightsaber shows how much time is left. After selecting the answer, it is shown for a second whether the answer was right or wrong. Then the question is changed to the next one and so until the end of time.
-	After finishing the game, the player's score is summed up and if the player writes his name, it will appear in the overall ranking of the players.
-	The application is responsive, so there is an option to display it on tablets and phones.

## Technologies
-	HTML
-	SCSS
-	JavaScript
-	Star Wars API

## Setup
#### Demo
To view a demo click here.
#### Getting started
If you want to run the application on the local machine, follow these steps:
1. Install dependencies with the command: `npm install`
2. Start development server `npm start`
The application will be available at `localhost:8080/index.html`.
#### Running tests
To run the application tests, follow these steps:
1. Install dependencies with the command: `npm install` (if you haven't already done so before)
2. Run the tests by running the command: `npm test`
