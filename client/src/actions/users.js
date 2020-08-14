const log = console.log

// gets user by username from mongo
async function getUserByUserName(user, username, password) {
    log(user, username, password)
    let response = await fetch(`/api/user/${username}`);
    let data = await response.json();
    if (!data) {
        log("Not found")
    }
    if (data.password === password) {
        log("passwords match");
        user.setState({ "user": data });
    } else {
        log("Passwords dont match");
        user.setState({"user": null});
    }
    return data;
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


export {getUserByUserName, createUser}