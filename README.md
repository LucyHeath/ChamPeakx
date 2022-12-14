# ChamPeakx - GA Project Four- 7 days
![Champeakx](https://user-images.githubusercontent.com/114397080/210755933-d9158c41-ece4-4e9d-85b0-6ebda74dec5b.png)

## Description
Champeakx is a website which provides information about the best mountaineering in Chamonix. Users can create an account which enables them to post comments, ratings and images of their experiences of the routes listed on the site. This information can be viewed by both registered and non-registered users in the community and serves as a useful respository for route beta for subsequent mountaineering trips. 

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
* All users can select an individual mountaineering route and click through to find out further information about, and view comments left by others. 
* Users must register for an account to be able to leave their own comments, upload four photos and ratings.
* Users can edit and delete their own comments.  

## Technologies Used

### Front-end
* React.js
* JSX
* Axios
* Http-proxy-middleware
* React Router Dom
* Chakra UI
* Chakra-ui/icons
* buffer
* Cloudinary (image uploads and hosting)

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
* Trello Board (planning and timeline), Zoom and Slack
* Excallidraw(wireframing)
* TablePlus

## Planning

### Wireframe

![Wireframe](https://user-images.githubusercontent.com/114397080/210758910-03195319-0d34-477f-998f-ef1b0ecdc90f.png)

 I used [Excalidraw](https://excalidraw.com) to sketch out how the pages of the site would look and flow. I planned how to execute the project on [Trello](https://trello.com), creating a TODO list and dividing work up into sections, with mini targets over the course of the project. 

## Build Process

## Front-end

### App.js

The first part of the frontend that I built was the `BrowserRouter` and the paths.This helped me visualize the layout of the site.

<img width="566" alt="App.js" src="https://user-images.githubusercontent.com/114397080/210875366-3246fbfe-0fd3-4856-881f-467a25e228eb.png">

### Navbar

I built the Navbar (`NavBar.js`) to be responsive, with a burger toggle on mobile screens. The menu options change depending on whether a user is authenticated or not. 

Desktop, logged out.
![Desktop Navbar](https://user-images.githubusercontent.com/114397080/210762326-e6d8ec0f-3dc4-4f60-895f-817c6ee736d7.png)

Mobile, logged in.

![Mobile Navbar](https://user-images.githubusercontent.com/114397080/210762608-4301c1cd-59e3-4cfe-b0e6-6954f1f1c024.png)

### Home page
The home page is made of two sections.
* Hero with filter and search bar (`FilterSearch.js` component)
* Mountaineering route index

 The filter allows the user to find routes of a particular difficulty level.
 
![Filter](https://user-images.githubusercontent.com/114397080/210779903-1c96275a-778d-44f0-8ced-808204bab004.png)

The search function allows the user to search for matches from the peak or route names.

![Search](https://user-images.githubusercontent.com/114397080/210780274-4851e696-4a8d-47c7-9759-16fdc777dc85.png)

![Filter search code snippet](https://user-images.githubusercontent.com/114397080/210779509-211f18ff-5ca1-4980-8943-6ee44e4d9bf1.png)

The mountaineering index is built using a customized Chakra UI card component.

### Single mountaineering route detail page
Clicking through the index page brings displays `MountaineeringRouteSinglePage.js` . Here they can review the route beta, including an image of the route, the peak and route names, which are highlighted with (React and Chakra UI) icons and tooltips (Chakra UI) on hover. Below the image sits the description and infographic display. 

![Single route page detail](https://user-images.githubusercontent.com/114397080/210782712-bb7b6935-1690-4aa9-8580-295268114a6f.png)

The infographic display has an accordian (`ClimbingGradesAccordian.js` component), brought in from Chakra UI,  which can be toggled to display more info about the climbing grades. The infographics themselves again utlize tooltips to provide greater detail. 

![Climbing gardes accordian and IFG display](https://user-images.githubusercontent.com/114397080/210783470-c961a10f-3126-48d4-8715-3c1a7cbe9b95.png)

#### Comment display

The `CommentDrawer.js`component is injected into the `MountaineeringRouteSinglePage.js` to display the user comments. The "Edit Review" and "Delete Review" buttons only appear in the display if the user is authenticated and is the owner of the comment. The image display and star rating display are separate components(`ImageDisplay.js`, `StarRating.js`).

![Comment display](https://user-images.githubusercontent.com/114397080/210792969-230fc5c4-14d1-4494-be94-7af62f284458.png)

#### Adding and editing comments

Rather than navigating away from this page to add (AddCommentDrawer.js component ) and edit comments (EditCommentDrawer.js component ), I chose to implement a Chakra UI draws, which open when the "Add Review" or "Edit Review" buttons are clicked. This fitted neatly with the clean and simple design of the project. When a user is not logged in the "Add Review" drawer displays a call to action, which prompts registration or login to access further functionality of the site. I felt this was better than hiding the button function from non-authenticated users and encouraging user registration.

![Add review drawer if not authenticated](https://user-images.githubusercontent.com/114397080/210788252-0136cb82-0b9f-4ea9-97b1-b7b3dd682489.png)

When authenticated, the user may add their comment using the form in the drawer. The image upload uses [Cloudinary](https://cloudinary.com/).

![Add review drawer if authenticated](https://user-images.githubusercontent.com/114397080/210790123-30732540-6bcb-4809-9077-af98004ace4e.png)

Error handling is built in to both add and edit routes.

![Add error handling](https://user-images.githubusercontent.com/114397080/210883695-2b68629a-9950-41f5-8dc3-c20b0d07589d.png)

#### Deleting comments

When the user clicks the "Delete Review" button, they are not able to carry out this final action without further confirmation, preventing accidental deletion. 

![Delete review](https://user-images.githubusercontent.com/114397080/210880457-5af6dbcc-8ebc-4dbc-9a0d-33f73cf2b045.png)

### User registration and login

When choosing to register as a user on the site, users navigate to a simple form either by clicking the "Sign Up" button in the Navbar or in the  "Add Review" drawer. Users are guided to "Sign In" instead if they already have an existing account. 

<img width="1428" alt="" src="https://user-images.githubusercontent.com/114397080/210881880-80c05206-fd5b-4cf3-b43a-57683bac9501.png">

<img width="466" alt="" src="https://user-images.githubusercontent.com/114397080/210881668-b1d6c221-4bfc-4f6f-ae72-69ddd83c2e6a.png">

Error handling is present and tailored to each input field.

![Error handling](https://user-images.githubusercontent.com/114397080/210885586-f3b16b95-554d-418d-915d-de1c854c110b.png)

![Error handling](https://user-images.githubusercontent.com/114397080/210885205-3e68e5f4-f8e3-4dd2-aa08-6062eb9f794a.png)

The user login page has a similar form. Error handling is present but due to security reasons, does not highlight which credentials are incorrect.
![Login error handling](https://user-images.githubusercontent.com/114397080/210884532-5d9d3218-2cda-4c90-8f22-617a765c21ff.png)

On log in, a toast pop-up (Chakra UI) to welcomes that user.

![Toast pop-up](https://user-images.githubusercontent.com/114397080/210886971-970f35c1-0a39-4917-9bd0-1d320e387da8.png)

### Not found and loading
A nice graphic displays if the page is not found, and I used a spinner to show pages loading for both the index and single route pages. 

![Not found](https://user-images.githubusercontent.com/114397080/210895269-fa3edfa9-df27-407b-9ec2-0d37adf1fa26.png)

## Back-end
This was my first experience of creating a back-end using Python. I used Django and Django REST Framework to create a PostgreSQL database with RESTful features. 

### Database Relationships
I used [Quick Database Diagrams](https://app.quickdatabasediagrams.com) to visualize the relationships between the models: Mountaineering Routes; Route Difficulty; Comments; Users/Authorisation

![Quick Database Diagram](https://user-images.githubusercontent.com/114397080/210760666-3445aede-a027-4b88-9dbe-d34563728b41.png)

Creating the PostgreSQL database was a fairly fast process. I used [Insomnia](https://insomnia.rest) to test the endpoints and check the JSON response and [TablePlus](https://tableplus.com) to view the database relationships. 

### Document models

#### Mountaineering route model
This was the largest model containing a range of input types: `CharField`; `PositiveIntegerField`; `DateTimeField`; `TextField` ; `ManyToManyField`. I had wanted to make the image field and `ArrayField` to allow multiple images for each route (and display these in a carousel) but time limited my opportunity to learn about using arrays with [Cloudinary](https://cloudinary.com/), therefore I used `CharField`for a single image as this was my MVP. Furthermore I had wanted to add an average rating field  related to the rating in the user comment model, but again time was insufficient for this.

![Mountaineering route model](https://user-images.githubusercontent.com/114397080/210889334-3370a8da-8f55-4e1f-adef-f93bb9d26f31.png)

#### Comment model
As with the images in the `mountaineering_route` model,  using an `ArrayField` instead of multiple `Charfield`s for the images would have been preferable.

![Comment model](https://user-images.githubusercontent.com/114397080/210888580-3e11f716-6ee2-4ff5-a7fb-f6510490d97d.png)

#### Difficulty model
This was a simple model and was useful for the difficulty filtering function on the front end. 

![Difficulty model](https://user-images.githubusercontent.com/114397080/210889685-841b1243-ef89-4d14-8f3f-7bb32c26eed7.png)

#### User model
The user model was relatively easy to set up as I utilized the inbuilt `AbstractUser` model, which already includes `password` and `password_confirmation`. I did add `bio` and `profile_image` fields but removed these as I did not end up creating a profile page on the frontend.  

![User model](https://user-images.githubusercontent.com/114397080/210889990-31eafa80-ff24-4036-8ae3-d80e307dcd11.png)

### Views and endpoints

#### Mountaineering routes
* **GET** /api/mountaineering_routes/
* **GET** /api/mountaineering_routes/:pk/
* **POST**,  **PUT**  and **DELETE** also created but not used

![GET single route](https://user-images.githubusercontent.com/114397080/210999455-a931fa46-7acb-4d7c-a8c2-d75d7be570e0.png)

#####  Mountaineering_RouteListView class 

![Mountaineering_RouteListView class](https://user-images.githubusercontent.com/114397080/211001086-59f43698-51ce-406e-91b1-65ec808196dd.png)

##### Mountaineering_RouteDetailView class 
The bespoke `get_mountaineering_route` function was reused in all of the `Mountaineering_RouteDetailViews`.

![Mountaineering_RouteDetailView class](https://user-images.githubusercontent.com/114397080/211001587-37f0b6db-cd22-4f35-8a9d-f5ae44fa2095.png)

#### Comments

* **POST** /api/comments/ (secure)
* **PUT** /api/comments/:pk/ (secure)
* **DELETE** /api/comments/:pk/ (secure)
* **GET** /api/comments/ created but not used on front end due to lack of time

![PUT route](https://user-images.githubusercontent.com/114397080/210998439-8d75ece4-404f-48b5-a071-e996bd15dc75.png)

##### CommentListView class 

![CommentListView class](https://user-images.githubusercontent.com/114397080/210888233-4a471681-38bf-4a1f-bd09-d1571240311c.png)

##### CommentDetailView class 

![CommentDetailView class](https://user-images.githubusercontent.com/114397080/210888363-5cc55c7c-b1bb-496d-ad94-369b4ddddd34.png)

#### Difficulty

* **GET** /api/difficulty/
* **GET** /api/difficulty/:pk/
For the difficulty level filter on the homepage

<img width="255" alt="All difficulties" src="https://user-images.githubusercontent.com/114397080/210995935-72176ab8-c856-493c-b90c-5ab3047c8186.png">

##### DifficultyListView class

![DifficultyListView class](https://user-images.githubusercontent.com/114397080/211007371-da0880ef-c3cc-4dad-baa8-45cb42f69e29.png)

##### SingleDifficultyListView

![SingleDifficultyListView](https://user-images.githubusercontent.com/114397080/211008305-0bf0bbeb-2240-4c50-99bf-e684e14bfccb.png)

#### User/Auth

* **POST**/api/auth/login/
* **POST**/api/auth/register/

##### RegisterView class
![RegisterView class](https://user-images.githubusercontent.com/114397080/211006882-b15f8c66-29aa-421d-8bb2-716a4fa4932d.png)

##### LoginView class
![LoginView class](https://user-images.githubusercontent.com/114397080/211007068-cd99fb56-9a83-40e3-a644-61473fe599df.png)

## Challenges
* Building the app with all the features I wanted to include within the timeframe was really challenging. My aim was to try and execute the basics well. 

## Wins
* I was able to make a full stack app after less than a week of familiarity with Python, Django and PostgreSQL.
* The app looks good with a clean design and simple user story.
* I got to practice using React.js and making API calls.
* I really enjoyed using Chakra UI- it was relatively quick to build up the front end and had some great components which I was able to implement without too much trouble. 

## Key Learnings
* I'm much more familiar with making reusable components if they appear in the code more than once. 

## Known Bugs or Errors

* When adding images to the comments there is a problem with the upload, whereby only the first selected image uploads.  This is not a problem when updating the images on the comments, and users can upload four individual images of their choice.
* When editing the images, unless you upload all four images the comment will not display.

## Future Improvements

* Improve the image upload, enable multiple images (? `ArrayField` on backend) and ensure users can add the number of images they want to in the add and delete routes. 
* Develop the front-end CRUD functionality for an admin to add/update mountaineering routes themselves. The back end is in situ for this. 
* Add in a favorites system
* Develop a user profile page, which includes an ability to add a profile picture, bio, experience  and which displays their comments, and favorites all in one place. 
* Whilst the app is fairly responsive this could be further optimized, especially for mobile. 
* Build in the average rating to the back end, and display this on the mountaineering route single page, not just on the individual comment. 
* Change the comment rating to a hover stars effect for a better UX
