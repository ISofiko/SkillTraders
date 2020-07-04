# SkillTraders
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


### Admin

An admin user has extra exceptional features that will enable them to perform higher operation with the application, as is the role of a superuser.
In particular, you may notice that the "Search for User" page has been removed and replaced with an "Admin User Modification" page, which serves as both an
indicator of admin access and also possesses the page where admin functionalities will be housed.

#### Sign in
- To sign in to your admin account, you should use the username "admin" and password "admin" on the sign-in page.
- Once you are signed in, you will see the application as you have seen it before, as well as a new "Admin User Modification" tab.

##### Admin Panel (Admin User Modification)
- Primarily on the admin panel you may notice a "Search for User" component. You should be able to use this to search for users, as you have seen on the site before.
- You will next notice a series of user blocks as you have seen before on the site. You can use these to view the specific user and their photo.
- You will now see a red delete button inside a user block. You can use this to delete that user if you so wish to.
- There is also a gray pencil edit button. Clicking this will take you to that users profile page with enhanced options:
On the user's page, you are now able to modify their personal information (name, username, password, etc.), you can delete one of their review(s), or delete one of their postings (in case it wasn't in compliance with regulatory rules).

(Some of this last point have not yet been implemented due to database oriented issues: we cannot implement some of these editing features until after a database is set up in Phase 2, of course).

All other pages and views for the admin are in line and accordance with that of a general user, and the admin will be able to navigate the site and have a primarily unhindered experience as a user.


## Required Dependencies

In case of any errors running the application due to missing user-installed packages, the following
packages were used by the team and should be installed using "nmp install ______", where ______ is the package name:

react-stars

react-scroll-to-bottom

react-uid
