// compile code will go here
const path = require('path');
const fs = require('fs');
const solc = require('solc');

//path to sol file
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
// read the file
const source = fs.readFileSync(inboxPath, 'utf8');

//set Up Compiler .. module .export added to export compiler... contracts to select one contract from the whole object
module.exports = solc.compile(source, 1).contracts[':Inbox'];

//test to make sure it works
// console.log(solc.compile(source,1));

