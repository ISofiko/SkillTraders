const log = console.log

// gets user by username from mongo
const getUserByUserName = (user, username, password) => {
    console.log("PASSED");
    console.log(user);
    console.log(username, password);
    const url = "https://localhost:5000/api/user/" + username
    fetch(url)
        .then(res => {
            log(res);
            if (res.status === 200) {
                res.json().then(function(data) {
                    return data;
                  });
            } else {
                alert("Could not load users");
            }
        })
        .then(res => {
            if (res.password === password) {
                log("passwords match")
                user.setState({ "user": user });
                console.log(user);
            } else {
                user.setState({"user": null})
                log("Passwords dont match")
            }
        })
        .catch(error => {
            console.log(error);
        })
}

// gets the list of users from web server
const getUsers = (usersList) => {
    console.log("RECIEVED");
    console.log(usersList);
    const url = "/api/users/";
    fetch(url)
        .then(res => {
            console.log("STATUS");
            console.log(res.status);
            if (res.status === 200) {
                return res.json();
            } else {
                alert("Could not load users");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            console.log("Inner - Before");
            console.log(usersList);
            usersList.setState({ "users": json });
            console.log("Inner - After");
            console.log(usersList);
        })
        .catch(error => {
            console.log(error);
        })
}

// create user for mongo
const createUser = (user, newuserrecord) => {

    // POST request
    const url = "/api/user/";
    fetch(url, {
        method: 'post',
        body: JSON.stringify(newuserrecord)
      })
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                alert("Could not create user");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            user.setState({ "user": json });
        })
        .catch(error => {
            console.log(error);
        })
}

export {getUsers, createUser, getUserByUserName}