import {Token as TokenContract, 
  MarketItemCreated as MarketItemCreatedEvent
} from "../generated/Token/Token";

import {Token, TokenMetadata} from "../generated/schema";
import {json, Bytes, dataSource, log} from "@graphprotocol/graph-ts";
import { TokenMetadata as TokenMetadataTemplate } from '../generated/templates';

export function handleMarketItemCreated(event: MarketItemCreatedEvent): void {
  let token = Token.load(event.params.tokenId.toString()); 
  
  
  if(!token){
    token = new Token(event.params.tokenId.toString());
    token.tokenID = event.params.tokenId;
    token.tokenURI = event.params.URL.toString();
    token.type = event.params.nftType.toString();
    token.creator = event.params.creator.toHexString();
    token.owner = event.params.owner.toHexString();

    TokenMetadataTemplate.create(event.params.URL.toString());
        
    token.updatedTime = event.block.timestamp;
    token.save()
  }
}

export function handleMetadata(content: Bytes): void {
  let tokenMetadata = new TokenMetadata(dataSource.stringParam())
  const value = json.fromBytes(content).toObject()
  if (value) {
    const image = value.get('image')
    const name = value.get('name')
    const description = value.get('description')

    if (name && image && description) {
      tokenMetadata.name = name.toString()
      tokenMetadata.image = image.toString()
      tokenMetadata.description = description.toString()
    }
    tokenMetadata.save()
  }
}