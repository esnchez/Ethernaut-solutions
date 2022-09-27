/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ReentranceAttack,
  ReentranceAttackInterface,
} from "../ReentranceAttack";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_address",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "fund",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516102803803806102808339818101604052602081101561003357600080fd5b5051600180546001600160a01b0319166001600160a01b0390921691909117905561021d806100636000396000f3fe60806040526004361061002d5760003560e01c80633ccfd60b14610041578063b60d4288146100565761003c565b3661003c5761003a61005e565b005b600080fd5b34801561004d57600080fd5b5061003a61005e565b61003a610175565b60015473ffffffffffffffffffffffffffffffffffffffff163180156101725760005481106100ff576001546000805460408051632e1a7d4d60e01b815260048101929092525173ffffffffffffffffffffffffffffffffffffffff90931692632e1a7d4d9260248084019391929182900301818387803b1580156100e257600080fd5b505af11580156100f6573d6000803e3d6000fd5b50505050610172565b60015460408051632e1a7d4d60e01b815260048101849052905173ffffffffffffffffffffffffffffffffffffffff90921691632e1a7d4d9160248082019260009290919082900301818387803b15801561015957600080fd5b505af115801561016d573d6000803e3d6000fd5b505050505b50565b346000818155600154604080517e362a95000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff9092169362362a9593909260248084019382900301818588803b15801561015957600080fdfea2646970667358221220e7ca5ec1a81b2fc266dbfcabc4b2e91f73ef11089944061901992304c9e28c9264736f6c634300060c0033";

type ReentranceAttackConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReentranceAttackConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReentranceAttack__factory extends ContractFactory {
  constructor(...args: ReentranceAttackConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ReentranceAttack> {
    return super.deploy(_address, overrides || {}) as Promise<ReentranceAttack>;
  }
  override getDeployTransaction(
    _address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_address, overrides || {});
  }
  override attach(address: string): ReentranceAttack {
    return super.attach(address) as ReentranceAttack;
  }
  override connect(signer: Signer): ReentranceAttack__factory {
    return super.connect(signer) as ReentranceAttack__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReentranceAttackInterface {
    return new utils.Interface(_abi) as ReentranceAttackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReentranceAttack {
    return new Contract(address, _abi, signerOrProvider) as ReentranceAttack;
  }
}
