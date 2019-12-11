import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class User {
  @Field(type => Int)
  id: number;
}
