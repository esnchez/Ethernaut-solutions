/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  NaughtCoin,
  NaughtCoinInterface,
} from "../../contracts/NaughtCoin";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_player",
        type: "address",
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
    inputs: [],
    name: "INITIAL_SUPPLY",
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
    name: "player",
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
    name: "timeLock",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
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
  "0x6080604052426312cc0300016006553480156200001b57600080fd5b5060405162000e4938038062000e49833981810160405260208110156200004157600080fd5b5051604080518082018252600a8152692730bab3b43a21b7b4b760b11b6020828101918252835180850190945260038085526203078360ec1b918501919091528251929392620000929290620002b5565b508051620000a8906004906020840190620002b5565b50506005805460ff1916601217905550600880546001600160a01b0383166001600160a01b0319909116179055620000df62000147565b60ff16600a0a620f424002600781905560085462000109916001600160a01b039091169062000150565b60085460075460408051918252516001600160a01b039092169160009160008051602062000e29833981519152919081900360200190a35062000351565b60055460ff1690565b6001600160a01b038216620001ac576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b620001ba600083836200024e565b620001d6816002546200025360201b620006351790919060201c565b6002556001600160a01b03821660009081526020818152604090912054620002099183906200063562000253821b17901c565b6001600160a01b03831660008181526020818152604080832094909455835185815293519293919260008051602062000e298339815191529281900390910190a35050565b505050565b600082820183811015620002ae576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002f857805160ff191683800117855562000328565b8280016001018555821562000328579182015b82811115620003285782518255916020019190600101906200030b565b50620003369291506200033a565b5090565b5b808211156200033657600081556001016200033b565b610ac880620003616000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806348db5f891161008c578063a457c2d711610066578063a457c2d7146102a0578063a9059cbb146102cc578063d085835a146102f8578063dd62ed3e14610300576100ea565b806348db5f891461024e57806370a082311461027257806395d89b4114610298576100ea565b806323b872dd116100c857806323b872dd146101c65780632ff2e9dc146101fc578063313ce567146102045780633950935114610222576100ea565b806306fdde03146100ef578063095ea7b31461016c57806318160ddd146101ac575b600080fd5b6100f761032e565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610131578181015183820152602001610119565b50505050905090810190601f16801561015e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101986004803603604081101561018257600080fd5b506001600160a01b0381351690602001356103c4565b604080519115158252519081900360200190f35b6101b46103e2565b60408051918252519081900360200190f35b610198600480360360608110156101dc57600080fd5b506001600160a01b038135811691602081013590911690604001356103e8565b6101b461046f565b61020c610475565b6040805160ff9092168252519081900360200190f35b6101986004803603604081101561023857600080fd5b506001600160a01b03813516906020013561047e565b6102566104cc565b604080516001600160a01b039092168252519081900360200190f35b6101b46004803603602081101561028857600080fd5b50356001600160a01b03166104db565b6100f76104f6565b610198600480360360408110156102b657600080fd5b506001600160a01b038135169060200135610557565b610198600480360360408110156102e257600080fd5b506001600160a01b0381351690602001356105bf565b6101b4610604565b6101b46004803603604081101561031657600080fd5b506001600160a01b038135811691602001351661060a565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103ba5780601f1061038f576101008083540402835291602001916103ba565b820191906000526020600020905b81548152906001019060200180831161039d57829003601f168201915b5050505050905090565b60006103d86103d1610696565b848461069a565b5060015b92915050565b60025490565b60006103f5848484610786565b61046584610401610696565b610460856040518060600160405280602881526020016109fd602891396001600160a01b038a1660009081526001602052604081209061043f610696565b6001600160a01b0316815260208101919091526040016000205491906108e1565b61069a565b5060019392505050565b60075481565b60055460ff1690565b60006103d861048b610696565b84610460856001600061049c610696565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490610635565b6008546001600160a01b031681565b6001600160a01b031660009081526020819052604090205490565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103ba5780601f1061038f576101008083540402835291602001916103ba565b60006103d8610564610696565b8461046085604051806060016040528060258152602001610a6e602591396001600061058e610696565b6001600160a01b03908116825260208083019390935260409182016000908120918d168152925290205491906108e1565b6008546000906001600160a01b03163314156105f35760065442116105e357600080fd5b6105ed8383610978565b506103dc565b6105fd8383610978565b5092915050565b60065481565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60008282018381101561068f576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b3390565b6001600160a01b0383166106df5760405162461bcd60e51b8152600401808060200182810382526024815260200180610a4a6024913960400191505060405180910390fd5b6001600160a01b0382166107245760405162461bcd60e51b81526004018080602001828103825260228152602001806109b56022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166107cb5760405162461bcd60e51b8152600401808060200182810382526025815260200180610a256025913960400191505060405180910390fd5b6001600160a01b0382166108105760405162461bcd60e51b81526004018080602001828103825260238152602001806109926023913960400191505060405180910390fd5b61081b83838361098c565b610858816040518060600160405280602681526020016109d7602691396001600160a01b03861660009081526020819052604090205491906108e1565b6001600160a01b0380851660009081526020819052604080822093909355908416815220546108879082610635565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156109705760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561093557818101518382015260200161091d565b50505050905090810190601f1680156109625780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60006103d8610985610696565b8484610786565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122029ef78fa9be9d8485a79eaef89405a20a1cf6ceea5543686af346d05ea03de9764736f6c634300060c0033ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";

type NaughtCoinConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NaughtCoinConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NaughtCoin__factory extends ContractFactory {
  constructor(...args: NaughtCoinConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _player: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NaughtCoin> {
    return super.deploy(_player, overrides || {}) as Promise<NaughtCoin>;
  }
  override getDeployTransaction(
    _player: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_player, overrides || {});
  }
  override attach(address: string): NaughtCoin {
    return super.attach(address) as NaughtCoin;
  }
  override connect(signer: Signer): NaughtCoin__factory {
    return super.connect(signer) as NaughtCoin__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NaughtCoinInterface {
    return new utils.Interface(_abi) as NaughtCoinInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NaughtCoin {
    return new Contract(address, _abi, signerOrProvider) as NaughtCoin;
  }
}