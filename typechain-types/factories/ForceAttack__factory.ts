/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ForceAttack, ForceAttackInterface } from "../ForceAttack";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "feed",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b506040516100dc3803806100dc83398181016040526020811015603157600080fd5b5051600080546001600160a01b039092166001600160a01b0319909216919091179055607a806100626000396000f3fe608060405260043610601c5760003560e01c806337a7b7d8146021575b600080fd5b60276029565b005b60005473ffffffffffffffffffffffffffffffffffffffff16fffea26469706673582212206f8b3aeae34cb219e6b2c788492d89c5ffe43105ab7965e3b808da1cbcb57fec64736f6c634300060c0033";

type ForceAttackConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ForceAttackConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ForceAttack__factory extends ContractFactory {
  constructor(...args: ForceAttackConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ForceAttack> {
    return super.deploy(_address, overrides || {}) as Promise<ForceAttack>;
  }
  override getDeployTransaction(
    _address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_address, overrides || {});
  }
  override attach(address: string): ForceAttack {
    return super.attach(address) as ForceAttack;
  }
  override connect(signer: Signer): ForceAttack__factory {
    return super.connect(signer) as ForceAttack__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ForceAttackInterface {
    return new utils.Interface(_abi) as ForceAttackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ForceAttack {
    return new Contract(address, _abi, signerOrProvider) as ForceAttack;
  }
}
