/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  LibraryContract,
  LibraryContractInterface,
} from "../../../contracts/Preservation.sol/LibraryContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
    ],
    name: "setTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060848061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80633beb26c414602d575b600080fd5b604760048036036020811015604157600080fd5b50356049565b005b60005556fea26469706673582212202c9287f0e4b76db10b53096b32c6080e0328bfb44c921962e1aae5416799686f64736f6c634300060c0033";

type LibraryContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LibraryContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LibraryContract__factory extends ContractFactory {
  constructor(...args: LibraryContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LibraryContract> {
    return super.deploy(overrides || {}) as Promise<LibraryContract>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LibraryContract {
    return super.attach(address) as LibraryContract;
  }
  override connect(signer: Signer): LibraryContract__factory {
    return super.connect(signer) as LibraryContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibraryContractInterface {
    return new utils.Interface(_abi) as LibraryContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibraryContract {
    return new Contract(address, _abi, signerOrProvider) as LibraryContract;
  }
}