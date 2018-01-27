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



function signup(){
username=$("#usernamesignup").val();
firstname=$("#firstnamesignup").val();
lastname=$("#Lastnamesignup").val();
emailsignup=$("#emailsignup").val();
pwd=$("#pwd").val();
dob=$("#dob").val();
phone=$("#phone").val();
radio1=$("#yes").val();
Address=$("#Address").text();
e1=$("#file").text();
if(radio.checked==true){
pid=$("#pid").val();
//contractInstance.IDD(username,firstname,lastname,pwd,pid,emailsignup,e1,dob,Address);

var exampleEvent = contractInstance.IDD(username,firstname,lastname,pwd,pid,emailsignup,e1,dob,Address);
exampleEvent.watch(function(err, result) {
  if (err) {
    console.log(err)
    return;
  }
  console.log(result.args._value)
  // check that result.args._from is web3.eth.coinbase then
  // display result.args._value in the UI and call    
  // exampleEvent.stopWatching()
});

}
else{
contractInstance.ID(username,firstname,lastname,pwd,emailsignup,e1,dob,Address);
}

}
