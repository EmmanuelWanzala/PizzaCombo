function getSizeValue() {
    var selectedValue = document.getElementById("pizzaSize").value;
    return parseInt(selectedValue);
}

function getCrust() {
    var selectedCrust = document.getElementById("crust-type").value;
    return parseInt(selectedCrust);
}
function getSpinach() {
    var Spinach = 0;
    var selectedSpinach= document.getElementById("Spinach");
    if (selectedSpinach.checked === true) {
       Spinach= 150;
    }
    return parseInt(Spinach);
}
function getBacon() {
    var Bacon = 0;
    var selectedBacon = document.getElementById("Bacon");
    if (selectedBacon.checked === true) {
        Bacon = 150;
    }
    return parseInt(Bacon);
}
function getPepperoni() {
    var pepperoni = 0;
    var selectedPepperoni = document.getElementById("pepperoni");
    if (selectedPepperoni.checked === true) {
        pepperoni = 150;
    }
    return parseInt(pepperoni);
}
function BlackOlives() {
    var BlackOlives = 0;
    var selectedBlackOlives = document.getElementById("BlackOlives");
    if (selectedBlackOlives.checked === true) {
       BlackOlives = 150;
    }
    return parseInt(pepperoni);
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
    var ExtraCheese = 0;
    var selectedExtraCheese = document.getElementById("ExtraCheese");
    if (selectedExtraCheese.checked === true) {
        ExtraCheese= 150;
    }
    return parseInt(pepperoni);
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
