import { ObjectType, Field, Int } from 'type-graphql';
import { User } from '../../user/entities/user.entity';

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field()
  content: string;

  @Field(() => User)
  author: User;
}
