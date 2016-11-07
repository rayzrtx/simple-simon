# Simple Simon

<h2>Introduction</h2>
<p>This was the first major project for class at Codeup. It incorporated HTML, CSS, JavaScript and JQuery. 
It is basically a re-creation of the 80's electronic memory game Simon and that was the inspiration used when designing the layout.
No sounds were used and more focus was on getting the actual gameplay to work than on visual design as this project wasn't that 
"simple" for me.</p> 
<h2>Game Play</h2>
<p>On page load, a large square (the game board) is centered on the page and there are four squares of equal size within the game board. Each square has a color. For this game the colors used were red, blue, green, and yellow. There is animated text below the game board directing user to click button below the text to start the game. Button is animated with the four colors of the game board squares.</p>
<p>Game play starts once "Start New Game" button is clicked. When button is clicked, the start button becomes hidden and the animated text is replaced with a round counter counting what round the user is in. A square on the game board will light randomly. The player will then have to click the same square to move on. Each round, a new random square will flash at the end of the flashing square sequence from the previous round. If the user gets any part of the sequence incorrect then the game is over. There is no limit to the number of sequences so if the player has an amazing memory then game can theoretically go on infinitely. Once game play is over, page will have to be refreshed to start game play again.</p>
<h2>Background</h2>
<p>This project created challenges for me as I wasn't even sure where to start. There are numerous examples online and I mostly used them as a template of what variables and functions will probably be needed. I did this partly because I didn't really like or understand their code and also because I wanted to learn to do it on my own. For the most part HTML, CSS and JS code was created by me. Bootstrap was used for styling, however. The first thing I did was create the game board. Once I had all four squares up I worked on getting a square to animate. This is where things got tricky. I ran into several issues including logging player clicks and comparing player sequence to game sequence. Once I got through those issues, I then had issues with the lighting sequence as squares in the sequence were lighting up at the same time instead of intermittently. After some tweeking, I was able to get the game play working for the most part. My approach throughout the project was to break the project down into smaller tasks. As challenging and frustrating as this project was for me, I did enjoy working on it and I was glad that I completed the project with a functional product.</p>
<h2>Future additions</h2>
<p>While the game currently has functionality, there are some features I would like to see added in the future:
<ul>
<li>Game reset upon completion</li>
<li>Adding sounds and more styling/animations in general</li>
<li>Having the game board unclickable during game sequence</li>
</ul>
