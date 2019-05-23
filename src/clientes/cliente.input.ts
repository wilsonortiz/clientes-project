import { Field, InputType, Int } from 'type-graphql';
import { Email } from '../types/clientes.type.email';

@InputType()
export class ClienteInput {

  @Field()
  readonly nombre: string;

  @Field()
  readonly apellido: string;

  @Field({ nullable: true })
  readonly empresa?: string;

  // @ts-ignore
  @Field({ nullable: true }, () => Int)
  readonly edad?: number;

  @Field(() => String)
  readonly tipo: string;

  // @ts-ignore
  @Field(() => Email)
  readonly emails: Email[];

}
