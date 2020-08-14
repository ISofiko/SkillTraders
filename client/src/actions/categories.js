const log = console.log

// gets a category by id
function getCategory(id) {
    const url = "/api/category/" + id
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                alert("Could not load categories");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            log("\n\n~~category\n\n")
            log(json)
            return json
        })
        .catch(error => {
            console.log(error);
        })
}

const getCategoryNames = (categoriesList, ids) => {
    const result = []
    for (const id in ids) {
        result.push(getCategory(id))
    }
    log(result)
//    categoriesList.setState({"tagList": result.toUpperCase().split(" ")})
    categoriesList.setState({"tagList": "result"})
}





// gets the list of categories from web server
const getCategories = (categoriesList) => {
    const url = "/api/categories/"
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                alert("Could not load categories");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            categoriesList.setState({ "categories": json });
        })
        .catch(error => {
            console.log(error);
        })
}

export {getCategoryNames, getCategories}