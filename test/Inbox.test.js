// contract test code will go here
const assert = require('assert');
const ganache = require( 'ganache-cli');
//constructor for new instances of web3
const Web3 = require("web3");
//instance of web 3 below 
const web3 = new Web3(ganache.provider());



