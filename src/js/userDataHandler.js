/*
Send user data to smart contracts
 */



const INSURANCE_CONTRACT = '0x9306ec44f09ae8267917434fe79ab8e39b04c78b';


/*
web3 init
 */

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

web3.eth.defaultAccount = web3.eth.accounts[1];
var smartContract = web3.eth.contract([
    {
        "constant": true,
        "inputs": [
            {
                "name": "Agencie",
                "type": "address"
            },
            {
                "name": "User",
                "type": "address"
            }
        ],
        "name": "Sum",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "AgencieAddress",
                "type": "address"
            },
            {
                "name": "Wghts",
                "type": "uint256[17]"
            }
        ],
        "name": "SetWeights",
        "outputs": [
            {
                "name": "",
                "type": "uint256[17]"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "AgencieAddress",
                "type": "address"
            }
        ],
        "name": "GetWeights",
        "outputs": [
            {
                "name": "",
                "type": "uint256[17]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "UserAddress",
                "type": "address"
            }
        ],
        "name": "CreateUserMedical",
        "outputs": [
            {
                "name": "",
                "type": "bool[10]"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "UserAddress",
                "type": "address"
            }
        ],
        "name": "CreateUserDriving",
        "outputs": [
            {
                "name": "",
                "type": "bool[7]"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "AgencieAddress",
                "type": "address"
            }
        ],
        "name": "CreateAgencie",
        "outputs": [
            {
                "name": "",
                "type": "uint256[17]"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
]);
var insuranceContract= smartContract.at(INSURANCE_CONTRACT);

/* Fom submission */

var job,nat,age,gender,address;

$("#btn").click(function() {

    job = $("#job").val();
    nat = $("#nat").val();
    age = $("#age").val();
    gender = $("#gender").val();
    address =  $("#address").val();


    console.log(job,nat,age,gender,address);
    insuranceContract.CreateUserMedical(address, {from: web3.eth.accounts[7], gas:4000000}, function (error, result) {

        if (error)
            console.log(error);
    });
    insuranceContract.CreateUserDriving(address, {from: web3.eth.accounts[7], gas:4000000}, function (error, result) {
        if (error)
            console.log(error);
    }) ;
});

