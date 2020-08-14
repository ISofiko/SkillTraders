const log = console.log

// generic function to get a list of postings, id is optional
function getPostings(id, postingsList) {
    const url = "/api/postings/" + id
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                alert("Could not load postings");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            log("json", json)
            postingsList.setState({ "postings": json });
        })
        .catch(error => {
            console.log(error);
        })
}

// gets all the postings from the database
const getAllPostings = (postingsList) => {
    getPostings('', postingsList)
}

// gets all the postings which belong to list of selected categories
const getPostingsByCategory = (categoryId, postingsList) => {
    getPostings(categoryId, postingsList)
}

// gets all the postings belonging to a specific user
const getPostingsByUser = (userId, postingsList) => {
    getPostings(userId, postingsList)
}


export {getAllPostings}
export {getPostingsByCategory}
export {getPostingsByUser}