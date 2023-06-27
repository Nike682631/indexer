import { Interface } from "@ethersproject/abi";
import { Midaswap } from "@reservoir0x/sdk";

import { config } from "@/config/index";
import { EventData } from "@/events-sync/data";

export const newERC721Pair: EventData = {
  kind: "midaswap",
  subKind: "midaswap-new-erc721-pair",
  addresses: { [Midaswap.Addresses.PairFactory[config.chainId]?.toLowerCase()]: true },
  topic: "0x528a7392e6fd550c4de9e894c55879cd7a03e87f1ac9ddafe8677a2ac1d8cf9f",
  numTopics: 4,
  abi: new Interface([
    `event PairCreated(address indexed tokenX, address indexed tokenY, address indexed pair, address lpToken)`,
  ]),
};

export const erc20Deposit: EventData = {
  kind: "midaswap",
  subKind: "midaswap-erc20-deposit",
  topic: "0x37d96c036f3b502518ca69c11f4cc6376d476cbc57122ab9ca21a7e642845f5f",
  numTopics: 4,
  abi: new Interface([
    `    event ERC20PositionMinted(
        uint128 indexed lpTokenId,
        uint24 indexed binLower,
        uint24 indexed binStep,
        uint256 binAmount
    )`,
  ]),
};

export const erc721Deposit: EventData = {
  kind: "midaswap",
  subKind: "midaswap-erc721-deposit",
  topic: "0xe2934d636b1116aeb48e620d1ab31f3a41fe260ebc08df43b8982ec116267a00",
  numTopics: 4,
  abi: new Interface([
    `    event ERC721PositionMinted(
        uint128 indexed lpTokenId,
        uint24 indexed binLower,
        uint24 indexed binStep,
        uint256[] _NFTIDs
    )
`,
  ]),
};

export const sellERC721: EventData = {
  kind: "midaswap",
  subKind: "midaswap-sell-erc721",
  topic: "0xa45c5281a2811e852ff2c807b388fda3e11ed2c19fc259b0756bd8e7876a0675",
  numTopics: 4,
  abi: new Interface([
    `  event SellNFT(
        uint256 indexed nftTokenId,
        address indexed from,
        uint24 tradeBin,
        uint128 indexed lpTokenID
    )
`,
  ]),
};

export const buyERC721: EventData = {
  kind: "midaswap",
  subKind: "midaswap-buy-erc721",
  topic: "0x5c6d0eb0552298eaa0a67c6a5ba2ad9a16a78ceb389a60bbbab9792f04a6f890",
  numTopics: 4,
  abi: new Interface([
    `
    event BuyNFT(
        uint256 indexed nftTokenId,
        address indexed from,
        uint24 tradeBin,
        uint128 indexed lpTokenID
    )
`,
  ]),
};

export const tokenDeposit: EventData = {
  kind: "midaswap",
  subKind: "midaswap-token-deposit",
  topic: "0xf1b3be8dace0fecfbdb6fb0fa1cc014c612bcb1b46db027c1ece5fc11fff09d6",
  numTopics: 1,
  abi: new Interface([`event TokenDeposit(uint256 amount)`]),
};

export const nftWithdrawalERC721: EventData = {
  kind: "midaswap",
  subKind: "midaswap-position-burned",
  topic: "0x399008f8cf2698b523adce30291bfe4efa73018ed7095d73895bbf77d6e2ed2c",
  numTopics: 3,
  abi: new Interface([
    `    event PositionBurned(
        uint128 indexed lpTokenId,
        address indexed owner,
        uint128 indexed feeCollected
    )`,
  ]),
};

export const spotPriceUpdate: EventData = {
  kind: "midaswap",
  subKind: "midaswap-spot-price-update",
  topic: "0xf06180fdbe95e5193df4dcd1352726b1f04cb58599ce58552cc952447af2ffbb",
  numTopics: 1,
  abi: new Interface([`event SpotPriceUpdate(uint128 newSpotPrice)`]),
};

export const deltaUpdate: EventData = {
  kind: "midaswap",
  subKind: "midaswap-delta-update",
  topic: "0xc958ae052d28f8d17bc2c4ddbabb699a3cab5cccefd034d0fc971efdadc01da5",
  numTopics: 1,
  abi: new Interface([`event DeltaUpdate(uint128 newDelta)`]),
};
