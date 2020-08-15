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

// create user for mongo
async function createPost(newpost, context = null) {

    // POST request
    try {
        console.log(newpost);
        const url = `http://localhost:5000/api/posting/`;
        let response = await fetch(url, {  
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newpost)
        });

        let data = await response.json();
        console.log(data);
        if (data !== null) {
          console.log('Request success: ', data);
          context.setState({ "posting": data });
           return true;
        } else {  
          console.log('Request failure: ');
          alert("There was an error creating this post. Please try again later");
        }

        return data;
    } catch (e) {
        console.log(e);
        alert("There was an error creating this post. Try again later");
    }
}


export {getAllPostings}
export {createPost}
export {getPostingsByCategory}
export {getPostingsByUser}