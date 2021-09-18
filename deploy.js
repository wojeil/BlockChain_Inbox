// deploy code will go here
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode}= require('./compile');

//set up provider by creating an instance that contains key and rinkby url
const provider = new HDWalletProvider(
    'forward history amazing cause attend world ticket strong prison manual skin cost', 'https://rinkeby.infura.io/v3/c3233d34ba6446749916d2373f37a87e'
);
//set up web3 instance and call in provider 
const web3 = new Web3(provider);





// write a function to use asyc/ await syntax 

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account ', accounts[0]);

    result = await new web3.eth.Contract(JSON.parse(interface)).deploy({data: bytecode, arguments: ['hi']}).send({ gas: '1000000', gasPrice: '5000000000', from: accounts[0] });

    console.log('contract to deployed to ', result.options.address);
};

deploy();