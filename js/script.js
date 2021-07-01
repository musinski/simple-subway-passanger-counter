let passangerCount = 0;
let saveElement = document.getElementById("saved-count");

function increment() {
    passangerCount += 1;
    document.getElementById("count-el").innerText = passangerCount;
}

function save() {
    let countString = passangerCount;
    let dashSeparator = " - ";
    saveElement.textContent += countString + dashSeparator;
}

function resetCounter() {
    let userResponse = "";
    userResponse = prompt("To reset counter type yes")
    userResponse = userResponse.toLowerCase();
    if (userResponse == 'yes' || userResponse == 'y') {
        passangerCount = 0;
        document.getElementById("count-el").innerText = passangerCount;
        document.getElementById("saved-count").innerHTML = "";
    } else if (userResponse == 'no' || userResponse == 'n'){
        alert("Not resetting.");
    }
     else {
        alert("Incorrect output... not resetting.")
    }
}
