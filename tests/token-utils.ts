import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CollectionCreated,
  MarketItemCreated,
  NFTListed,
  NFTPurchase,
  OwnershipTransferred
} from "../generated/Token/Token"

export function createCollectionCreatedEvent(
  collectionId: BigInt,
  URL: string,
  creator: Address
): CollectionCreated {
  let collectionCreatedEvent = changetype<CollectionCreated>(newMockEvent())

  collectionCreatedEvent.parameters = new Array()

  collectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionId",
      ethereum.Value.fromUnsignedBigInt(collectionId)
    )
  )
  collectionCreatedEvent.parameters.push(
    new ethereum.EventParam("URL", ethereum.Value.fromString(URL))
  )
  collectionCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return collectionCreatedEvent
}

export function createMarketItemCreatedEvent(
  tokenId: BigInt,
  seller: Address,
  owner: Address,
  creator: Address,
  price: BigInt,
  sold: boolean,
  numberOfToken: BigInt,
  nftType: i32,
  customContract: Address,
  customTokenId: BigInt,
  URL: string
): MarketItemCreated {
  let marketItemCreatedEvent = changetype<MarketItemCreated>(newMockEvent())

  marketItemCreatedEvent.parameters = new Array()

  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam("sold", ethereum.Value.fromBoolean(sold))
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "numberOfToken",
      ethereum.Value.fromUnsignedBigInt(numberOfToken)
    )
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "nftType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(nftType))
    )
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "customContract",
      ethereum.Value.fromAddress(customContract)
    )
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "customTokenId",
      ethereum.Value.fromUnsignedBigInt(customTokenId)
    )
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam("URL", ethereum.Value.fromString(URL))
  )

  return marketItemCreatedEvent
}

export function createNFTListedEvent(tokenId: BigInt): NFTListed {
  let nftListedEvent = changetype<NFTListed>(newMockEvent())

  nftListedEvent.parameters = new Array()

  nftListedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return nftListedEvent
}

export function createNFTPurchaseEvent(
  tokenId: BigInt,
  buyer: Address,
  seller: Address
): NFTPurchase {
  let nftPurchaseEvent = changetype<NFTPurchase>(newMockEvent())

  nftPurchaseEvent.parameters = new Array()

  nftPurchaseEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  nftPurchaseEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  nftPurchaseEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )

  return nftPurchaseEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
