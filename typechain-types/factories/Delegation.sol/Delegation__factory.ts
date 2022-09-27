/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  Delegation,
  DelegationInterface,
} from "../../Delegation.sol/Delegation";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_delegateAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161018f38038061018f8339818101604052602081101561003357600080fd5b5051600180546001600160a01b039092166001600160a01b031992831617905560008054909116331790556101228061006d6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80638da5cb5b1460a1575b60015460405160009173ffffffffffffffffffffffffffffffffffffffff1690829036908083838082843760405192019450600093509091505080830381855af49150503d80600081146096576040519150601f19603f3d011682016040523d82523d6000602084013e609b565b606091505b50505050005b60a760d0565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60005473ffffffffffffffffffffffffffffffffffffffff168156fea2646970667358221220cdbc39d5e63ffb1a0fca13466687d0c3d0762e2c138285954ffdc8a749ca25c464736f6c634300060c0033";

type DelegationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DelegationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Delegation__factory extends ContractFactory {
  constructor(...args: DelegationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _delegateAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Delegation> {
    return super.deploy(
      _delegateAddress,
      overrides || {}
    ) as Promise<Delegation>;
  }
  override getDeployTransaction(
    _delegateAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_delegateAddress, overrides || {});
  }
  override attach(address: string): Delegation {
    return super.attach(address) as Delegation;
  }
  override connect(signer: Signer): Delegation__factory {
    return super.connect(signer) as Delegation__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DelegationInterface {
    return new utils.Interface(_abi) as DelegationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Delegation {
    return new Contract(address, _abi, signerOrProvider) as Delegation;
  }
}
