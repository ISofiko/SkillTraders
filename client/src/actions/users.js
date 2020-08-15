const log = console.log

/**
* Get user by username or id
**/
async function getUser(user, username) {
    try {
        let response = await fetch(`/api/user/${username}`);
        let data = await response.json();
        if (!data) {
            log("Not found")
            return null;
        }
        user.setState({ "user": data });
        return data;
    } catch (e) {
        return null;
    }
}


// gets user by username from mongo, and verifies password
async function getUserByUserName(user, username, password) {
    try {
        let response = await fetch(`/api/user/${username}`);
        let data = await response.json();
        if (!data) {
            log("Not found")
            return -1;
        }
        if (data.password === password) {
            log("passwords match");
            user.setState({ "user": data });
        } else {
            log("Passwords dont match");
            user.setState({"user": null});
            return -1;
        }
        return data;
    } catch (e) {
        return -1;
    }
}

// create user for mongo
async function createUser(user, newuserrecord) {

    // POST request
    try {
        const url = "/api/user/";
        let response = await fetch(url, {  
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newuserrecord)
        });

        let data = await response.json();
        console.log(data);
        if (data !== null) {
          console.log('Request success: ', data);
          user.setState({ "user": data });
        } else {  
          console.log('Request failure: ');
          alert("There was an error creating this account. Please try again later");
        }

        return data;
    } catch (e) {
        console.log(e);
        alert("There was an error creating this account. Try again later");
    }
}


export {getUser, getUserByUserName, createUser}