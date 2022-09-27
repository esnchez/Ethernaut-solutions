/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Elevator, ElevatorInterface } from "../../Elevator.sol/Elevator";

const _abi = [
  {
    inputs: [],
    name: "floor",
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
        internalType: "uint256",
        name: "_floor",
        type: "uint256",
      },
    ],
    name: "goTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "top",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101f0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80634069536314610046578063ed9a713414610060578063fe6dcdba1461007f575b600080fd5b61004e61009b565b60408051918252519081900360200190f35b61007d6004803603602081101561007657600080fd5b50356100a1565b005b6100876101b1565b604080519115158252519081900360200190f35b60015481565b60408051632fcd25e560e11b815260048101839052905133918291635f9a4bca916024808201926020929091908290030181600087803b1580156100e457600080fd5b505af11580156100f8573d6000803e3d6000fd5b505050506040513d602081101561010e57600080fd5b50516101ad57600182905560408051632fcd25e560e11b815260048101849052905173ffffffffffffffffffffffffffffffffffffffff831691635f9a4bca9160248083019260209291908290030181600087803b15801561016f57600080fd5b505af1158015610183573d6000803e3d6000fd5b505050506040513d602081101561019957600080fd5b50516000805460ff19169115159190911790555b5050565b60005460ff168156fea264697066735822122099da5ea3bba546979313896356df69dedd7e5759e2d9a9ebfc2e5a2317b4273564736f6c634300060c0033";

type ElevatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ElevatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Elevator__factory extends ContractFactory {
  constructor(...args: ElevatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Elevator> {
    return super.deploy(overrides || {}) as Promise<Elevator>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Elevator {
    return super.attach(address) as Elevator;
  }
  override connect(signer: Signer): Elevator__factory {
    return super.connect(signer) as Elevator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ElevatorInterface {
    return new utils.Interface(_abi) as ElevatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Elevator {
    return new Contract(address, _abi, signerOrProvider) as Elevator;
  }
}
