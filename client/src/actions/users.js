
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

export {getUser, getUsers}