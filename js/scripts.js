function getSizeValue() {
    var selectedValue = document.getElementById("pizzaSize").value;
    return parseInt(selectedValue);
}

function getCrust() {
    var selectedCrust = document.getElementById("crust-type").value;
    return parseInt(selectedCrust);
}
function getSpinach() {
    var spinach = 0;
    var selectedSpinach= document.getElementById("spinach");
    if (selectedSpinach.checked === true) {
       spinach= 150;
    }
    return parseInt(spinach);
}
function getBacon() {
    var bacon = 0;
    var selectedBacon = document.getElementById("bacon");
    if (selectedBacon.checked === true) {
        bacon = 150;
    }
    return parseInt(bacon);
}
function getPepperoni() {
    var pepperoni = 0;
    var selectedPepperoni = document.getElementById("pepperoni");
    if (selectedPepperoni.checked === true) {
        pepperoni = 150;
    }
    return parseInt(pepperoni);
}
function getBlackOlives() {
    var blackOlives = 0;
    var selectedBlackOlives = document.getElementById("blackOlives");
    if (selectedBlackOlives.checked === true) {
       blackOlives = 150;
    }
    return parseInt(blackOlives);
}
function getMushroom() {
    var mushroom = 0;
    var selectedMushroom = document.getElementById("mushrooms");
    if (selectedMushroom.checked === true) {
        mushroom = 100;
    }
    return parseInt(mushroom);

}
function getExtraCheese() {
    var extraCheese = 0;
    var selectedExtraCheese = document.getElementById("extraCheese");
    if (selectedExtraCheese.checked === true) {
        extraCheese= 150;
    }
    return parseInt(extraCheese);
}

function getOnions() {
    var onions = 0;
    var selectedOnions = document.getElementById("onions");
    if (selectedOnions.checked === true) {
        onions = 150;
    }
    return parseInt(onions);
}

function getSausage() {
    var sausage = 0;
    var selectedSausage = document.getElementById("sausage");
    if (selectedSausage.checked === true) {
        sausage = 100;
    }
    return parseInt(sausage);
}

function getNumber() {
    var selectedNumber = document.getElementById("many").value;
    return parseInt(selectedNumber);
}

function getLocation() {
    var selectedLocation = document.getElementById("delivery").value;
    return parseInt(selectedLocation);
}

function getTotalAmount() {
    var totalAmount = (getSizeValue() + getCrust() + getSpinach() + getBacon() + getPepperoni() + getMushroom() + getExtraCheese() + getOnions() + getSausage()) +getBlackOlives() * getNumber() + getLocation();
    document.getElementById("fourteen3").innerHTML = "You ordered " + getNumber() + " pizza(s)." + " The Delivery cost is "+getLocation()+" Your  total bill is " + (totalAmount);
}

function clearFields(){
    document.getElementById(white).reset();
}


