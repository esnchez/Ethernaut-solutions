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
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Proxy__factory>;
    getContractFactory(
      name: "UpgradeableProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UpgradeableProxy__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "AlienCodex",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AlienCodex__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
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
      name: "Denial",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Denial__factory>;
    getContractFactory(
      name: "DenialAttack",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DenialAttack__factory>;
    getContractFactory(
      name: "Dex",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Dex__factory>;
    getContractFactory(
      name: "SwappableToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SwappableToken__factory>;
    getContractFactory(
      name: "DexTwo",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DexTwo__factory>;
    getContractFactory(
      name: "SwappableTokenTwo",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SwappableTokenTwo__factory>;
    getContractFactory(
      name: "CryptoVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CryptoVault__factory>;
    getContractFactory(
      name: "DelegateERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DelegateERC20__factory>;
    getContractFactory(
      name: "DoubleEntryPoint",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DoubleEntryPoint__factory>;
    getContractFactory(
      name: "Forta",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Forta__factory>;
    getContractFactory(
      name: "IDetectionBot",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDetectionBot__factory>;
    getContractFactory(
      name: "IForta",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IForta__factory>;
    getContractFactory(
      name: "LegacyToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LegacyToken__factory>;
    getContractFactory(
      name: "DetectionBot",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DetectionBot__factory>;
    getContractFactory(
      name: "IDetectionBot",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDetectionBot__factory>;
    getContractFactory(
      name: "IForta",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IForta__factory>;
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
      name: "Engine",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Engine__factory>;
    getContractFactory(
      name: "Motorbike",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Motorbike__factory>;
    getContractFactory(
      name: "EngineV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EngineV2__factory>;
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
      name: "PuzzleProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PuzzleProxy__factory>;
    getContractFactory(
      name: "PuzzleWallet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PuzzleWallet__factory>;
    getContractFactory(
      name: "Recovery",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Recovery__factory>;
    getContractFactory(
      name: "SimpleToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SimpleToken__factory>;
    getContractFactory(
      name: "RecoveryAttack",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RecoveryAttack__factory>;
    getContractFactory(
      name: "Reentrance",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Reentrance__factory>;
    getContractFactory(
      name: "ReentranceAttack",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReentranceAttack__factory>;
    getContractFactory(
      name: "Buyer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Buyer__factory>;
    getContractFactory(
      name: "Shop",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Shop__factory>;
    getContractFactory(
      name: "ShopAttack",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShopAttack__factory>;
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
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Proxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Proxy>;
    getContractAt(
      name: "UpgradeableProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UpgradeableProxy>;
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
      name: "AlienCodex",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AlienCodex>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
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
      name: "Denial",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Denial>;
    getContractAt(
      name: "DenialAttack",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DenialAttack>;
    getContractAt(
      name: "Dex",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Dex>;
    getContractAt(
      name: "SwappableToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SwappableToken>;
    getContractAt(
      name: "DexTwo",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DexTwo>;
    getContractAt(
      name: "SwappableTokenTwo",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SwappableTokenTwo>;
    getContractAt(
      name: "CryptoVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CryptoVault>;
    getContractAt(
      name: "DelegateERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DelegateERC20>;
    getContractAt(
      name: "DoubleEntryPoint",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DoubleEntryPoint>;
    getContractAt(
      name: "Forta",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Forta>;
    getContractAt(
      name: "IDetectionBot",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDetectionBot>;
    getContractAt(
      name: "IForta",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IForta>;
    getContractAt(
      name: "LegacyToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LegacyToken>;
    getContractAt(
      name: "DetectionBot",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DetectionBot>;
    getContractAt(
      name: "IDetectionBot",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDetectionBot>;
    getContractAt(
      name: "IForta",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IForta>;
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
      name: "Engine",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Engine>;
    getContractAt(
      name: "Motorbike",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Motorbike>;
    getContractAt(
      name: "EngineV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EngineV2>;
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
      name: "PuzzleProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PuzzleProxy>;
    getContractAt(
      name: "PuzzleWallet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PuzzleWallet>;
    getContractAt(
      name: "Recovery",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Recovery>;
    getContractAt(
      name: "SimpleToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SimpleToken>;
    getContractAt(
      name: "RecoveryAttack",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RecoveryAttack>;
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
      name: "Buyer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Buyer>;
    getContractAt(
      name: "Shop",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Shop>;
    getContractAt(
      name: "ShopAttack",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShopAttack>;
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
