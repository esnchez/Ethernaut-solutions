/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Privacy, PrivacyInterface } from "../Privacy";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32[3]",
        name: "_data",
        type: "bytes32[3]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ID",
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
    name: "locked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "_key",
        type: "bytes16",
      },
    ],
    name: "unlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260008054600160ff19918216811790925542918290556002805461ff00600a919093161761ff0019169190911763ffff000019166201000061ffff9093169290920291909117905534801561005857600080fd5b506040516102083803806102088339818101604052606081101561007b57600080fd5b506100886003828161008f565b50506100e2565b82600381019282156100bd579160200282015b828111156100bd5782518255916020019190600101906100a2565b506100c99291506100cd565b5090565b5b808211156100c957600081556001016100ce565b610117806100f16000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c8063b3cea217146041578063cf309012146059578063e1afb08c146073575b600080fd5b604760a2565b60408051918252519081900360200190f35b605f60a8565b604080519115158252519081900360200190f35b60a060048036036020811015608757600080fd5b50356fffffffffffffffffffffffffffffffff191660b1565b005b60015481565b60005460ff1681565b6005546fffffffffffffffffffffffffffffffff1982811691161460d457600080fd5b506000805460ff1916905556fea2646970667358221220f358586daf91bf68f79bd55f6dd6658304f5002a45608ddb0cb1bbfc9c169f6e64736f6c634300060c0033";

type PrivacyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PrivacyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Privacy__factory extends ContractFactory {
  constructor(...args: PrivacyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _data: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Privacy> {
    return super.deploy(_data, overrides || {}) as Promise<Privacy>;
  }
  override getDeployTransaction(
    _data: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_data, overrides || {});
  }
  override attach(address: string): Privacy {
    return super.attach(address) as Privacy;
  }
  override connect(signer: Signer): Privacy__factory {
    return super.connect(signer) as Privacy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PrivacyInterface {
    return new utils.Interface(_abi) as PrivacyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Privacy {
    return new Contract(address, _abi, signerOrProvider) as Privacy;
  }
}
