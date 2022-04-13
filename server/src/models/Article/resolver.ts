import { Arg, Mutation, Query, Resolver } from "type-graphql";
import Article from "./schema";

@Resolver()
export default class ArticleResolver {

  @Query(() => Article)
  async article(
    @Arg('id') id: string,
  ) {
    return {
      id: '1234',
      title: 'title',
      description: 'description',
      content: 'content',
    };
  }

  @Query(()=> ([Article]))
    async articles(
        @Arg("skip", {nullable: true}) skip: number,
        @Arg("take", {nullable: true}) take: number,
    ) {
        return [
          {
            id: '1234',
            title: 'title',
            description: 'description',
            content: 'content',
          },
          {
            id: '2345',
            title: 'title',
            description: 'description',
            content: 'content',
          }
        ]
    }

    @Query(()=> (Number))
    async articlesCount() {
        return 2;
    }
};
