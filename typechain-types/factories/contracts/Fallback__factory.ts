/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Fallback, FallbackInterface } from "../../contracts/Fallback";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "contribute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "contributions",
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
    name: "getContribution",
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
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
  "0x608060405234801561001057600080fd5b50600180546001600160a01b031916339081179091556000908152602081905260409020683635c9adc5dea0000090556102e28061004f6000396000f3fe60806040526004361061005e5760003560e01c80638da5cb5b116100435780638da5cb5b1461010c578063d7bb99ba1461013d578063f10fdf5c14610145576100ab565b80633ccfd60b146100b057806342e94c90146100c7576100ab565b366100ab5760003411801561008157503360009081526020819052604090205415155b61008a57600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff191633179055005b600080fd5b3480156100bc57600080fd5b506100c561015a565b005b3480156100d357600080fd5b506100fa600480360360208110156100ea57600080fd5b50356001600160a01b031661020f565b60408051918252519081900360200190f35b34801561011857600080fd5b50610121610221565b604080516001600160a01b039092168252519081900360200190f35b6100c5610230565b34801561015157600080fd5b506100fa610299565b6001546001600160a01b031633146101d357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f63616c6c6572206973206e6f7420746865206f776e6572000000000000000000604482015290519081900360640190fd5b6001546040516001600160a01b03909116904780156108fc02916000818181858888f1935050505015801561020c573d6000803e3d6000fd5b50565b60006020819052908152604090205481565b6001546001600160a01b031681565b66038d7ea4c68000341061024357600080fd5b3360008181526020819052604080822080543401908190556001546001600160a01b0316835290822054929091521115610297576001805473ffffffffffffffffffffffffffffffffffffffff1916331790555b565b336000908152602081905260409020549056fea26469706673582212202255efea2433675fab03d26e2e13c96805335f3cf9b56f1797597e831ed3287f64736f6c634300060c0033";

type FallbackConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FallbackConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Fallback__factory extends ContractFactory {
  constructor(...args: FallbackConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Fallback> {
    return super.deploy(overrides || {}) as Promise<Fallback>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Fallback {
    return super.attach(address) as Fallback;
  }
  override connect(signer: Signer): Fallback__factory {
    return super.connect(signer) as Fallback__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FallbackInterface {
    return new utils.Interface(_abi) as FallbackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Fallback {
    return new Contract(address, _abi, signerOrProvider) as Fallback;
  }
}
