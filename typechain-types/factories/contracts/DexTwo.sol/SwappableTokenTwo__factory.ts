/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SwappableTokenTwo,
  SwappableTokenTwoInterface,
} from "../../../contracts/DexTwo.sol/SwappableTokenTwo";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "dexInstance",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
  "0x60806040523480156200001157600080fd5b5060405162000f0b38038062000f0b833981810160405260808110156200003757600080fd5b8151602083018051604051929492938301929190846401000000008211156200005f57600080fd5b9083019060208201858111156200007557600080fd5b82516401000000008111828201881017156200009057600080fd5b82525081516020918201929091019080838360005b83811015620000bf578181015183820152602001620000a5565b50505050905090810190601f168015620000ed5780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011157600080fd5b9083019060208201858111156200012757600080fd5b82516401000000008111828201881017156200014257600080fd5b82525081516020918201929091019080838360005b838110156200017157818101518382015260200162000157565b50505050905090810190601f1680156200019f5780820380516001836020036101000a031916815260200191505b5060405260209081015185519093508592508491620001c4916003918501906200039c565b508051620001da9060049060208401906200039c565b50506005805460ff1916601217905550620001f6338262000226565b5050600580546001600160a01b0390931661010002610100600160a81b0319909316929092179091555062000438565b6001600160a01b03821662000282576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b620002906000838362000335565b620002ac816002546200033a60201b6200064b1790919060201c565b6002556001600160a01b03821660009081526020818152604090912054620002df9183906200064b6200033a821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b505050565b60008282018381101562000395576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620003df57805160ff19168380011785556200040f565b828001600101855582156200040f579182015b828111156200040f578251825591602001919060010190620003f2565b506200041d92915062000421565b5090565b5b808211156200041d576000815560010162000422565b610ac380620004486000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c806370a0823111610081578063a9059cbb1161005b578063a9059cbb1461028a578063dd62ed3e146102b6578063e1f21c67146102e4576100d4565b806370a082311461023057806395d89b4114610256578063a457c2d71461025e576100d4565b806323b872dd116100b257806323b872dd146101b0578063313ce567146101e65780633950935114610204576100d4565b806306fdde03146100d9578063095ea7b31461015657806318160ddd14610196575b600080fd5b6100e161031a565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561011b578181015183820152602001610103565b50505050905090810190601f1680156101485780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101826004803603604081101561016c57600080fd5b506001600160a01b0381351690602001356103b0565b604080519115158252519081900360200190f35b61019e6103cd565b60408051918252519081900360200190f35b610182600480360360608110156101c657600080fd5b506001600160a01b038135811691602081013590911690604001356103d3565b6101ee61045b565b6040805160ff9092168252519081900360200190f35b6101826004803603604081101561021a57600080fd5b506001600160a01b038135169060200135610464565b61019e6004803603602081101561024657600080fd5b50356001600160a01b03166104b2565b6100e16104cd565b6101826004803603604081101561027457600080fd5b506001600160a01b03813516906020013561052e565b610182600480360360408110156102a057600080fd5b506001600160a01b038135169060200135610596565b61019e600480360360408110156102cc57600080fd5b506001600160a01b03813581169160200135166105aa565b610182600480360360608110156102fa57600080fd5b506001600160a01b038135811691602081013590911690604001356105d5565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103a65780601f1061037b576101008083540402835291602001916103a6565b820191906000526020600020905b81548152906001019060200180831161038957829003601f168201915b5050505050905090565b60006103c46103bd6106a5565b84846106a9565b50600192915050565b60025490565b60006103e0848484610795565b610450846103ec6106a5565b61044b856040518060600160405280602881526020016109f8602891396001600160a01b038a1660009081526001602052604081209061042a6106a5565b6001600160a01b0316815260208101919091526040016000205491906108f0565b6106a9565b5060015b9392505050565b60055460ff1690565b60006103c46104716106a5565b8461044b85600160006104826106a5565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549061064b565b6001600160a01b031660009081526020819052604090205490565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103a65780601f1061037b576101008083540402835291602001916103a6565b60006103c461053b6106a5565b8461044b85604051806060016040528060258152602001610a6960259139600160006105656106a5565b6001600160a01b03908116825260208083019390935260409182016000908120918d168152925290205491906108f0565b60006103c46105a36106a5565b8484610795565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6005546000906001600160a01b03858116610100909204161415610640576040805162461bcd60e51b815260206004820152600f60248201527f496e76616c6964417070726f7665720000000000000000000000000000000000604482015290519081900360640190fd5b6104548484846106a9565b600082820183811015610454576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b3390565b6001600160a01b0383166106ee5760405162461bcd60e51b8152600401808060200182810382526024815260200180610a456024913960400191505060405180910390fd5b6001600160a01b0382166107335760405162461bcd60e51b81526004018080602001828103825260228152602001806109b06022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166107da5760405162461bcd60e51b8152600401808060200182810382526025815260200180610a206025913960400191505060405180910390fd5b6001600160a01b03821661081f5760405162461bcd60e51b815260040180806020018281038252602381526020018061098d6023913960400191505060405180910390fd5b61082a838383610987565b610867816040518060600160405280602681526020016109d2602691396001600160a01b03861660009081526020819052604090205491906108f0565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610896908261064b565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000818484111561097f5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561094457818101518382015260200161092c565b50505050905090810190601f1680156109715780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220d8eff40e312df9c8488336e127efe101cba52a3d7cb56b9fa825efeab21ab14f64736f6c634300060c0033";

type SwappableTokenTwoConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwappableTokenTwoConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SwappableTokenTwo__factory extends ContractFactory {
  constructor(...args: SwappableTokenTwoConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    dexInstance: PromiseOrValue<string>,
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    initialSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SwappableTokenTwo> {
    return super.deploy(
      dexInstance,
      name,
      symbol,
      initialSupply,
      overrides || {}
    ) as Promise<SwappableTokenTwo>;
  }
  override getDeployTransaction(
    dexInstance: PromiseOrValue<string>,
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    initialSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      dexInstance,
      name,
      symbol,
      initialSupply,
      overrides || {}
    );
  }
  override attach(address: string): SwappableTokenTwo {
    return super.attach(address) as SwappableTokenTwo;
  }
  override connect(signer: Signer): SwappableTokenTwo__factory {
    return super.connect(signer) as SwappableTokenTwo__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwappableTokenTwoInterface {
    return new utils.Interface(_abi) as SwappableTokenTwoInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SwappableTokenTwo {
    return new Contract(address, _abi, signerOrProvider) as SwappableTokenTwo;
  }
}