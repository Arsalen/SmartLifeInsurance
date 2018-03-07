pragma solidity ^0.4.0;

contract Data {


    mapping(address => bool[10]) MedicalSheet;

    mapping(address => bool[7]) DrivingSheet;

    mapping(address => uint256[17]) WeightSheet;

    address[] aux;

    address[] MedicalUsers;

    address[] DrivingUsers;


    uint256 Result;


    function UpdateWeight(address AgencieAddress, uint256[17] Weights) external {

        WeightSheet[AgencieAddress] = Weights;

    }


    function CheckWeights(address AgencieAddress) public constant returns (uint256[17]) {

        return WeightSheet[AgencieAddress];

    }


    function UpdateMedical(address UserAddress, bool[10] MedicalResult) external {

        MedicalSheet[UserAddress] = MedicalResult;

    }


    function CheckMedical(address UserAddress) public constant returns (bool[10]) {

        return MedicalSheet[UserAddress];

    }


    function UpdateDriving(address UserAddress, bool[7] DrivingResult) external {

        DrivingSheet[UserAddress] = DrivingResult;

    }


    function CheckDriving(address AgencieAddress) public constant returns (bool[7]) {

        return (DrivingSheet[AgencieAddress]);

    }


    function GetMedicalUsers() public constant returns (address[]){

        return MedicalUsers;

    }


    function GetDrivingUsers() public constant returns (address[]){

        return DrivingUsers;

    }


    function Score(address AgencieAddress, address UserAddress) public constant returns (uint256){

        Result = 0;

        uint256[17] UserResult;


        for (uint m = 0; m < 10; m++) {

            if (MedicalSheet[UserAddress][m] == false) {UserResult[m] = 1;}

        }


        for (uint d = 0; d < 7; d++) {

            if (DrivingSheet[UserAddress][d] == false) {UserResult[d + 10] = 1;}

        }


        for (uint i = 0; i < 17; i++) {

            Result = Result + WeightSheet[AgencieAddress][i] * UserResult[i];

        }


        return Result;

    }

    function g(address[] storage storageArray) internal {}

}