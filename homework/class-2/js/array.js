var alphaArray = ["A", "B", "C", "D"];  
    
for (var i = 0; i < alphaArray.length; i++) {
    var newAlpha = [];
    if (i % 2 == 0) {
        newAlpha.push(alphaArray[i].toUpperCase());
    } 
    else {
        newAlpha.push(alphaArray[i]);
    }

document.write(newAlpha.join(""));

}