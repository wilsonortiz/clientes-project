import { Field, InputType, ObjectType } from 'type-graphql';

@ObjectType()
@InputType('PedidoInput')
export class Pedido {

  @Field()
  nombre: string;

  @Field()
  precio: number;
}
