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
//will replace everywhere this string is applicable 
const INITIAL_STRING = 'Helloz'

beforeEach(async () =>{
// get a list of all accounts
accounts = await web3.eth.getAccounts();

//Use one of the those accounts to deploy the contract
inbox = await new web3.eth.Contract(JSON.parse(interface))
 .deploy({ data: bytecode, arguments: [INITIAL_STRING]})
 .send({from: accounts[0], gas: '1000000'})

});


//testing out the fetch account works 
describe('Inbox', ()=>{
    //run the test below to confirm a contract exists
    it('deploys a contract', ()=>{
assert.ok(inbox.options.address);
    });
// run this test async to confirm there is an initial message 
    it('has a default message', async ()=>{
        const message = await inbox.methods.message().call();
        assert.equal(message, INITIAL_STRING);
    });
    //run this test below to confirm we can update via set message
    it('can set message', async ()=>{
        await inbox.methods.setMessage('bye').send({from: accounts[0]});
        const message = await inbox.methods.message().call();
        assert.equal(message, 'bye');
        
    });
});