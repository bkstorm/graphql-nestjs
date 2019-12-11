import { Resolver, Query, Info } from '@nestjs/graphql';
import { Post } from './entities/post.entity';
import { GraphQLResolveInfo } from 'graphql';

@Resolver(() => Post)
export class PostResolver {
  @Query(() => [Post])
  async posts(@Info() info: GraphQLResolveInfo): Promise<Post[]> {
    info.cacheControl.setCacheHint({ maxAge: 120 });
    return new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve([
            {
              id: 1,
              content: 'Hello World!',
              author: {
                id: 1,
              },
            },
            {
              id: 2,
              content: 'Good morning!',
              author: {
                id: 2,
              },
            },
          ]),
        5000,
      );
    });
  }
}
