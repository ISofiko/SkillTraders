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

export {getUserByUserName}