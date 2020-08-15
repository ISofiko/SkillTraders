const log = console.log

// gets the list of reviews from web server
async function getReviews(user) {
    try {
        let response = await fetch(`/api/reviews/${user}`)
        let data = await response.json();
        if (!data) {
            log("Not found")
            return null;
        }
        return data
    } catch (e) {
        log(e)
        return null;
    }
}

export {getReviews}