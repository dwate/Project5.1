function orderAllItems() {
    console.log("is this running?")
    var firstName = document.getElementById('fname').nodeValue;
    if (firstName == "") {
        console.log("First Name is required");
        return false;
    }
}