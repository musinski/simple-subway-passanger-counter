//document.getElementById("count-el").innerText = 10;
let passangerCount = 0;

function increment() {
    passangerCount += 1;
    document.getElementById("count-el").innerText = passangerCount;
}

function resetCounter() {
    let userResponse = "";
    userResponse = prompt("Are you sure? ")
    userResponse = userResponse.toLowerCase();
    if (userResponse == 'yes' || userResponse == 'y') {
        passangerCount = 0;
        document.getElementById("count-el").innerText = passangerCount;
    } else if (userResponse == 'no' || userResponse == 'n'){
        alert("Not resetting.");
    }
     else {
        alert("Incorrect output... not resetting.")
    }
}