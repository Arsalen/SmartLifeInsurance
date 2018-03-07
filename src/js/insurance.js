



const INSURANCE_CONTRACT = '0x9306ec44f09ae8267917434fe79ab8e39b04c78b';

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

web3.eth.defaultAccount = web3.eth.accounts[7];
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
    }
]);
var insuranceContract= smartContract.at(INSURANCE_CONTRACT);





var blood,chol,smok,drink,diab,obes,stroke,cancer,hep,deh;
var drunk ,red,reck,shoulder,seat,lic,trf;


$("#btn").click(function() {

    //driving data
    drunk = $("#drunk").val();
    red = $("#red").val();
    reck = $("#reck").val();
    shoulder = $("#shoulder").val();
    seat = $("#seat").val();
    lic = $("#lic").val();
    trf = $("#trf").val();

    //medical data

    blood = $("#blood").val();
    chol = $("#chol").val();
    smok = $("#smok").val();
    drink = $("#drink").val();
    diab = $("#diab").val();
    obes = $("#obes").val();
    stroke = $("#stroke").val();
    cancer = $("#cancer").val();
    hep = $("#hep").val();
    deh = $("#deh").val();

    address = $("#address").val();

    var diseases = [blood,chol,smok,drink,diab,obes,stroke,cancer,hep,deh,drunk,red,reck,shoulder,seat,lic,trf];
    //console.log(blood,chol,smok,drink,diab,obes,stroke,cancer,hep,lic,trf);
    insuranceContract.SetWeights(address,diseases, {from: web3.eth.accounts[7], gas:4000000}, function (error, result) {

        if (error) {
            alert("something gone wrong!");
        }
        else {
            insuranceContract.GetWeights(address, function (error, result) {
                res = result ;
                $("#alert").show();
                $("#newScoring").text(res) ;
            });


        }
    });

});


