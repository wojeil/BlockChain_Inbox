// contract test code will go here
const assert = require('assert');
const ganache = require( 'ganache-cli');
//constructor for new instances of web3
const Web3 = require("web3");
//instance of web 3 below 
const web3 = new Web3(ganache.provider());
//import compiled solidity smart contract
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () =>{
// get a list of all accounts
accounts = await web3.eth.getAccounts();

//Use one of the those accounts to deploy the contract
inbox = await new web3.eth.Contract(JSON.parse(interface))
 .deploy({ data: bytecode, arguments: ['Helloz']})
 .send({from: accounts[0], gas: '1000000'})

});


//testing out the fetch account works 
describe('Inbox', ()=>{
    it('deploys a contract', ()=>{
assert.ok(inbox.options.address);
    });
});