
// gets user by id from mongo
const getUser = (user, userId) => {
    const url = "http://localhost:5000/api/user/" + userId
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                alert("Could not load user");
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

// gets the list of users from web server
const getUsers = (usersList) => {
    console.log("RECIEVED");
    console.log(usersList);
    const url = "http://localhost:5000/api/users/";
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
    const url = "http://localhost:5000/api/user/";
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

export {getUser, getUsers, createUser}