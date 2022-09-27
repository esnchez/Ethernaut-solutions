/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CoinFlip, CoinFlipInterface } from "../CoinFlip";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "consecutiveWins",
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
        internalType: "bool",
        name: "_guess",
        type: "bool",
      },
    ],
    name: "flip",
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
  "0x6080604052600160ff1b60025534801561001857600080fd5b50600080556102d28061002c6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631d263f671461003b578063e6f334d71461006e575b600080fd5b61005a6004803603602081101561005157600080fd5b50351515610088565b604080519115158252519081900360200190f35b61007661010f565b60408051918252519081900360200190f35b600080610096436001610115565b600154904091508114156100a957600080fd5b60018190556002546000906100bf90839061015e565b90506000816001146100d25760006100d5565b60015b905084151581151514156100fa575050600080546001908101909155915061010a9050565b50506000808055915061010a9050565b919050565b60005481565b600061015783836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506101a0565b9392505050565b600061015783836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610237565b6000818484111561022f5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156101f45781810151838201526020016101dc565b50505050905090810190601f1680156102215780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600081836102865760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156101f45781810151838201526020016101dc565b50600083858161029257fe5b049594505050505056fea26469706673582212209055f68453852bddfe24046cbc93a50d9d48e433dd7cdef98293c57dc423c0fb64736f6c634300060c0033";

type CoinFlipConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CoinFlipConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CoinFlip__factory extends ContractFactory {
  constructor(...args: CoinFlipConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CoinFlip> {
    return super.deploy(overrides || {}) as Promise<CoinFlip>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CoinFlip {
    return super.attach(address) as CoinFlip;
  }
  override connect(signer: Signer): CoinFlip__factory {
    return super.connect(signer) as CoinFlip__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CoinFlipInterface {
    return new utils.Interface(_abi) as CoinFlipInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoinFlip {
    return new Contract(address, _abi, signerOrProvider) as CoinFlip;
  }
}