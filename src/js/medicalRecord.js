

/*
   deal with medical record
 */


const MEDICAL_CONTRACT = '0x8b19ace1639fc46b9e0492d375a38c8ab0f8442f';


/*
web3 init
 */

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

web3.eth.defaultAccount = web3.eth.accounts[2];
var smartContract = web3.eth.contract([
    {
        "constant": true,
        "inputs": [
            {
                "name": "user",
                "type": "address"
            }
        ],
        "name": "get",
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
                "name": "user",
                "type": "address"
            },
            {
                "name": "des",
                "type": "bool[10]"
            }
        ],
        "name": "set",
        "outputs": [
            {
                "name": "",
                "type": "bool[10]"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
]);

var medicalContract = smartContract.at(MEDICAL_CONTRACT);



/*
  form submission
 */


var blood,chol,smok,drink,diab,obes,stroke,cancer,hep,address;
$("#btn").click(function() {

    blood = $("#blood").prop('checked');
    chol = $("#chol").prop('checked');
    smok = $("#smok").prop('checked');
    drink = $("#drink").prop('checked');
    diab = $("#diab").prop('checked');
    obes = $("#obes").prop('checked');
    stroke = $("#stroke").prop('checked');
    cancer = $("#cancer").prop('checked');
    hep = $("#hep").prop('checked');
    cir = $("#cir").prop('checked');
    address =  $("#address").val();

    var record = [blood,chol,smok,drink,diab,obes,stroke,cancer,hep,cir];

    //console.log(address, [blood,chol,smok,drink,diab,obes,stroke,cancer,hep]);
   // medicalContract.set("0x8ceaece9768584b04ab6c1a26a29516e09d78f9d",[true,true,true,true,false,false,false,false,false,false]);
    medicalContract.set(address, record, {from: web3.eth.accounts[1], gas:3000000}, function (error, result) {
        if (error)
            alert("something mch mriguel");
        else alert("Success! record updated.");
    });
    //console.log(medicalContract.get(address));



});