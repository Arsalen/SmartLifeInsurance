


// Smart contract address
const DATA_CONTRACT = '0xeed6dc2aff342a1e0a7f45e79402a6253f9980ec';

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers

    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

web3.eth.defaultAccount = web3.eth.accounts[7];
var smartContract = web3.eth.contract([
    {
        "constant": false,
        "inputs": [
            {
                "name": "AgencieAddress",
                "type": "address"
            },
            {
                "name": "Weights",
                "type": "uint256[17]"
            }
        ],
        "name": "UpdateWeight",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "GetDrivingUsers",
        "outputs": [
            {
                "name": "",
                "type": "address[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
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
        "name": "CheckDriving",
        "outputs": [
            {
                "name": "",
                "type": "bool[7]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "GetMedicalUsers",
        "outputs": [
            {
                "name": "",
                "type": "address[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
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
        "name": "CheckWeights",
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
        "constant": true,
        "inputs": [
            {
                "name": "UserAddress",
                "type": "address"
            }
        ],
        "name": "CheckMedical",
        "outputs": [
            {
                "name": "",
                "type": "bool[10]"
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
            },
            {
                "name": "MedicalResult",
                "type": "bool[10]"
            }
        ],
        "name": "UpdateMedical",
        "outputs": [],
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
            },
            {
                "name": "DrivingResult",
                "type": "bool[7]"
            }
        ],
        "name": "UpdateDriving",
        "outputs": [],
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
            },
            {
                "name": "UserAddress",
                "type": "address"
            }
        ],
        "name": "Score",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]);
var dataContract= smartContract.at(DATA_CONTRACT);

var userAddress, agencyAddress;
var score = -1 ;

$("#btn").click(function() {

    userAddress = $("#userAddress").val();
    agencyAddress = $("#agencyAddress").val();

    dataContract.Score(agencyAddress,userAddress,{from: web3.eth.accounts[7], gas:4000000},function(error, result){
         score = result;
         if (error) alert("Something gone wrong!");
         else {
             $("#score").text(score);
         }


    });


});
