pragma solidity ^0.4.0;

import './Data.sol';

contract Driving {

    Data data = Data(0xeed6dc2aff342a1e0a7f45e79402a6253f9980ec);
    bool[7] violations ;

    function set(
        address user,
        bool[7]  viol
    ) public returns (bool[7]){
        violations = viol;
        g(violations);
        data.UpdateDriving(user,violations);
        return (violations);
    }

    function get(address user) public constant returns(bool[7]){
        return data.CheckDriving(user);
    }

    function g(bool[7] storage storageArray) internal {}
}
