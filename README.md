#Tic-Tac-Toe

*By Conner McAuliffe*

##DEPLOYMENT
https://alphairus.github.io/tic-tac-toe-client/

##Planning Story
When I first created my concept of tic-tac-toe I laid out the wireframe for how
I wanted the application to behave while a game was being played.

###Wireframes
https://imgur.com/QCLY7DU

12/08/20: I wanted a clean/basic UI with bright colors. I added a small animated
video logo that plays when the page is loaded.

12/8/20-12/11/20: Started creating the application allowing the creation of a user
and authentication process allowing the user to sign in, sign-out and change their
password if desired.

12/18/20-12/21/20: Finished up authentication of the user and completed the create
game function making sure that the gameboard does not appear until the user is
ready to start their game.

12/30/20-01/02/21: Completed game functionality. The user starts as the X game
piece and moves first. The game will continue until a winner/tie occurs. Upon game
completion the user is able to start a new game or sign out. The user can also
track the number of games played.

01/03/21: Finished read.me. Polished up CSS by adding more style to gameboard.
Really hope to improve on my css ability. I tend to struggle with creative tasks
and still find myself struggling to conceptualize what I am seeing and what is
being shown.

##User Experience
When the page is loaded the user is presented with two different options: Sign Up or Sign In. The user is unable to initiate a new Tic-Tac-Toe game unless they are signed in first. A users first visit to the site will require them to sign up using their email address and creating a unique password. Once the user has successfully created an account they can now sign in. Once signed in, the player is presented with a few new options. They can create a game, change their password or sign out.

When they create a new game, the user's account will be assigned to the X game piece. The first move in the game will start with player X, and will alternate for each consecutive turn. The game will not allow people to click on spaces that already have moves in them, nor will it allow users to continue making moves after the game is complete and a victor or tie has been achieved.


#### User Stories

Here is a list of user stories to highlight development
requirements:

- Authentication & Game Statistics
    - As a [player], I want to [create an account] so I can play.
- Gameplay
    - As a [player], I want to [play against the person sitting next to me] so I
can [whoop them at tic tac toe].
    - As a [player], I want to [see whose turn is next] so
I can [avoid confusion].
    - As a [player], I want to [clearly see who's won the game] so
I can [celebrate accordingly].

##Technologies Used

1. jQuery
2. HTML/CSS
3. Bootstrap
4. Javascript

Unsolved Problems
1. I would like to make the design/style of the site more appealing.
2. I want to make the animated Gif larger and load/disappear upon loading of the
site. Almost like an intro
3. Improve fading/toggling of modals
