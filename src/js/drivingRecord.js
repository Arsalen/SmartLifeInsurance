/*
     police de morour.
 */




const DRIVING_CONTRACT = '0x611dcba8a88cc821f11746a894560b7ac86ccfb5';


/*
web3 init
 */


if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];
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
                "type": "bool[7]"
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
                "name": "viol",
                "type": "bool[7]"
            }
        ],
        "name": "set",
        "outputs": [
            {
                "name": "",
                "type": "bool[7]"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
]);
var drivingContract= smartContract.at(DRIVING_CONTRACT);



/*
  form submission
 */

var drunk ,red,reck,shoulder,seat, address, lic,trf;


$("#btn").click(function() {

    drunk = $("#drunk").prop('checked');
    red = $("#red").prop('checked');
    reck = $("#reck").prop('checked');
    shoulder = $("#shoulder").prop('checked');
    seat = $("#seat").prop('checked');
    address = $("#address").val();
    lic = $("#lic").prop('checked');
    trf = $("#trf").prop('checked');

    var record = [drunk ,red,reck,shoulder,seat,lic,trf] ;

    //console.log(address,drunk ,red,reck,shoulder,seat);
    drivingContract.set(address,record, {from: web3.eth.accounts[2], gas:3000000}, function (error, result) {

        if (error)
            alert("something mch mriguel");
        else alert("Success! record updated.");
    });
    //console.log(drivingContract.get(address));


});