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
      userId: '0x40558642b23Bf54549354DcfB62668Ef3F012A66',
      title: 'title',
      description: 'description',
      content: 'content',
    };
  }

  @Query(()=> ([Article]))
    async articles(
        @Arg("offset", {nullable: false}) offset: number,
        @Arg("limit", {nullable: false}) limit: number,
    ) {
        const mock = [
          {
            id: '1234',
            userId: '0x40558642b23Bf54549354DcfB62668Ef3F012A66',
            title: 'title01',
            description: 'description',
            content: 'content',
          },
          {
            id: '2345',
            userId: '0x40558642b23Bf54549354DcfB62668Ef3F012A66',
            title: 'title02',
            description: 'description',
            content: 'content',
          },
          {
            id: '3456',
            userId: '0x40558642b23Bf54549354DcfB62668Ef3F012A66',
            title: 'title03',
            description: 'description',
            content: 'content',
          },
          {
            id: '4567',
            userId: '0x40558642b23Bf54549354DcfB62668Ef3F012A66',
            title: 'title04',
            description: 'description',
            content: 'content',
          },
          {
            id: '5678',
            userId: '0x40558642b23Bf54549354DcfB62668Ef3F012A66',
            title: 'title05',
            description: 'description',
            content: 'content',
          },
          {
            id: '6789',
            userId: '0x40558642b23Bf54549354DcfB62668Ef3F012A66',
            title: 'title06',
            description: 'description',
            content: 'content',
          },
          {
            id: '7899',
            userId: '0x40558642b23Bf54549354DcfB62668Ef3F012A66',
            title: 'title07',
            description: 'description',
            content: 'content',
          },
          {
            id: '1111',
            userId: '0x40558642b23Bf54549354DcfB62668Ef3F012A66',
            title: 'title08',
            description: 'description',
            content: 'content',
          },
          {
            id: '2222',
            userId: '0x40558642b23Bf54549354DcfB62668Ef3F012A66',
            title: 'title09',
            description: 'description',
            content: 'content',
          },
          {
            id: '3333',
            userId: '0x40558642b23Bf54549354DcfB62668Ef3F012A66',
            title: 'title10',
            description: 'description',
            content: 'content',
          },
        ];

        return mock.slice(offset, limit + offset);
    }

    @Query(()=> (Number))
    async articlesCount() {
        return 10;
    }
};
