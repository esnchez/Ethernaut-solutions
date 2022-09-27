/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface GatekeeperTwoInterface extends utils.Interface {
  functions: {
    "enter(bytes8)": FunctionFragment;
    "entrant()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "enter" | "entrant"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "enter",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "entrant", values?: undefined): string;

  decodeFunctionResult(functionFragment: "enter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "entrant", data: BytesLike): Result;

  events: {};
}

export interface GatekeeperTwo extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GatekeeperTwoInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    enter(
      _gateKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    entrant(overrides?: CallOverrides): Promise<[string]>;
  };

  enter(
    _gateKey: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  entrant(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    enter(
      _gateKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    entrant(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    enter(
      _gateKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    entrant(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    enter(
      _gateKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    entrant(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
