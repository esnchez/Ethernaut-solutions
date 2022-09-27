// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import '@openzeppelin/contracts/math/SafeMath.sol';
import "./GatekeeperOne.sol";

contract GatekeeperOneAttack {

  using SafeMath for uint256;
  GatekeeperOne gatekeeperOneContract;

  constructor(address _address) public{
    gatekeeperOneContract = GatekeeperOne(_address);
  }

  function attack(bytes8 _key) public{
    gatekeeperOneContract.enter(_key);
  }


 
}