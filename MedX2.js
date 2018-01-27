toAccount = 0 ;
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi = JSON.parse('[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "username",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "first_name",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "last_name",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "password",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "practioner_id",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "email",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "dob",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "addr",
				"type": "bytes32"
			}
		],
		"name": "IDD",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "filehash",
				"type": "string"
			}
		],
		"name": "file",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "filehash",
				"type": "string"
			}
		],
		"name": "hash",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "username",
				"type": "bytes32"
			},
			{
				"name": "_first_name",
				"type": "bytes32"
			},
			{
				"name": "_last_name",
				"type": "bytes32"
			},
			{
				"name": "_password",
				"type": "bytes32"
			},
			{
				"name": "practioner_id",
				"type": "bytes32"
			},
			{
				"name": "_email",
				"type": "bytes32"
			},
			{
				"name": "_dob",
				"type": "bytes32"
			},
			{
				"name": "addr_",
				"type": "bytes32"
			}
		],
		"name": "setIDD",
		"outputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]');
xyz = web3.eth.contract(abi);

//Provide below the new deployed address
contractInstance = xyz.at('0x07bbbb2d2b8e0d7e5ecfbb0ac59f7eba093170b0');
data = "" ;


//Function to display the user details
function displaydetails(){
details="";
details+=contractInstance.users[id].username;
details+=contractInstance.users[id].first_name;
details+=contractInstance.users[id].last_name;
details+=contractInstance.users[id].email;
details+=contractInstance.users[id].dob;
details+=contractInstance.users[id].practitioner_id;
details+=contractInstance.users[id].addr;
$("#DetailTable").html(details);
}

//Updates the patients medical history
function UpdateHistory(){
	var ipfs = require('ipfs');       //Using IPFS for storing large files

  e1=$("#file.txt");
  ipfs.add(new Buffer(e1), function (err, res){
    if(err || !res) return console.error("ipfs add error", err, res);

    res.forEach(function(file) {
      console.log('successfully stored', file.Hash);
contractInstance.hash(file.Hash);           //Hash value of the updated file is generated and is added to the block chain
exampleEvent.watch(function(err, result) {
  if (err) {    console.log(err);    return;  }
  
    });
  });
}
}

