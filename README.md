# SkillTraders

Please access our project with the link below.
URL: https://skilltraders.herokuapp.com/

For a complete and in-depth documentation on using our <b>back-end</b> API for SkillTraders, please see **<ins>apis.txt</ins>**

SkillTraders allows you to support local community members while maintaining social distance by sharing or selling service skills with one another online with locals.

We enable communities to support one another electronically while complying with social distancing policy and furthering the regional business. The ripples of our current world state will last for generations, and although there are some platforms to allow trades of skills, these existing applications are not distance-based and will not help boost local business and a sense of community, as we envision. Other outlets will take commission or create marketplace usage fees and prices- this is not the case with SkillTraders! SkillTraders is solely made to support <b>you</b>, as an individual. An open marketplace for all.


## Team Members
- David Chen
- Muhammad Ali
- Sofia Ilina

## Development Deployment & Testing

1. Fork and/or download a copy of the repository to your local machine.
2. Open a command line editor (such as 'Command Prompt' or 'Powershell' with Windows)
3. Navigate to the `team22/` directory from your local version of the repository in the command line.
4. Run `npm install` or `npm i` inside `team22/`, `team22/client` and `team22/backend` to ensure all required packages are installed.
5. Start both the backend server and client application with `npm run dev`. Shortly, your default web browser will open the application through localhost.

(For the step above, please ensure that your default browser is set to Chrome, as is required.)

## Features and Functionality Guide

Please note that a :pencil2: represents a (significant) edit to a feature, and a :gift: represents a (significant) new feature.

### General User

A general user, or skill-trader, has the normal capabilites and interactions with the application. Overall, they should be able to create and view reviews, postings, profiles as well as interact with and message other users.

