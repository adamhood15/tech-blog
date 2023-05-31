# Tech-Blog
  ![license](https://img.shields.io/static/v1?label=License&message=MIT&color=$blue)
  ## Description
  This tech-blog application is a full stack web application that allows users to create blog posts, share them to the homepage, comment on other posts, and create a user account. The purpose of creating this application was to demonstrate my ability to put together a fully functional full stack web application. It was incredibly challenging as this was my first full stack application with this much functionality but I am very proud of the work that I did. 

  <font size='2'>

  ## Table of Contents
  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Questions](#questions)

  * [Credits](#credits)

  </font>

  ## Installation
  Clone the repository onto your local machine. Open the file in your preferred code editor. First, open an integrated terminal in the server.js file and type npm i to install all dependencies. Once finished, rename the .envExample file to .env for your mysql login. Next, open the .env file and type in your username and password for MySQL inside the '' where it says DB_USER and DB_PW. Also add a secret key to the DB_SECRET row. Once that is completed go back to your integrated terminal. Login into MySQL in the terminal and type in create database tech_blog_db; Once completed, quit MySQL. In the terminal type in node seeds/index.js to seed the data that is in the application. 
    
  ## Usage
  Once you have followed all of the installation instructions you can start the server by typing node server.js in the integrated terminal. Once you have started the server you can open a web browser and type in http://localhost:3001/ which will take you to the homepage of the application.

  Below is a screenshot of the API running in Insomnia.

  ![screenshot of application](./assets/screenshot.png)
  
  
  ## License
  Notice: This application is covered under the ![license](https://img.shields.io/static/v1?label=License&message=MIT&color=$blue) license.

  ## Contributing
  At this time there are no plans to include contributions to this project. 
  
  ## Questions
  Please reach out to me below if you have any questions.

  
  GitHub: [adamhood15](https://github.com/adamhood15)

  Email: adamhood15@gmail.com
  
  ## Credits
  I am the sole collaborator on this project. Rice University provided the starter code. 

