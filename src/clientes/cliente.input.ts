import { Field, InputType, Int } from 'type-graphql';
import { Email } from '../types/clientes.type.email';
import { Pedido } from '../types/clientes.type.pedidos';

@InputType()
export class ClienteInput {

  @Field()
  readonly nombre: string;

  @Field()
  readonly apellido: string;

  @Field({ nullable: true })
  readonly empresa?: string;

  @Field(() => Date)
  readonly fechaNac: string;

  @Field(() => String)
  readonly tipo: string;

  // @ts-ignore
  @Field(() => Email)
  readonly emails: Email[];

  // @ts-ignore
  @Field(() => Pedido)
  readonly pedidos: Pedido[];

}
