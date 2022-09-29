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

export interface ShopAttackInterface extends utils.Interface {
  functions: {
    "callBuy()": FunctionFragment;
    "price()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "callBuy" | "price"): FunctionFragment;

  encodeFunctionData(functionFragment: "callBuy", values?: undefined): string;
  encodeFunctionData(functionFragment: "price", values?: undefined): string;

  decodeFunctionResult(functionFragment: "callBuy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;

  events: {};
}

export interface ShopAttack extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ShopAttackInterface;

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
    callBuy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    price(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  callBuy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  price(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    callBuy(overrides?: CallOverrides): Promise<void>;

    price(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    callBuy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    price(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    callBuy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    price(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}