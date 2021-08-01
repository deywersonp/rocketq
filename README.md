<h1 align="center">
  <img alt="Rocket.Q" title="Rocket.Q" src="https://github.com/deywersonp/rocketq/blob/main/public/readme/rocketq.png" width="220px" />
</h1>

<p align="center">
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-services-used">Services Used</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=49AA26&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

<p align="center">
  <img alt="Rocket.Q" src="https://github.com/deywersonp/rocketq/blob/main/public/readme/rocketq_project.png" width="100%">
</p>

## 💻 Project

Rocket.Q is an application of interaction through questions, it is possible to create a room for anonymous Internet users to ask questions and the creator of the room, with a password, to manage these questions and mark them as read.

This application is hosted on Heroku, [click here to see it](http://rocketq-heroku.herokuapp.com/).
<br><br>

## 🚀 Technologies

This project was developed using these techs:

- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [NodeJS](https://nodejs.org/en/about/)
- [Express](https://expressjs.com/pt-br/)
- [EJS](https://ejs.co/#docs)
- [SQLite](https://www.sqlite.org/index.html)

<br>

## 👨‍🔧 Services Used
- GitHub
- [Heroku](https://www.heroku.com/about)

<br>

## 🎮 Getting Started

If you want run this code, you can start cloning the repository using HTTP or SSH key.

- Open your git
- Type `git clone`
- Insert the HTTP or SSH key (on windows, shift + insert to paste on gitBash)
- You can find this HTTP or SSH Key by clicking on `Code` on the top right in this repository
![image](https://user-images.githubusercontent.com/79553681/127573968-7933d7fe-6393-4a47-b00e-105e205e825e.png)

- Once cloned you can open the project in your IDE and enter the codes below in the IDE terminal

`yarn` To add the dependencies on the project. <br>

`yarn init-db` Before starting the app, we use this to Create the database. <br>

`yarn start` Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<br><br>

**Dependencies**
- Ejs
- Express
- SQLite
- SQLite3

**Dev Dependencies**
- Nodemon

<br>

## 📌 How to Use
### 1 - When you access the project, you will see this initial page. In this page you can:
#### 1.1 - access a pre-existing room;
#### 1.2 - create a new room.
![Homepage image](https://github.com/deywersonp/rocketq/blob/main/public/readme/home.png)
![Homepage_roomId_inserted_image](https://github.com/deywersonp/rocketq/blob/main/public/readme/acces_room.png)

### 2 - When entered a non-existent room ID, the app will show you a pop-up informing the error. 
![Homepage_error_image](https://github.com/deywersonp/rocketq/blob/main/public/readme/home_2.png)

### 3 - By clicking on Create a Room, you will be redirected to a create-room page
#### 3.1 - There you can enter a new password. This password will be required to delete or mark a question as read.
![Create_room_image](https://github.com/deywersonp/rocketq/blob/main/public/readme/create_room.png)

### 4 - Once in a room, you can copy the room ID and send this for your friends, so they can submit questions.
> In this example we used a room with questions, but once created the room will be empty :D

![Copying_roomId_image](https://github.com/deywersonp/rocketq/blob/main/public/readme/copy_room_number.png)

### 5 - When clicking on "mark as read" or "delete" a modal will be displayed asking for the password and confirmation of the action. Questions marked as read are grayed out.
![Action_mark_as_read_image](https://github.com/deywersonp/rocketq/blob/main/public/readme/confirm.png)
![Action_delete_image](https://github.com/deywersonp/rocketq/blob/main/public/readme/delete.png)
#### 5.1 - Question marked as read
![Question_marked_as_read_image](https://github.com/deywersonp/rocketq/blob/main/public/readme/questionMarkedAsRead.png)

### 6 - If the password is wrong, a popup will appear and the action will be cancelled.
![Action_canceled_image](https://github.com/deywersonp/rocketq/blob/main/public/readme/delete_1.png)

### 7 - You can also change themes, by clicking on the ball inside the slider (top-right). Available themes are "light mode" (default) and "dark mode".
![Switch_theme_image](https://github.com/deywersonp/rocketq/blob/main/public/readme/switch_to_dark_mode.png)

### 8 - This app is totally responsive!
> App on mobile

![App_opened_on_mobile](https://github.com/deywersonp/rocketq/blob/main/public/readme/home_on_mobile.png)

<br>

## 🕵 Features

The main features of the application are:
 - Create a room
 - Access an existing room
 - Send questions
 - Delete questions
 - Mark questions as read
 - Dark mode
 - Responsive
 
<br>

## 🔖 Layout

You can see the layout of this project through [this link](https://www.figma.com/file/vp3iFfd1ohCbHyDX9jCiQi/Roquet.q). It's necessary have an account on [Figma](https://figma.com) to access.

<br>

## :memo: License

This project is under MIT license.

<br>

 > In case of sensitive bugs like security vulnerabilities, please contact
 > <a href = "mailto:deywerson.pereira@gmail.com">deywerson.pereira@gmail.com</a> directly instead of using issue tracker. We value your effort
 > to improve the security and privacy of this project!
 <br>
 
---
  

      
Please follow on github and join us! Thanks for visiting me and good coding!

Made with ♥ by <a href="https://github.com/deywersonp">Deywerson Pereira</a>
