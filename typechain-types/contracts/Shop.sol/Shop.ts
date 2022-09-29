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

export interface ShopInterface extends utils.Interface {
  functions: {
    "buy()": FunctionFragment;
    "isSold()": FunctionFragment;
    "price()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "buy" | "isSold" | "price"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "buy", values?: undefined): string;
  encodeFunctionData(functionFragment: "isSold", values?: undefined): string;
  encodeFunctionData(functionFragment: "price", values?: undefined): string;

  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isSold", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;

  events: {};
}

export interface Shop extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ShopInterface;

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
    buy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isSold(overrides?: CallOverrides): Promise<[boolean]>;

    price(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  buy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isSold(overrides?: CallOverrides): Promise<boolean>;

  price(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    buy(overrides?: CallOverrides): Promise<void>;

    isSold(overrides?: CallOverrides): Promise<boolean>;

    price(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    buy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isSold(overrides?: CallOverrides): Promise<BigNumber>;

    price(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    buy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isSold(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    price(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
