/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  DoubleEntryPoint,
  DoubleEntryPointInterface,
} from "../../../contracts/DoubleEntryPoint.sol/DoubleEntryPoint";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "legacyToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "vaultAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "fortaAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "playerAddress",
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
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
    name: "cryptoVault",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "origSender",
        type: "address",
      },
    ],
    name: "delegateTransfer",
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
    name: "delegatedFrom",
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
    name: "forta",
    outputs: [
      {
        internalType: "contract Forta",
        name: "",
        type: "address",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620014a4380380620014a4833981810160405260808110156200003757600080fd5b50805160208083015160408085015160609095015181518083018352601581527f446f75626c65456e747279506f696e74546f6b656e0000000000000000000000818601908152835180850190945260038085526211115560ea1b9685019690965281519697949694959294919392620000b4929091906200031f565b508051620000ca9060049060208401906200031f565b50506005805460ff19166012179055506000620000e6620001a5565b60058054610100600160a81b0319166101006001600160a01b03841690810291909117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600880546001600160a01b03199081166001600160a01b03878116919091179092556009805482168584161790556007805482168484161790556006805490911685831617908190556200019b911668056bc75e2d63100000620001a9565b50505050620003bb565b3390565b6001600160a01b03821662000205576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6200021360008383620002b8565b6200022f81600254620002bd60201b62000c111790919060201c565b6002556001600160a01b038216600090815260208181526040909120546200026291839062000c11620002bd821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b505050565b60008282018381101562000318576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200036257805160ff191683800117855562000392565b8280016001018555821562000392579182015b828111156200039257825182559160200191906001019062000375565b50620003a0929150620003a4565b5090565b5b80821115620003a05760008155600101620003a5565b6110d980620003cb6000396000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c8063715018a6116100cd578063a9059cbb11610081578063d8670e1f11610066578063d8670e1f146103af578063dd62ed3e146103b7578063f2fde38b146103e557610151565b8063a9059cbb1461037b578063d444d8a0146103a757610151565b806395d89b41116100b257806395d89b41146103115780639cd1a12114610319578063a457c2d71461034f57610151565b8063715018a6146102ff5780638da5cb5b1461030957610151565b806326fe995111610124578063395093511161010957806339509351146102a557806348db5f89146102d157806370a08231146102d957610151565b806326fe995114610263578063313ce5671461028757610151565b806306fdde0314610156578063095ea7b3146101d357806318160ddd1461021357806323b872dd1461022d575b600080fd5b61015e61040b565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610198578181015183820152602001610180565b50505050905090810190601f1680156101c55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101ff600480360360408110156101e957600080fd5b506001600160a01b0381351690602001356104a1565b604080519115158252519081900360200190f35b61021b6104be565b60408051918252519081900360200190f35b6101ff6004803603606081101561024357600080fd5b506001600160a01b038135811691602081013590911690604001356104c4565b61026b61054b565b604080516001600160a01b039092168252519081900360200190f35b61028f61055a565b6040805160ff9092168252519081900360200190f35b6101ff600480360360408110156102bb57600080fd5b506001600160a01b038135169060200135610563565b61026b6105b1565b61021b600480360360208110156102ef57600080fd5b50356001600160a01b03166105c0565b6103076105db565b005b61026b6106a7565b61015e6106bb565b6101ff6004803603606081101561032f57600080fd5b506001600160a01b0381358116916020810135916040909101351661071c565b6101ff6004803603604081101561036557600080fd5b506001600160a01b038135169060200135610a24565b6101ff6004803603604081101561039157600080fd5b506001600160a01b038135169060200135610a8c565b61026b610aa0565b61026b610aaf565b61021b600480360360408110156103cd57600080fd5b506001600160a01b0381358116916020013516610abe565b610307600480360360208110156103fb57600080fd5b50356001600160a01b0316610ae9565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104975780601f1061046c57610100808354040283529160200191610497565b820191906000526020600020905b81548152906001019060200180831161047a57829003601f168201915b5050505050905090565b60006104b56104ae610c72565b8484610c76565b50600192915050565b60025490565b60006104d1848484610d62565b610541846104dd610c72565b61053c8560405180606001604052806028815260200161100e602891396001600160a01b038a1660009081526001602052604081209061051b610c72565b6001600160a01b031681526020810191909152604001600020549190610ebd565b610c76565b5060019392505050565b6008546001600160a01b031681565b60055460ff1690565b60006104b5610570610c72565b8461053c8560016000610581610c72565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490610c11565b6007546001600160a01b031681565b6001600160a01b031660009081526020819052604090205490565b6105e3610c72565b60055461010090046001600160a01b0390811691161461064a576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60055460405160009161010090046001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36005805474ffffffffffffffffffffffffffffffffffffffff0019169055565b60055461010090046001600160a01b031690565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104975780601f1061046c57610100808354040283529160200191610497565b6008546000906001600160a01b0316331461077e576040805162461bcd60e51b815260206004820152601360248201527f4e6f74206c656761637920636f6e747261637400000000000000000000000000604482015290519081900360640190fd5b600954600754604080517f9e1083ca0000000000000000000000000000000000000000000000000000000081526001600160a01b03928316600482015290516000939290921691639e1083ca91602480820192602092909190829003018186803b1580156107eb57600080fd5b505afa1580156107ff573d6000803e3d6000fd5b505050506040513d602081101561081557600080fd5b5051600954604080516306e3817d60e51b81526001600160a01b0380851660048301529151939450600093919092169163dc702fa0916024808301926020929190829003018186803b15801561086a57600080fd5b505afa15801561087e573d6000803e3d6000fd5b505050506040513d602081101561089457600080fd5b5051600954600754604080517ffa1fd28c0000000000000000000000000000000000000000000000000000000081526001600160a01b0392831660048201818152602483019384523660448401819052969750939094169463fa1fd28c94936000939192909190606401848480828437600081840152601f19601f820116905080830192505050945050505050600060405180830381600087803b15801561093b57600080fd5b505af115801561094f573d6000803e3d6000fd5b5050505061095e848787610d62565b60019250600954604080516306e3817d60e51b81526001600160a01b03858116600483015291518493929092169163dc702fa091602480820192602092909190829003018186803b1580156109b257600080fd5b505afa1580156109c6573d6000803e3d6000fd5b505050506040513d60208110156109dc57600080fd5b50511115610a1b5760405162461bcd60e51b8152600401808060200182810382526023815260200180610fc56023913960400191505060405180910390fd5b50509392505050565b60006104b5610a31610c72565b8461053c8560405180606001604052806025815260200161107f6025913960016000610a5b610c72565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190610ebd565b60006104b5610a99610c72565b8484610d62565b6006546001600160a01b031681565b6009546001600160a01b031681565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610af1610c72565b60055461010090046001600160a01b03908116911614610b58576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b038116610b9d5760405162461bcd60e51b8152600401808060200182810382526026815260200180610f7d6026913960400191505060405180910390fd5b6005546040516001600160a01b0380841692610100900416907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600580546001600160a01b039092166101000274ffffffffffffffffffffffffffffffffffffffff0019909216919091179055565b600082820183811015610c6b576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b3390565b6001600160a01b038316610cbb5760405162461bcd60e51b815260040180806020018281038252602481526020018061105b6024913960400191505060405180910390fd5b6001600160a01b038216610d005760405162461bcd60e51b8152600401808060200182810382526022815260200180610fa36022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316610da75760405162461bcd60e51b81526004018080602001828103825260258152602001806110366025913960400191505060405180910390fd5b6001600160a01b038216610dec5760405162461bcd60e51b8152600401808060200182810382526023815260200180610f5a6023913960400191505060405180910390fd5b610df7838383610f54565b610e3481604051806060016040528060268152602001610fe8602691396001600160a01b0386166000908152602081905260409020549190610ebd565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610e639082610c11565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610f4c5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610f11578181015183820152602001610ef9565b50505050905090810190601f168015610f3e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f20616464726573734f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f2061646472657373416c65727420686173206265656e207472696767657265642c20726576657274696e6745524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220dc659d0dfb651e9f987c6724bcef91afc0d147d2e69feb1aff9cce7f225ae17b64736f6c634300060c0033";

type DoubleEntryPointConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DoubleEntryPointConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DoubleEntryPoint__factory extends ContractFactory {
  constructor(...args: DoubleEntryPointConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    legacyToken: PromiseOrValue<string>,
    vaultAddress: PromiseOrValue<string>,
    fortaAddress: PromiseOrValue<string>,
    playerAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DoubleEntryPoint> {
    return super.deploy(
      legacyToken,
      vaultAddress,
      fortaAddress,
      playerAddress,
      overrides || {}
    ) as Promise<DoubleEntryPoint>;
  }
  override getDeployTransaction(
    legacyToken: PromiseOrValue<string>,
    vaultAddress: PromiseOrValue<string>,
    fortaAddress: PromiseOrValue<string>,
    playerAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      legacyToken,
      vaultAddress,
      fortaAddress,
      playerAddress,
      overrides || {}
    );
  }
  override attach(address: string): DoubleEntryPoint {
    return super.attach(address) as DoubleEntryPoint;
  }
  override connect(signer: Signer): DoubleEntryPoint__factory {
    return super.connect(signer) as DoubleEntryPoint__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DoubleEntryPointInterface {
    return new utils.Interface(_abi) as DoubleEntryPointInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DoubleEntryPoint {
    return new Contract(address, _abi, signerOrProvider) as DoubleEntryPoint;
  }
}