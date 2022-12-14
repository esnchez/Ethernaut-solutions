/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  GatekeeperOneAttack,
  GatekeeperOneAttackInterface,
} from "../GatekeeperOneAttack";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "attack",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "makeKey",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "readKey",
    outputs: [
      {
        internalType: "bytes8",
        name: "",
        type: "bytes8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516102ed3803806102ed8339818101604052602081101561003357600080fd5b5051600080546001600160a01b039092166001600160a01b0319909216919091179055610288806100656000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80639e5faafc14610046578063d37414b814610050578063d9dfd3f114610058575b600080fd5b61004e610095565b005b61004e610206565b610060610242565b604080517fffffffffffffffff0000000000000000000000000000000000000000000000009092168252519081900360200190f35b61809260005b6101f48110156102025760008054604080517fffffffffffffffff000000000000000000000000000000000000000000000000600160a01b840460c01b1660248083019190915282518083039091018152604490910182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f3370204e000000000000000000000000000000000000000000000000000000001781529151815173ffffffffffffffffffffffffffffffffffffffff909416938787019382918083835b602083106101815780518252601f199092019160209182019101610162565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038160008787f1925050503d80600081146101e4576040519150601f19603f3d011682016040523d82523d6000602084013e6101e9565b606091505b5050905080156101f95750610202565b5060010161009b565b5050565b600080547fffffffff0000000000000000ffffffffffffffffffffffffffffffffffffffff16600160a01b3267ffffffff0000ffff1602179055565b600054600160a01b900460c01b9056fea2646970667358221220b987cdaefa055e231f6619a5c48f1de1377a96ff8d6481a4478b0bdbe1d08dd664736f6c634300060c0033";

type GatekeeperOneAttackConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GatekeeperOneAttackConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GatekeeperOneAttack__factory extends ContractFactory {
  constructor(...args: GatekeeperOneAttackConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GatekeeperOneAttack> {
    return super.deploy(
      _address,
      overrides || {}
    ) as Promise<GatekeeperOneAttack>;
  }
  override getDeployTransaction(
    _address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_address, overrides || {});
  }
  override attach(address: string): GatekeeperOneAttack {
    return super.attach(address) as GatekeeperOneAttack;
  }
  override connect(signer: Signer): GatekeeperOneAttack__factory {
    return super.connect(signer) as GatekeeperOneAttack__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GatekeeperOneAttackInterface {
    return new utils.Interface(_abi) as GatekeeperOneAttackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GatekeeperOneAttack {
    return new Contract(address, _abi, signerOrProvider) as GatekeeperOneAttack;
  }
}
