const express = require("express");
const app = express();


exports.getStrongestDigit = (req,res,number)  =>{
    var string = number.toString();
    var steps = [];
    while(string.length != 1){
        var numberString = number.toString();
        var length = Math.round(numberString.length/2);
        console.log("length is   "+  length);
        string = "";
    for(var i =0; i< length;i++){
        
        var start = parseInt(numberString.charAt(i));
        console.log(start);
        var end = parseInt(numberString.charAt(numberString.length-(i+1)));
        console.log(end);
        if(i === numberString.length-(i+1)) {
            var num = start;
        }else{
        if(start > end){
            var num = start.toString();
        }else if(start == end){
            var num = "";
        }else{
            var num = end.toString();
        }
    }
        console.log("num is    " + num);
      string = string + num;
    }
    if(string.length != 1){
    steps.push(parseInt(string));
    }
    if(length ===2 && string.charAt(0) === string.charAt(1)){
        string = string.charAt(0); }
    number = parseInt(string);
    var strongest =parseInt(string);
    console.log("string is  " + string);
    
}
console.log("steps are   " + steps);

    res.status(200).json({ strongest:strongest,steps: steps });

}