
const express = require("express");
const app = express();
const functions = require("./function");

exports.getStrongestDigit = (req,res) =>{
     var number = req.body.number;
     console.log(number);
     functions.getStrongestDigit(req,res,number);

}