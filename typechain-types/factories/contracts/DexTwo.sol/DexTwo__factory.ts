/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  DexTwo,
  DexTwoInterface,
} from "../../../contracts/DexTwo.sol/DexTwo";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "add_liquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "getSwapAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token1",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token2",
        type: "address",
      },
    ],
    name: "setTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token1",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token2",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b610b558061007d6000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80638da5cb5b11610081578063df791e501161005b578063df791e50146101da578063f2fde38b14610210578063f7888aec14610236576100c9565b80638da5cb5b1461019c578063cbc7854e146101a4578063d21220a7146101d2576100c9565b8063264e8893116100b2578063264e889314610120578063635bc0c21461014c578063715018a614610194576100c9565b8063095ea7b3146100ce57806325be124e146100fc575b600080fd5b6100fa600480360360408110156100e457600080fd5b506001600160a01b038135169060200135610264565b005b610104610378565b604080516001600160a01b039092168252519081900360200190f35b6100fa6004803603604081101561013657600080fd5b506001600160a01b038135169060200135610387565b6101826004803603606081101561016257600080fd5b506001600160a01b03813581169160208101359091169060400135610446565b60408051918252519081900360200190f35b6100fa61055e565b61010461061f565b6100fa600480360360408110156101ba57600080fd5b506001600160a01b038135811691602001351661062e565b6101046106d3565b6100fa600480360360608110156101f057600080fd5b506001600160a01b038135811691602081013590911690604001356106e2565b6100fa6004803603602081101561022657600080fd5b50356001600160a01b031661095c565b6101826004803603604081101561024c57600080fd5b506001600160a01b0381358116916020013516610a73565b6001546040805163e1f21c6760e01b81523360048201526001600160a01b038581166024830152604482018590529151919092169163e1f21c679160648083019260209291908290030181600087803b1580156102c057600080fd5b505af11580156102d4573d6000803e3d6000fd5b505050506040513d60208110156102ea57600080fd5b50506002546040805163e1f21c6760e01b81523360048201526001600160a01b038581166024830152604482018590529151919092169163e1f21c679160648083019260209291908290030181600087803b15801561034857600080fd5b505af115801561035c573d6000803e3d6000fd5b505050506040513d602081101561037257600080fd5b50505050565b6002546001600160a01b031681565b61038f610af5565b6000546001600160a01b039081169116146103f1576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b604080516323b872dd60e01b81523360048201523060248201526044810183905290516001600160a01b038416916323b872dd9160648083019260209291908290030181600087803b15801561034857600080fd5b6000836001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561049557600080fd5b505afa1580156104a9573d6000803e3d6000fd5b505050506040513d60208110156104bf57600080fd5b5051604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290516001600160a01b038616916370a08231916024808301926020929190829003018186803b15801561052057600080fd5b505afa158015610534573d6000803e3d6000fd5b505050506040513d602081101561054a57600080fd5b505183028161055557fe5b04949350505050565b610566610af5565b6000546001600160a01b039081169116146105c8576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b6000546001600160a01b031690565b610636610af5565b6000546001600160a01b03908116911614610698576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600180546001600160a01b0393841673ffffffffffffffffffffffffffffffffffffffff199182161790915560028054929093169116179055565b6001546001600160a01b031681565b80836001600160a01b03166370a08231336040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561073057600080fd5b505afa158015610744573d6000803e3d6000fd5b505050506040513d602081101561075a57600080fd5b505110156107af576040805162461bcd60e51b815260206004820152601260248201527f4e6f7420656e6f75676820746f20737761700000000000000000000000000000604482015290519081900360640190fd5b60006107bc848484610446565b604080516323b872dd60e01b81523360048201523060248201526044810185905290519192506001600160a01b038616916323b872dd916064808201926020929091908290030181600087803b15801561081557600080fd5b505af1158015610829573d6000803e3d6000fd5b505050506040513d602081101561083f57600080fd5b5050604080517f095ea7b30000000000000000000000000000000000000000000000000000000081523060048201526024810183905290516001600160a01b0385169163095ea7b39160448083019260209291908290030181600087803b1580156108a957600080fd5b505af11580156108bd573d6000803e3d6000fd5b505050506040513d60208110156108d357600080fd5b5050604080516323b872dd60e01b81523060048201523360248201526044810183905290516001600160a01b038516916323b872dd9160648083019260209291908290030181600087803b15801561092a57600080fd5b505af115801561093e573d6000803e3d6000fd5b505050506040513d602081101561095457600080fd5b505050505050565b610964610af5565b6000546001600160a01b039081169116146109c6576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b038116610a0b5760405162461bcd60e51b8152600401808060200182810382526026815260200180610afa6026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000826001600160a01b03166370a08231836040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610ac257600080fd5b505afa158015610ad6573d6000803e3d6000fd5b505050506040513d6020811015610aec57600080fd5b50519392505050565b339056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a2646970667358221220e2d00037bbdf47fd1ffd79570e678ccaf08b2f00d9b3441918a76c0824c9d5e864736f6c634300060c0033";

type DexTwoConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DexTwoConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DexTwo__factory extends ContractFactory {
  constructor(...args: DexTwoConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DexTwo> {
    return super.deploy(overrides || {}) as Promise<DexTwo>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DexTwo {
    return super.attach(address) as DexTwo;
  }
  override connect(signer: Signer): DexTwo__factory {
    return super.connect(signer) as DexTwo__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DexTwoInterface {
    return new utils.Interface(_abi) as DexTwoInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DexTwo {
    return new Contract(address, _abi, signerOrProvider) as DexTwo;
  }
}