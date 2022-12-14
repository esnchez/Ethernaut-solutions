/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TelephoneAttack,
  TelephoneAttackInterface,
} from "../TelephoneAttack";

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
    name: "attack",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516101543803806101548339818101604052602081101561003357600080fd5b5051600080546001600160a01b039092166001600160a01b031990921691909117905560f0806100646000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80639e5faafc14602d575b600080fd5b60336035565b005b60008054604080517fa6f9dae1000000000000000000000000000000000000000000000000000000008152326004820152905173ffffffffffffffffffffffffffffffffffffffff9092169263a6f9dae19260248084019382900301818387803b15801560a157600080fd5b505af115801560b4573d6000803e3d6000fd5b5050505056fea26469706673582212201663f149d4a74bc69ed9264d5991073626e83999095b4544bc2dc02b1cb117ac64736f6c634300060c0033";

type TelephoneAttackConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TelephoneAttackConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TelephoneAttack__factory extends ContractFactory {
  constructor(...args: TelephoneAttackConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TelephoneAttack> {
    return super.deploy(_address, overrides || {}) as Promise<TelephoneAttack>;
  }
  override getDeployTransaction(
    _address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_address, overrides || {});
  }
  override attach(address: string): TelephoneAttack {
    return super.attach(address) as TelephoneAttack;
  }
  override connect(signer: Signer): TelephoneAttack__factory {
    return super.connect(signer) as TelephoneAttack__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TelephoneAttackInterface {
    return new utils.Interface(_abi) as TelephoneAttackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TelephoneAttack {
    return new Contract(address, _abi, signerOrProvider) as TelephoneAttack;
  }
}
