fs = require('fs');  //require the file system
Web3 = require('web3');  //require web3 
web3 = new Web3( new Web3.providers.HttpProvider("http://localhost:8545/") );
console.log("!!!!!!!!!!!!!!!!!!!!!!!Connected to Blockchain !!!!!!!!!!!!!!!!!!!!!!!!");
code = fs.readFileSync("userToken.sol").toString();
solc = require('solc');
compiledCode = solc.compile( code );
console.log("Compiled successfully!!");
abi = JSON.parse( compiledCode.contracts[":userToken"].interface );
byteCode = compiledCode.contracts[':userToken'].bytecode ;
xyz =  web3.eth.contract(abi) ;
console.log("Deploying ...")
deployedContract = xyz.new({data: byteCode , from: web3.eth.accounts[0] , gas: 3000000 },
( e , contract )=>{
      if( contract.address )
        {
          console.log("Deployed successfully...\n\n\nDeployed Address : " + contract.address );
          console.log("Use the above deployed address in MedX1.js ...\n\n");
        }
});
