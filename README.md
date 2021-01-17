# CodersCamp 2020 - JavaScript Project

**The project was created as part of the 6th edition of the [CodersCamp](https://coderscamp.pl/) course.**

## Table of Contests
- [The project team](#the-project-team)
- [General info](#general-info)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Organization of work](#organization-of-work)

## The project team
Authors of this project are course participants who worked under the supervision of an experienced mentor.

**Authors:**
- [Dominik Puchała](https://github.com/Suegro24) (Product Owner)
-	[Jędrzej Ratajczak](https://github.com/Mrozelek) (Tech Lead)
-	[Adrianna Krupa](https://github.com/adax10/) (Development Manager)
-	[Weronika Brzeczkowska-Kuzianik](https://github.com/brzeczkowskaw)
-	[Kamila Grusza](https://github.com/kami3la)
-	[Konrad Mierzejewski](https://github.com/KonradMierzejewski)

**Mentor:** [Filip Kuca](https://github.com/ruljin) 

## General info
Our project is a quiz that tests the knowledge of the Star Wars universe. This is a browser based web application, so no installation is required. 

<img src="https://github.com/ruljin/CodersCamp2020.Project.JavaScript.StarWarsQuiz/blob/dev/src/assets/ui/rulesView.png">
<img src="https://github.com/ruljin/CodersCamp2020.Project.JavaScript.StarWarsQuiz/blob/dev/src/assets/ui/gameView.png">

## Features
-	The main page contains the rules of the game and shows a sample photo and answers to a question relevant to People category.
-	Before each game, player is taken to the settings, where he chooses the category (next to it there is an example photo), speed and mode of his game. Additionally, if he chose to fight against the computer, he has to select the difficulty level.
-	Once the game starts, the timer starts counting down, and at the bottom of the screen the lightsaber shows how much time is left. After selecting the answer, it is shown for a second whether the answer was right or wrong. Then the question is changed to the next one and so until the end of time.
-	After finishing the game, the player's score is summed up and if the player writes his name, it will appear in the overall ranking of the players.
-	The application is responsive, so there is an option to display it on tablets and phones.

## Technologies
-	HTML
-	SCSS
-	JavaScript
-	Star Wars API
- Webpack
- BEM methodology
- Jest
- Scrum
- Figma
- Trello

## Setup
#### Demo
To view a demo click [here](https://ruljin.github.io/CodersCamp2020.Project.JavaScript.StarWarsQuiz/).
#### Getting started
If you want to run the application on the local machine, follow these steps:
1. Clone down this repo
2. Install dependencies with the command: `npm install`
3. Start development server `npm start` 

The application will be available at `localhost:8080/index.html`
#### Running tests
To run the application tests, follow these steps:
1. Install dependencies with the command: `npm install` (if you haven't already done so before)
2. Run the tests by running the command: `npm test`

## Organization of work
#### Figma
Using Figma, we created our own prototype of a user interface adapted to Desktop, and also made a version adapted to display on Phones. All designs can be viewed [here](https://www.figma.com/file/vbC47jUATnlH9UKey12pPG/Star-Wars-Quiz?node-id=0%3A1).
#### Trello
We also used Trello, where we organized all our work. More precisely, we shared responsibilities for each sprint, exchanged comments and approved our tasks.
