const log = console.log

// generic function to get a list of postings, id is optional
async function getPostings(id, postingsList) {
    try {
        let response = await fetch(`/api/postings/${id}`)
        let data = await response.json();
        if (!data) {
            log("Not found")
            return null;
        }
        postingsList.setState({ "postings": data });
    } catch (e) {
        log(e)
        return null;
    }
}

// gets all the postings from the database
function getAllPostings(postingsList) {
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

        const url = "/api/posting/";
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
    }
}


export {getAllPostings}
export {getPostingsByCategory}
export {getPostingsByUser}
export {createPost}
