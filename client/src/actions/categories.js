const log = console.log

// gets a category by id
async function getCategory(id) {
    try {
        let response = await fetch(`/api/category/${id}`)
        let data = await response.json
        if (!data) {
            log("Not found")
            return null;
        }
        log("Category data", data)
        log("Category data.name", data.name)
        return data
    } catch (e) {
        log(e)
        return null;
    }

}

const getCategoryNames = (categoriesList, ids) => {
    log("category ids")
    log(ids)
    const result = []
    log("in get category names")
    for (const id in ids) {
        log("category id", id)
        getCategory(id).then((data) => {
            log("data", data)
            log("data.name", data.name)
            result.push(data.name)
        })
    }
    log("\n\n##Get category names result", result)
//    categoriesList.setState({"tagList": result.toUpperCase().split(" ")})
    categoriesList.setState({"tagList": result})
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