/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  EngineV2,
  EngineV2Interface,
} from "../../../contracts/MotorbikeAttack.sol/EngineV2";

const _abi = [
  {
    inputs: [],
    name: "destroy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "horsePower",
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
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "upgrader",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610235806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063564f6d71146100515780638129fc1c1461006b57806383197ef014610075578063af2697451461007d575b600080fd5b6100596100ae565b60408051918252519081900360200190f35b6100736100b4565b005b6100736101a5565b6100856101a9565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60015481565b600054610100900460ff16806100cd57506100cd6101cb565b806100db575060005460ff16155b610130576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806101d2602e913960400191505060405180910390fd5b600054610100900460ff1615801561015b576000805460ff1961ff0019909116610100171660011790555b6103e8600155600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff1633620100000217905580156101a2576000805461ff00191690555b50565b6000ff5b60005462010000900473ffffffffffffffffffffffffffffffffffffffff1681565b303b159056fe496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564a2646970667358221220998d1397ea537edfff830d31aed0e8a7fafa099741c209160ea4d12d08c621a364736f6c634300060c0033";

type EngineV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EngineV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EngineV2__factory extends ContractFactory {
  constructor(...args: EngineV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<EngineV2> {
    return super.deploy(overrides || {}) as Promise<EngineV2>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): EngineV2 {
    return super.attach(address) as EngineV2;
  }
  override connect(signer: Signer): EngineV2__factory {
    return super.connect(signer) as EngineV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EngineV2Interface {
    return new utils.Interface(_abi) as EngineV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EngineV2 {
    return new Contract(address, _abi, signerOrProvider) as EngineV2;
  }
}