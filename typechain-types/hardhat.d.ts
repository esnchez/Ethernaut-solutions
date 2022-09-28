/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "CoinFlip",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CoinFlip__factory>;
    getContractFactory(
      name: "CoinFlipAttack",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CoinFlipAttack__factory>;
    getContractFactory(
      name: "Delegate",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Delegate__factory>;
    getContractFactory(
      name: "Delegation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Delegation__factory>;
    getContractFactory(
      name: "Building",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Building__factory>;
    getContractFactory(
      name: "Elevator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Elevator__factory>;
    getContractFactory(
      name: "ElevatorAttack",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ElevatorAttack__factory>;
    getContractFactory(
      name: "Fallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Fallback__factory>;
    getContractFactory(
      name: "Fallout",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Fallout__factory>;
    getContractFactory(
      name: "ForceAttack",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ForceAttack__factory>;
    getContractFactory(
      name: "GatekeeperOne",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GatekeeperOne__factory>;
    getContractFactory(
      name: "GatekeeperOneAttack",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GatekeeperOneAttack__factory>;
    getContractFactory(
      name: "GatekeeperTwo",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GatekeeperTwo__factory>;
    getContractFactory(
      name: "GatekeeperTwoAttack",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GatekeeperTwoAttack__factory>;
    getContractFactory(
      name: "King",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.King__factory>;
    getContractFactory(
      name: "KingAttack",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KingAttack__factory>;
    getContractFactory(
      name: "NaughtCoin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NaughtCoin__factory>;
    getContractFactory(
      name: "LibraryContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LibraryContract__factory>;
    getContractFactory(
      name: "Preservation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Preservation__factory>;
    getContractFactory(
      name: "PreservationAttack",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PreservationAttack__factory>;
    getContractFactory(
      name: "Privacy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Privacy__factory>;
    getContractFactory(
      name: "Reentrance",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Reentrance__factory>;
    getContractFactory(
      name: "ReentranceAttack",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReentranceAttack__factory>;
    getContractFactory(
      name: "Telephone",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Telephone__factory>;
    getContractFactory(
      name: "TelephoneAttack",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TelephoneAttack__factory>;
    getContractFactory(
      name: "Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Token__factory>;
    getContractFactory(
      name: "Vault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Vault__factory>;

    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "CoinFlip",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CoinFlip>;
    getContractAt(
      name: "CoinFlipAttack",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CoinFlipAttack>;
    getContractAt(
      name: "Delegate",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Delegate>;
    getContractAt(
      name: "Delegation",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Delegation>;
    getContractAt(
      name: "Building",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Building>;
    getContractAt(
      name: "Elevator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Elevator>;
    getContractAt(
      name: "ElevatorAttack",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ElevatorAttack>;
    getContractAt(
      name: "Fallback",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Fallback>;
    getContractAt(
      name: "Fallout",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Fallout>;
    getContractAt(
      name: "ForceAttack",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ForceAttack>;
    getContractAt(
      name: "GatekeeperOne",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GatekeeperOne>;
    getContractAt(
      name: "GatekeeperOneAttack",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GatekeeperOneAttack>;
    getContractAt(
      name: "GatekeeperTwo",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GatekeeperTwo>;
    getContractAt(
      name: "GatekeeperTwoAttack",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GatekeeperTwoAttack>;
    getContractAt(
      name: "King",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.King>;
    getContractAt(
      name: "KingAttack",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KingAttack>;
    getContractAt(
      name: "NaughtCoin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NaughtCoin>;
    getContractAt(
      name: "LibraryContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LibraryContract>;
    getContractAt(
      name: "Preservation",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Preservation>;
    getContractAt(
      name: "PreservationAttack",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PreservationAttack>;
    getContractAt(
      name: "Privacy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Privacy>;
    getContractAt(
      name: "Reentrance",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Reentrance>;
    getContractAt(
      name: "ReentranceAttack",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ReentranceAttack>;
    getContractAt(
      name: "Telephone",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Telephone>;
    getContractAt(
      name: "TelephoneAttack",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TelephoneAttack>;
    getContractAt(
      name: "Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Token>;
    getContractAt(
      name: "Vault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Vault>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
