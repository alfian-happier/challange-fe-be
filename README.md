# Project Name (Challenge-FE-BE)
This repository contains a Full Stack Web Application developed as part of a technical challenge for a company application. Below are the detailed instructions on how to run the backend and frontend of the project on your local machine.

## How to Run the Project

## Step 1: Import the Database

  1. Start XAMPP, and ensure that both Apache and MySQL services are running.
  2. Open your browser and go to phpMyAdmin (usually at http://localhost/phpmyadmin).
  3. In phpMyAdmin, create a new database (or use an existing one).
  4. Import the SQL file from the /be folder into this database. You can do this by selecting the database, navigating to the Import tab, and uploading the .sql file.
      Note: Ensure that the database settings in the backend (e.g., database name, username, and password) match your local MySQL setup. You can check and modify the database connection configuration in the be folder.

## Step 2: Running the Backend

  1. Open File Explorer and navigate to the be folder, which contains the backend code.
  2. Right-click inside the folder and select "Open in Terminal" (or open a terminal and navigate to the be folder manually).
  3. In the terminal, install the necessary dependencies by running: "npm install"
  4. Once the dependencies are installed, start the backend server by running: "node index.js"
     This will launch the backend server, which handles the application's API and communicates with the database.
     Note: Ensure that the backend server is properly connected to the database. If there are any issues, check the configuration in the index.js or config file.

## Step 3: Running the Frontend

  1. After setting up the backend, navigate to the fe folder, which contains the frontend code. You can do this by opening a new terminal window or exiting the be folder and entering the fe folder
  2. In the fe folder, install the frontend dependencies by running: "npm install"
  3. Once the installation is complete, start the frontend development server by running: "npm run dev"
      This will launch the frontend part of the application, typically accessible at http://localhost:3000 (depending on your development server configuration).
     
