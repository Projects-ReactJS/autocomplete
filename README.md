# Testing the Autocomplete Application
## 1) Prerequisites
Before running the application ensure whether the latest versions of npm, Yarn and Maven installed

Ensure the ports 3000 and 4001 are available and free in local system

## 2) Clone the application
Clone the front end and backend application from the following git hub repositories, ensure you clone them into different folders

https://github.com/Projects-ReactJS/autocomplete-frontend.git  -- Frontend 

https://github.com/SpringBootprojects-Balaji/Autocomplete-backend.git  -- Backend

## 3) Run the Spring boot backend application

Open the command prompt

Navigate to the autocomple-backend folder using cd autocomplete-backend and run ***mvn package**.

once the build is complete, navigate to cd target and run  ***java -jar pageSearch-0.0.1-SNAPSHOT.jar*** or run the jar file generated.

This will run the backend server. 


## 4) Run the react frontend application

Navigate to the autocomplete-frontend folder using cd autocomplete-frontend and run ***yarn install**.

wait for the files to be downloaded.

Once the files are downloaded execute the command npm run start

The application is opened in a browser(chrome). If the browser does not open, manually open the browser(chrome) and type http://localhost:3000.


## 5) Testing the Frontend application

In the autocomplete field type for you will get the list of suggestions. You will be able to choose one of them