##### Sign in
- To sign in to your user account, you should use the username "user" and password "user" on the sign-in page.
- Alternatively, if you would like to sign up, click the "Register" button and fill in your personal information (email, username, etc.)
- :pencil2: Please note that there are unique error messages and event handling on the Register page (non-matching passwords, password short, username short, etc). You will be notified if you have entered incorrect data for a new account.
- :pencil2: Similar to the above, there is event handling for the Login page, and you will be prompted if you have entered incorrect data such as a wrong password, non-existing username, etc.
- :gift: You can now try to create a new account outside of using the existing "admin" and "user" accounts (and test this capability if you'd like). A profile picture can be added on your Profile page (more on this later) for security purposes, similar to Twitter or Tumblr's process.


##### Side bar
- The purple sidebar is available on the left-hand side always.
- You can click on any link to be taken to that page or hover over any category to see relevant links and be taken to them.
- Specifically, you can view your profile picture at the top of the side bar. Clicking your profile picture will take you to YOUR user profile page, so you can see what outsiders see about you.
- Hovering over Settings and clicking "Sign Out" will kick you out back to the sign in page.
- All other pages as underneath are easily found on the side bar and explained below.
- :pencil2: Further restrictions have been added on the admin role, such as removing Creating Post capabilities as will be noticable when switching from admin to general user accounts.
- :gift: A new logo (with animation and styling)!


##### Home page
- Once you have successfully signed in, you will be taken directly to the home page which is the Find Postings page, naturally.
- You may use the "Search by posting title or user" bar to look up specific posts. Note that you can search by both posting info or the user who made the posting.
- You can click the category buttons to filter your view of postings in your area by their category, among the options provided. You can select multiple categories at the same time and mix and match them.
- Below the categories themselves, you can see the actual postings wih details on each one, like tags and price. You can click the user's name in the posting to be taken to their user profile.
- :gift: Session rerouting has been added. When accessing the site (base URL) while being logged in, you will immediately be taken to the home page instead of login.
- :gift: Postings have been redesigned to show more information and look more appealing as tiles. Postings also now store realtime database posts from real users and are completely filterable using the search bar or set of category buttons, searching the database.
- :gift: Choosing "Contact SkillTrader" will now take you to a messaging thread with that user, whereas clicking the user's name will take you to their (real) profile.
- :pencil2: Session handling has been added. When accessing this page logged in you'll be taken to it, but when logged out, a user will not be able to access this URL.

##### User Profile
- At the top of a user profile you can view info on that user, like their star rating average, joined date, profile picture, etc.
- Below that, you can leave a review for that user with some text and chosen stars.
- Underneath that, you can see the Skilltrader postings that specific user has made and view details on it by clicking "show details". You can also contact them on the Messages page by clicking "Message SkillTrader" once details are open, or just click "close details".
- Finally, at the bottom you can see all the reviews people have left for that s\kill trader. Clicking their profile picture should take you to their user profile (not implemented yet of course, because of database requirements).
- :pencil2: Real-time database information is now linked, showing the users actual star rating, postings, profile picture, etc.
- :pencil2: "Create a review" now sends an actual review for the user and changes their rating in the database. It also has exception handling (already made a review, etc).
- :pencil2: For any review, clicking the user's profile picture will take you to their (real) profile.
- :pencil2: Session handling has been added. When accessing this page logged in you'll be taken to it, but when logged out, a user will not be able to access this URL.

##### Messages
- On this page you can see all your mesaged contacts on the left side.
- There is a small gray circle next to your contact list that will take you to the bottom of the list.
- You can view the name of the individual you messaged (and will be able to click the it and be taken to theur user profile in the future, same with the contacts list).
- You can scroll through the message box to see your entire conversation history with that individual.
- You can type a message in the message box below the conversation.
- Clicking the "Send" button will send that message in the message box to the user (unimplemented again, of course).
- :gift: Messages has gotten a complete front-end UI overhaul, to make it easier to navigate between conversation threads with images, labelling and profile linking.
- :gift: Messages now has a chat server running that will actively send and recieve messages between yourself and the user with sockets.
- :pencil2: Session handling has been added. When accessing this page logged in you'll be taken to it, but when logged out, a user will not be able to access this URL.

##### Create a Posting
- Very briefly, you can create your own posting on this page by filling in the information such as price, title, description, etc.
- You can scroll the scrollbar to indicate the number of sessions for this particular skill-trade.
- Once ready, you can click the Create button to make your Skilltrader posting and publish.
- :gift: Users can now choose a picture for their posting and upload it, it will be saved in the backend for the posting.
- :gift: This page has also gotten a front-end UI overhaul, adding more components, sliders, stylings, exit animation and reactive text ("Free", "Ongoing", exit text, etc).
- :pencil2: This page has now been linked to the backend and will post the skilltrader posting, viewable on the home page or searching by users!
- :pencil2: Session handling has been added. When accessing this page logged in you'll be taken to it, but when logged out, a user will not be able to access this URL.

##### My Profile
- Firstly, on this page you can view your profile picture and update it with the "Change Photo" button that is animate.
- Next, if you scroll down you can view all your personal information currently saved. You cannot edit it.
- Clicking the "Edit Info" button will unlock the personal information fields to be updated.
- When editing, the "Edit Info" button will transform into a "Save" button. You can click this again to save your changes and lock the results in.
- Finally, at the bottom you can see your reviews and witness what people are saying about you/your service.
- :gift: Choosing a photo now prompts you to pick a photo, automatically centered as a profile. It will save this photo, and this change is reflected on your profile now and in the backend. The button (and top of the page) has also been redesigned.
- :pencil2: This page is now also accessible by clicking your profile in the sidebar
- :pencil2: This page has now been linked to the backend and updating fields will reflect on reload and in the database
- :pencil2: Session handling has been added. When accessing this page logged in you'll be taken to it, but when logged out, a user will not be able to access this URL.


### Admin

An admin user has extra features that will enable them to perform higher operations, as is the role of a superuser.
In particular, you may notice that the "Search for User" page has been removed and replaced with an "Admin User Modification" page, which serves as both an
indicator of admin access and also possesses the page where most admin functionalities will be housed. Admin can delete user profiles, reviews and postings as well as modify user profiles.

##### Sign in
- To sign in to your admin account, you should use the username "admin" and password "admin" on the sign-in page.
- Once you are signed in, you will see the application as you have seen it before, as well as a new "Admin Panel" tab.
- :gift: Once again, there have been changes to this and a new account can be created, but it will not be an admin since admin access needs to be <b>assigned</b> (by corporate, management, etc).

##### Admin Panel (Admin Panel)
- Primarily on the admin panel you may notice that you are able to search by users. You can use this to find a particular user whose information you wish to modify.
- You will next notice a series of user blocks as you have seen before on the site. You can use these to view the specific user, their photo and their information.
- You will now see a red delete button inside a user block. You can use this to delete that user if you so wish to.
- There is also a gray pencil edit button inside of user blocks. Clicking this will take you to that users profile page with enhanced options:
On the user's page, you are now able to modify their personal information (name, username, password, etc.), you can delete one of their review(s), or delete one of their postings (in case it wasn't in compliance with regulatory rules).
- :gift: The user components under the search bar have been modified and given a new UI design, to better reflect the information needs of an admin.
- :pencil2: Instead of clicking the edit button, you can also access the above by clicking the user's name and then going to their profile.
- :pencil2: The options explained above have now been connected to the backend, so deleting an acount, posting, or other modifications will reflect in the database and on the site.
- :pencil2: Session handling has been added. When accessing this page logged in you'll be taken to it, but when logged out, a user will not be able to access this URL.
- :pencil2: <b>Admin</b> session handling has been added. When accessing this page logged in but <b>not</b> as an admin, you will be kicked back to the home page.

All other pages and views for the admin are in line and accordance with that of a general user, and the admin will be able to navigate the site and have a primarily unhindered experience as a user.


## Required Dependencies

In case of any errors running the application due to missing user-installed packages, the following
packages were used by the team and should be installed using "nmp install ______", where ______ is the package name:

react-stars

react-scripts

react-scroll-to-bottom

react-uid

@material-ui/core/

These are required under "client", "backend" and the parent folder, overall, however they may also be needed in other folders.
Please feel free to reach out to us in case of any further issues.
