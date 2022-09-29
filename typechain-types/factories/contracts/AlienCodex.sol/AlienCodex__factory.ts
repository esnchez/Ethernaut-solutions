/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AlienCodex,
  AlienCodexInterface,
} from "../../../contracts/AlienCodex.sol/AlienCodex";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "i",
        type: "uint256",
      },
      {
        name: "_content",
        type: "bytes32",
      },
    ],
    name: "revise",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "contact",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "retract",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "make_contact",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "codex",
    outputs: [
      {
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_content",
        type: "bytes32",
      },
    ],
    name: "record",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
];

const _bytecode =
  "0x60806040526000610017640100000000610066810204565b60008054600160a060020a031916600160a060020a0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006a565b3390565b61065b806100796000396000f3fe608060405234801561001057600080fd5b50600436106100c0576000357c010000000000000000000000000000000000000000000000000000000090048063715018a61161009357806394bd75691161007857806394bd75691461014f578063b5c645bd1461017e578063f2fde38b1461019b576100c0565b8063715018a6146101165780638da5cb5b1461011e576100c0565b80630339f300146100c557806333a8c45a146100ea57806347f57b321461010657806358699c551461010e575b600080fd5b6100e8600480360360408110156100db57600080fd5b50803590602001356101ce565b005b6100f2610214565b604080519115158252519081900360200190f35b6100e8610235565b6100e8610271565b6100e86102b2565b6101266103a7565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61016c6004803603602081101561016557600080fd5b50356103c4565b60408051918252519081900360200190f35b6100e86004803603602081101561019457600080fd5b50356103e3565b6100e8600480360360208110156101b157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661043d565b60005474010000000000000000000000000000000000000000900460ff1615156101f457fe5b8060018381548110151561020457fe5b6000918252602090912001555050565b60005474010000000000000000000000000000000000000000900460ff1681565b60005474010000000000000000000000000000000000000000900460ff16151561025b57fe5b600180549061026e9060001983016105c2565b50565b600080547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1674010000000000000000000000000000000000000000179055565b6102ba6105be565b60005473ffffffffffffffffffffffffffffffffffffffff90811691161461034357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60005473ffffffffffffffffffffffffffffffffffffffff165b90565b60018054829081106103d257fe5b600091825260209091200154905081565b60005474010000000000000000000000000000000000000000900460ff16151561040957fe5b6001805480820182556000919091527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60155565b6104456105be565b60005473ffffffffffffffffffffffffffffffffffffffff9081169116146104ce57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116151561053c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061060a6026913960400191505060405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b3390565b8154818355818111156105e6576000838152602090206105e69181019083016105eb565b505050565b6103c191905b8082111561060557600081556001016105f1565b509056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a165627a7a72305820b0b0ee25f027310d2c4c3d57821e960872e81c0817fe04ee2b77d360b7f86f700029";

type AlienCodexConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AlienCodexConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AlienCodex__factory extends ContractFactory {
  constructor(...args: AlienCodexConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AlienCodex> {
    return super.deploy(overrides || {}) as Promise<AlienCodex>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AlienCodex {
    return super.attach(address) as AlienCodex;
  }
  override connect(signer: Signer): AlienCodex__factory {
    return super.connect(signer) as AlienCodex__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AlienCodexInterface {
    return new utils.Interface(_abi) as AlienCodexInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AlienCodex {
    return new Contract(address, _abi, signerOrProvider) as AlienCodex;
  }
}
