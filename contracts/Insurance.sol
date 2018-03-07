pragma solidity ^0.4.0;

import './Data.sol';

contract Insurance {

    Data data = Data(0xeed6dc2aff342a1e0a7f45e79402a6253f9980ec);
    int age;
    bool gender;
    string work;
    string nationality;
    address user;
    uint256[17] Weights;
    uint256[17] W;
    bool[10] M;
    bool[7] D;


    function CreateUserMedical(address UserAddress) returns(bool[10]){

        M = [true,true,true,true,true,true,true,true,true,true];
        data.UpdateMedical(UserAddress, M);

        return(M);
    }

    function CreateUserDriving(address UserAddress) returns(bool[7]){
        D = [true,true,true,true,true,true,true];
        data.UpdateDriving(UserAddress, D);
        return(D);
    }

    function CreateAgencie(address AgencieAddress)returns(uint256[17]){
        W = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        data.UpdateWeight(AgencieAddress, W);
        return(W);
    }

    function SetWeights(address AgencieAddress, uint256[17] Wghts) returns(uint256[17]){
        Weights = Wghts;
        g(Weights);
        data.UpdateWeight(AgencieAddress, Weights);
        return (Weights);
    }

    function GetWeights(address AgencieAddress) public constant returns (uint256[17]){
        return data.CheckWeights(AgencieAddress);
    }

    function Sum(address Agencie, address User) public constant returns (uint256){
        return data.Score(Agencie, User);
    }

    function g(uint256[17] storage storageArray) internal {}
}
