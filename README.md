# ChamPeakx - GA Project Four
![Champeakx](https://user-images.githubusercontent.com/114397080/210755933-d9158c41-ece4-4e9d-85b0-6ebda74dec5b.png)

## Description
Champeakx is a website which provides information about the best mountaineering in Chamonix.Users can create an account which enables them to post comments, ratings and images of their experiences of the routes listed on the site. This information can be viewed by both registered and non-registered users in the community and serves as a useful respository for route beta for subsequent mountaineering trips. 

## Deployment Link
The project was deployed using Heroku and is available [here](http://bit.ly/Champeakx).

## Timeframe
This was the final project built solo over 7 days for the General Assembly Engineering Immersive Course. 

## Brief
* **Build a full-stack application** by making your own backend and your own front-end.
* **Use a Python Django API** using Django REST Framework to serve your data from a Postgres database.
* **Consume your API with a separate front-end** built with React.
* **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models.
* **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut.
* **Have a visually impressive design** to kick your portfolio up a notch and have something to wow future clients & employers. 
* **Be deployed online** so it's publicly accessible.

## Features
* All users can browse the mountaineering routes index and refine choices with the difficulty filter, or search by route or peak name if they know what they are looking for.
* All users can select an individual mountaineering route and click through to find out further information about it , as well as viewing comments and images left by others who have already done the route. 
* Users can register for an account, and then log in to leave ther own comment and experiences, as well as upload up to four photos for each comment, along with a rating of their experience.
* Users can edit their own comment (text, images or rating).
* Users can delete their own comment. 

## Technologies Used

### Frontend
* React.js
* JSX
* Axios
* Http-proxy-middleware
* React Router Dom
* Chakra UI
* Chakra-ui/icons
* buffer

### Backend
* Python
* Django
* Django REST Framework
* Psycopg2-binary
* pyjwt
* autopep8
* pylint

### Development tools
* VS code
* NPM 
* NVM
* Insomnia
* Git
* Github
* Google Chrome dev tools
* Heroku (deployment)
* Trello Board (planning and timeline)
* Excallidraw(wireframing)
* Zoom
* Slack
* TablePlus

## Planning

### Wireframe

![Wireframe](https://user-images.githubusercontent.com/114397080/210758910-03195319-0d34-477f-998f-ef1b0ecdc90f.png)

 I used [Excalidraw](https://excalidraw.com) to sketch out how the pages of the site would look and flow. I planned how to execute the project on [Trello](https://trello.com), creating a TODO list and dividing work up into sections, with mini targets over the course of the project. 

## Build Process

## Front-end

### Navbar

I built the Navbar to be responsive, with a burger toggle on mobile screens.The menu options change depending on whether a user is authenticated or not. 

Desktop, logged out
![Desktop Navbar](https://user-images.githubusercontent.com/114397080/210762326-e6d8ec0f-3dc4-4f60-895f-817c6ee736d7.png)

Mobile, logged in

![Mobile Navbar](https://user-images.githubusercontent.com/114397080/210762608-4301c1cd-59e3-4cfe-b0e6-6954f1f1c024.png)

### Home page
The home page is made of two sections.
* Hero with filter and search bar
* Mountaineering route index

 The filter allows the user to find routes of a particular difficulty level.
 
![Filter](https://user-images.githubusercontent.com/114397080/210779903-1c96275a-778d-44f0-8ced-808204bab004.png)

The search function allows the user to search for matches from the peak or route names.

![Search](https://user-images.githubusercontent.com/114397080/210780274-4851e696-4a8d-47c7-9759-16fdc777dc85.png)

![Filter search code snippet](https://user-images.githubusercontent.com/114397080/210779509-211f18ff-5ca1-4980-8943-6ee44e4d9bf1.png)

The mountaineering index is built using a customised Chakra UI card component.

### Mountaineering route detail page
Clicking on the route from the index page brings the user to the single route detail page. Here they can review the route beta, including an image of the route, the peak and route names, which are highlighted with (React and Chakra UI) icons, and the use of tooltips (Chakra UI) on hover. Below the picture sits the description and infographic display. 

![Screenshot 2023-01-05 at 12 42 07](https://user-images.githubusercontent.com/114397080/210782712-bb7b6935-1690-4aa9-8580-295268114a6f.png)

The infographic display has an accordian (Chakra UI) which can be toggled to diplay more info about the climbing grades, and the infographics themselves, again have tooltips to provide further detail. 

![Screenshot 2023-01-05 at 12 46 41](https://user-images.githubusercontent.com/114397080/210783470-c961a10f-3126-48d4-8715-3c1a7cbe9b95.png)

#### Comment display

The comment display is a component injected into the single route page. 
The comment  are displayed on the mountineering route detail page, under the route information. The edit and delete buttons only appear in the display if the user is authenticated and is the owner. 

![Screenshot 2023-01-05 at 13 38 32](https://user-images.githubusercontent.com/114397080/210792969-230fc5c4-14d1-4494-be94-7af62f284458.png)

#### Add and edit comments

Rather than navigating away from this page to add or edit comments, I chose to implement a Chakra UI draw. This fitted neatly with the clean and simple design of the project. When a user is not logged in the drawer displays a call to action, which prompts registration or login to access further functionality of the site. I felt this was better than hiding the "add comment " function from non-authenticated users. 

![Screenshot 2023-01-05 at 13 13 40](https://user-images.githubusercontent.com/114397080/210788252-0136cb82-0b9f-4ea9-97b1-b7b3dd682489.png)

When authenticated, the user may add their comment. 

![Screenshot 2023-01-05 at 13 24 07](https://user-images.githubusercontent.com/114397080/210790123-30732540-6bcb-4809-9077-af98004ace4e.png)

#### Delete comment

### Register

### Login

Use of toast on login (Chakra UI)

![Screenshot 2023-01-05 at 13 22 20](https://user-images.githubusercontent.com/114397080/210789792-62108f4d-e549-4bc1-b0cf-843f7cce83e6.png)

## Back-end
This was my first experience of creating a back-end using Python. I used Django and Django REST Framework to create a PostgreSQL database with RESTful features. 

### Database Relationships
I used [Quick Database Diagrams](https://app.quickdatabasediagrams.com) to visualise the relationships between the models: Mountaineering Routes; Route Difficulty; Comments; Users/Authorisation

![Quick Database Diagram](https://user-images.githubusercontent.com/114397080/210760666-3445aede-a027-4b88-9dbe-d34563728b41.png)

It was an efficient process to create the PostgreSQL database. I was able to test all the views using Insomnia to making sure all relationships between models were correct and receving the correct JSON responses. 


## Challenges
Building the app with all the features I wanted to include within the timeframe was challenging. 

## Wins
*

## Key Learnings
* I have learnt to break components down and i'm much more aware of making components that could be reused if they appear in the code more than once. 

## Known Bugs or Errors

* When adding images to the comments there is a problem with the upload, whereby only the first selected image uploads. This is not a problem when updating the images on the comments, and user is able to upload four individual images of their choice.

## Future Improvements

* Develop the front-end CRUD functionality for an admin to add/update mountaineering routes themselves. The back end is in situ for this. 
* Add in a favorites sytem
* Develop a user profile page, which includes an ability to add a profile picture, bio, experience  and which displays their comments, and favourites all in one place. 
* Refactor the image upload function, so images upload as an array on the backend.
* Whilst the app is fairly responsive this could be further optimised, especially for mobile. 
* Build in the average rating to the back end, and display this on the mountaineering route single page, not just on the individual comment. 
* Change the comment rating to a hover stars effect for a better UX

