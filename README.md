# SkillTraders

URL: https://skilltraders.herokuapp.com/

See backend API's and documentation in: **<ins>apis.txt</ins>**

SkillTraders allows you to support community members while maintaining social distance by sharing or selling service skills with one another online with locals.

We enable communities to support one another electronically while complying with social distancing policy and furthering the regional business. The ripples of our current world state will last for generations, and although there are some platforms to allow trades of skills, these existing applications are not distance-based and will not help boost local business and a sense of community, as we envision.


## Team Members
- David Chen
- Muhammad Ali
- Sofia Ilina

## Development Deployment & Testing

1. Fork and/or download a copy of the repository to your local machine.
2. Open a command line editor (such as 'Command Prompt' or 'Powershell' with Windows)
3. Navigate to the `team22/frontend` directory from your local version of the repository in the command line.
4. Run `npm install` to ensure all required packages are installed.
5. Start the local development server with `npm start'. Shortly, your default web browser will open the application through localhost.

(For the step above, please ensure that your default browser is set to Chrome, as required.)

## Features and Functionality Guide

### General User

##### Sign in
- To sign in to your user account, you should use the username "user" and password "user" on the sign-in page.
- Alternatively, if you would like to sign up, click the "Register" button and fill in your personal information (email, username, etc.)
- Please note that there are unique error messages and event handling on the Register page (non-matching passwords, password short, username short, etc.)

##### Side bar
- The purple sidebar is available on the left-hand side always.
- You can click on any link to be taken to that page or hover over any category to see relevant links and be taken to them.
- Specifically, you can view your profile picture at the top of the side bar. Clicking your profile picture will take you to YOUR user profile page, so you can see what outsiders see about you.
- Hovering over Settings and clicking "Sign Out" will kick you out back to the sign in page.
- All other pages as underneath are easily found on the side bar and explained below.

##### Home page
- Once you have successfully signed in, you will be taken directly to the home page which is the Find Postings page, naturally.
- You may use the "Search by posting title or user" bar to look up specific posts. Note that you can search by both posting info or the user who made the posting.
- You can click the category buttons to filter your view of postings in your area by their category, among the options provided. You can select multiple categories at the same time and mix and match them.
- Below the categories themselves, you can see the actual postings wih details on each one, like tags and price. You can click the user's name in the posting to be taken to their user profile.

##### User Profile
- At the top of a user profile you can view info on that user, like their star rating average, joined date, profile picture, etc.
- Below that, you can leave a review for that user with some text and chosen stars.
- Underneath that, you can see the Skilltrader postings that specific user has made and view details on it by clicking "show details". You can also contact them on the Messages page by clicking "Message SkillTrader" once details are open, or just click "close details".
- Finally, at the bottom you can see all the reviews people have left for that skill trader. Clicking their profile picture should take you to their user profile (not implemented yet of course, because of database requirements).

##### Messages
- On this page you can see all your mesaged contacts on the left side.
- There is a small gray circle next to your contact list that will take you to the bottom of the list.
- You can view the name of the individual you messaged (and will be able to click the it and be taken to theur user profile in the future, same with the contacts list).
- You can scroll through the message box to see your entire conversation history with that individual.
- You can type a message in the message box below the conversation.
- Clicking the "Send" button will send that message in the message box to the user (unimplemented again, of course).

##### Create a Posting
- Very briefly, you can create your own posting on this page by filling in the information such as price, title, description, etc.
- You can scroll the scrollbar to indicate the number of sessions for this particular skill-trade.
- Once ready, you can click the "Create!" button to make your Skilltrader posting and publish.

##### My Profile
- Firstly, on this page you can view your profile picture and update it with the "Change Photo" button that is animate.
- Next, if you scroll down you can view all your personal information currently saved. You cannot edit it.
- Clicking the "Edit Info" button will unlock the personal information fields to be updated.
- When editing, the "Edit Info" button will transform into a "Save" button. You can click this again to save your changes and lock the results in.
- Finally, at the bottom you can see your reviews and witness what people are saying about you/your service.

### Admin

An admin user has extra exceptional features that will enable them to perform higher operation with the application, as is the role of a superuser.
In particular, you may notice that the "Search for User" page has been removed and replaced with an "Admin User Modification" page, which serves as both an
indicator of admin access and also possesses the page where admin functionalities will be housed.

##### Sign in
- To sign in to your admin account, you should use the username "admin" and password "admin" on the sign-in page.
- Once you are signed in, you will see the application as you have seen it before, as well as a new "Admin Panel" tab.

##### Admin Panel (Admin Panel)
- Primarily on the admin panel you may notice a "Search for User" component. You should be able to use this to search for users, as you have seen on the site before.
- You will next notice a series of user blocks as you have seen before on the site. You can use these to view the specific user and their photo.
- You will now see a red delete button inside a user block. You can use this to delete that user if you so wish to.
- At the  page is a console window where any info can be typed and the command will show up in the window. We will be implementing some small easy menial tasks that admin can just type in this box instead of navigating the page and duplicating tasks.
- There is also a gray pencil edit button inside of user blocks. Clicking this will take you to that users profile page with enhanced options:
On the user's page, you are now able to modify their personal information (name, username, password, etc.), you can delete one of their review(s), or delete one of their postings (in case it wasn't in compliance with regulatory rules).

(Some of this last point have not yet been implemented due to database oriented issues: we cannot implement some of these editing features until after a database is set up in Phase 2, of course).

All other pages and views for the admin are in line and accordance with that of a general user, and the admin will be able to navigate the site and have a primarily unhindered experience as a user.


## Required Dependencies

In case of any errors running the application due to missing user-installed packages, the following
packages were used by the team and should be installed using "nmp install ______", where ______ is the package name:

react-stars

react-scroll-to-bottom

react-uid

@material-ui/core/
