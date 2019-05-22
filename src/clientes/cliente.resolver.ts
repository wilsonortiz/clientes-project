import { Resolver, Query, ResolveProperty, Parent } from '@nestjs/graphql';
import { ClienteService } from '.././service/clienteService';

@Resolver()
export class ClienteResolver {
  // constructor(
  //   private readonly clienteService: ClienteService,
  // ) {

  @Query(() => String)
  async hello() {
    return 'Hello nestjs gralpql';
  }
}
