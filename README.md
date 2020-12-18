# Play-Store-Analysis

In the Jupyter notebook , the Google Playstore data is analysed with various plots.

Data set : https://www.kaggle.com/lava18/google-play-store-apps
         
The queires analysed are :  
1.Which category has the maximum number of Apps?<br/>
2.How are the ratings of the Apps?<br/>
3.How many Apps have 5.0 rating ?<br/>
4.Which are the most reviewd Apps ?<br/>
5.How many free Apps are there ?<br/>
6.Which is the costliest App?<br/>
7.What kind of Apps have full rating ?<br/>
8.How do the App ratings differ between paid and free Apps in general?


CRUD operations:
Step1: Follow this link (only until Part 3 – Create our DB and read stuff from it,STEP3-create a database):-
https://closebrace.com/tutorials/2017-03-02/the-dead-simple-step-by-step-guide-for-front-end-developers-to-getting-up-and-running-with-nodejs-express-and-mongodb

Step2: Install mongo developer tools and the open cmd in admin mode and go to the  bin directory of this and use the import command to import the google.csv file:
Install: https://www.mongodb.com/developer-tools
import cmd: >mongoimport -d nodetest2 -c playstore --type csv --file googleEg.csv --headerline

Step3: go to nodetest2 directory and start nodemon:
>nodemon ./start.js localhost 8080

Step4: Execute CRUD operation

Req. inputs:
-Select an appropriate background image (I have added 2 more, whichver is good, rename it to Image1)
-Modify the format or content on homepage 
