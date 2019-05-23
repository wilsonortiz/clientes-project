import { Field, ID, Int, ObjectType } from 'type-graphql';
import { Email } from '../types/clientes.type.email';

@ObjectType()
export class ClienteType {

  @Field(() => ID)
  // tslint:disable-next-line:variable-name
  readonly _id: string;

  @Field({ nullable: true })
  readonly nombre?: string;

  @Field({ nullable: true })
  readonly apellido?: string;

  @Field({ nullable: true })
  readonly empresa?: string;

  // @ts-ignore
  @Field({ nullable: true }, () => Int)
  readonly edad?: number;

  // @ts-ignore
  @Field({ nullable: true }, () => String)
  readonly tipo?: string;
  // readonly pedidos: Array;

  @Field(() => [Email])
  readonly emails: Email[];

}
