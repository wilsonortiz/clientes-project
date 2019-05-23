import { Field, ID, InputType, Int, ObjectType } from 'type-graphql';

@ObjectType()
@InputType('EmailInput')
export class Email {

  @Field()
  email: string;
}
