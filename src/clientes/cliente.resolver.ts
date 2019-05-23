import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClienteType } from './cliente.type';
import { ClienteService } from './cliente.service';
import { ClienteInput } from './cliente.input';
import { ClientesSchema } from '../schemas/cliente.schema';

@Resolver(of => ClienteType)
export class ClienteResolver {

  constructor(
    private readonly clienteService: ClienteService,
  ) {
  }

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => ClienteType)
  async getCliente(@Args('id')id: string) {
    return this.clienteService.find(id);
  }

  @Query(() => [ClienteType])
  async getClientes(@Args('limit')limit?: number) {
    return this.clienteService.findAllOrLimit(limit);
  }

  @Mutation(() => ClienteType)
  async createClient(@Args('input')input: ClienteInput) {
    return await this.clienteService.create(input);
  }

  @Mutation(() => ClienteType)
  async updateClient(@Args('id')id: string, @Args('input')input: ClienteInput) {
    return await this.clienteService.update(id, input);
  }

  @Mutation(() => String)
  async deleteClient(@Args('id')id: string) {
    return await this.clienteService.delete(id);
  }

}
