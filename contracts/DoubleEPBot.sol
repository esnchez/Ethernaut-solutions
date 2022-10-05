// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
// import "hardhat/console.sol";

interface IDetectionBot {
    function handleTransaction(address user, bytes calldata msgData) external;
}
interface IForta {
    function setDetectionBot(address detectionBotAddress) external;
    function notify(address user, bytes calldata msgData) external;
    function raiseAlert(address user) external;
}

contract DetectionBot is IDetectionBot {

    address internal caller;
    bytes internal signature;

    constructor(address _caller, bytes memory _signature) public{
        caller = _caller;
        signature = _signature;
        
    }

    function handleTransaction(address user, bytes calldata msgData) override external{
        
        // console.log("Current msg.data of delegateTransfer tx %s", msgData);
        //decoding msg.data payload (after function signature) to extract third parameter address
        (address to, uint256 value, address origSender) = abi.decode(msgData[4:], (address, uint256, address));

        bytes memory funcSignature = abi.encodePacked(msgData[0], msgData[1], msgData[2], msgData[3]);
        // console.log("Extracted function signature from msg.data", funcSignature);
        // console.log("Pre-set signature", signature);
        
        //is the origSender equals to cryptovault address? 
        //it is calling us via delegateTransfer?
        if(caller == origSender && keccak256(funcSignature) == keccak256(signature)){
            IForta(msg.sender).raiseAlert(user);
        }
    }
}

