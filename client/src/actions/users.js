
// gets user by id from mongo
const getUser = (user, userId) => {
    const url = "/api/user/" + userId
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

// gets the list of users from web server for INTERNAL usage
const getUsersInternal = () => {
    const url = "/api/users/"
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                alert("Could not load users");
            }
        })
        .catch(error => {
            console.log(error);
        })
}

// gets user by username from mongo
const getUserByUserName = (user, username, password) => {
    const userbase = {users:[]}
    try {
        userbase.users = getUsersInternal();
        console.log(userbase);
        const uid = userbase.users.filter(x => x.username === username && x.password === password).id;
        getUser(user, uid);
    } catch (e) {
        return -1;
    }
}

// gets user by email from mongo
const getUserByEmail = (user, email, password) => {
    const userbase = {users:[]}
    try {
        userbase.users = getUsersInternal();
        const uid = userbase.users.filter(x => x.email === email && x.password === password).id;
        getUser(user, uid);
    } catch (e) {
        return -1;
    }
}

// gets the list of users from web server
const getUsers = (usersList) => {
    const url = "/api/users/"
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                alert("Could not load users");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            usersList.setState({ "users": json });
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

export {getUser, getUsers, createUser, getUserByUserName, getUserByEmail}