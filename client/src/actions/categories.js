
// gets the list of categories from web server
export const getCategories = (categoriesList) => {
    // todo: this listens to port 3000 instead of 5000
    const url = "http://localhost:5000/api/categories"
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