var someList = ["a", "b", "c"];

function buildString(someArray) {
    var str = "";
    for(var i = 0; i < someList.length; i++) {
        str = str + someList[i] + "<br>";
    }
    return str;
}

var myStateList = buildString(someList);
document.write(myStateList);