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
} from "../../common";

export interface EngineV2Interface extends utils.Interface {
  functions: {
    "destroy()": FunctionFragment;
    "horsePower()": FunctionFragment;
    "initialize()": FunctionFragment;
    "upgrader()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "destroy" | "horsePower" | "initialize" | "upgrader"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "destroy", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "horsePower",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "upgrader", values?: undefined): string;

  decodeFunctionResult(functionFragment: "destroy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "horsePower", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "upgrader", data: BytesLike): Result;

  events: {};
}

export interface EngineV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EngineV2Interface;

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
    destroy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    horsePower(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgrader(overrides?: CallOverrides): Promise<[string]>;
  };

  destroy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  horsePower(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgrader(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    destroy(overrides?: CallOverrides): Promise<void>;

    horsePower(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(overrides?: CallOverrides): Promise<void>;

    upgrader(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    destroy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    horsePower(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgrader(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    destroy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    horsePower(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgrader(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
