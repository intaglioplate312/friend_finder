# friend_finder
* deployed at https://aqueous-plateau-43031.herokuapp.com

Using Node.js and Express to run the web server, that serves up a basic matching application.  The application requests a user take a survey to help match them with other friends on the site.

Click on the Take Survey button, to navigate to the survey.
![Alt Text](app/public/images/ffsurvey.png?raw=true "Friend Finder Survey")

Fill out the survey and based on the scores for the questions, the application will take the difference of the scores based on the matches and will total the score.  If the total scores match then a modal will open to show the Best Match.

If the person submits the survery with any missing inputs, a modal will display to show a message:  Please fill out all fields before submitting!
![Alt Text](app/public/images/emptydatamodal.png?raw=true "Best Match Modal")

## Technologies used
The following technologies, tools, and npm packages were used:
* Javascript/Jquery
* Node.js
* NPM Packages
	* express
	* body-parser  
	* path