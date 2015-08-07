var numberList = [2, 4, 6, 8];

function addNumbers(someArray) {
    var total = 0;
    for(var i = 0; i < someArray.length; i++) {
        total = total + someArray[i];    
    }
    return total;
}

var myResult = addNumbers(numberList);
document.write(myResult);