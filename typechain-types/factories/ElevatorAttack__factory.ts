/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ElevatorAttack,
  ElevatorAttackInterface,
} from "../ElevatorAttack";

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
    inputs: [
      {
        internalType: "uint256",
        name: "_floor",
        type: "uint256",
      },
    ],
    name: "go",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_num",
        type: "uint256",
      },
    ],
    name: "isLastFloor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516102143803806102148339818101604052602081101561003357600080fd5b50516000805460ff60a01b196001600160a01b039093166001600160a01b03199091161791909116600160a01b1790556101a2806100726000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80635f9a4bca1461003b578063b20e73441461006c575b600080fd5b6100586004803603602081101561005157600080fd5b503561008b565b604080519115158252519081900360200190f35b6100896004803603602081101561008257600080fd5b50356100e3565b005b6000805460ff7401000000000000000000000000000000000000000080830482161581027fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff9093169290921792839055910416919050565b60008054604080517fed9a713400000000000000000000000000000000000000000000000000000000815260048101859052905173ffffffffffffffffffffffffffffffffffffffff9092169263ed9a71349260248084019382900301818387803b15801561015157600080fd5b505af1158015610165573d6000803e3d6000fd5b505050505056fea26469706673582212201d1491c750dc5d0b44b1f94a1ad790306f1ae6324aea9e0951258b90b211ee7264736f6c634300060c0033";

type ElevatorAttackConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ElevatorAttackConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ElevatorAttack__factory extends ContractFactory {
  constructor(...args: ElevatorAttackConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ElevatorAttack> {
    return super.deploy(_address, overrides || {}) as Promise<ElevatorAttack>;
  }
  override getDeployTransaction(
    _address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_address, overrides || {});
  }
  override attach(address: string): ElevatorAttack {
    return super.attach(address) as ElevatorAttack;
  }
  override connect(signer: Signer): ElevatorAttack__factory {
    return super.connect(signer) as ElevatorAttack__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ElevatorAttackInterface {
    return new utils.Interface(_abi) as ElevatorAttackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ElevatorAttack {
    return new Contract(address, _abi, signerOrProvider) as ElevatorAttack;
  }
}
