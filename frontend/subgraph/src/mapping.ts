import { tokencreated as tokencreatedEvent } from "../generated/Token/Token"
import { tokencreated } from "../generated/schema"

export function handletokencreated(event: tokencreatedEvent): void {
  let entity = new tokencreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenaddress = event.params.tokenaddress
  entity.creator = event.params.creator
  entity.name = event.params.name
  entity.symbol = event.params.symbol
  entity.deci = event.params.deci
  entity.totalSupply = event.params.totalSupply
  entity.userAddress = event.params.userAddress
  entity.save()
}
