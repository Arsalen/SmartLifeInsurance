pragma solidity ^0.4.0;

import './Data.sol';

contract Medical {

    Data data = Data(0xeed6dc2aff342a1e0a7f45e79402a6253f9980ec);
    bool[10] deseases;

    function set (
        address user,
        bool[10] des
    )public returns(bool[10]) {
        deseases = des ;
        g(deseases);
        data.UpdateMedical(user,deseases);
        return (deseases);
    }

    function get(address user) public constant returns (bool[10]){
        return data.CheckMedical(user);
    }
    function g(bool[10] storage storageArray) internal {}
}
