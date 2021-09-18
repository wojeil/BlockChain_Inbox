// deploy code will go here
const HDWalletProvider = require('truffle-hd-wallet-provider');
const Web3 = require('web3');
const {interface,bytecode}= require('./compile');

//set up provider by creating an instance that contains key and rinkby url
const provider = new HDWalletProvider(
    'forward history amazing cause attend world ticket strong prison manual skin cost', 'https://rinkeby.infura.io/v3/c3233d34ba6446749916d2373f37a87e'
);
//set up web3 instance and call in provider 
const web3 = new Web3(provider);


