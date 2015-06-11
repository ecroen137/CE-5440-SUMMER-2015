"use strict";

var someList = [1, 2, 3, 4, 5, 6, 7, 8];

for(var i = 0; i < someList.length; i++) {
 
 if(someList[i] % 2 === 0) {
     console.log(someList[i] + ' even');
 } else {
     console.log(someList[i] + ' odd');
 }  
    
    
}