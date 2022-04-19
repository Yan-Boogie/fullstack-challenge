import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { v4 } from "uuid";
import { Article, ArticleInput } from "./schema";
import dbService from '../../service/dbService';
@Resolver()
export default class ArticleResolver {

  @Query(() => Article)
  async article(
    @Arg('id') id: string,
  ) {
    const article = await dbService.getArticleById(id);

    return article;
  }

  @Query(()=> ([Article]))
    async articles(
        @Arg("offset", {nullable: false}) offset: number,
        @Arg("limit", {nullable: false}) limit: number,
    ) {
        const articles = await dbService.getAllArticles();

        return articles.slice(offset, limit + offset);
    }

  @Query(()=> (Number))
  async articlesCount() {
      const articles = await dbService.getAllArticles();

      return articles.length;
  }

  @Mutation(()=> (Article))
  async addArticle(
      @Arg("articleInput") articleInput: ArticleInput
  ) {
      const id = v4();

      await dbService.upsertArticle({ id, ...articleInput });

      return await dbService.getArticleById(id);
  }

  @Mutation(()=> (String))
  async removeArticle(
      @Arg("articleId") articleId: string
  ) {
      await dbService.removeArticle(articleId);

      return articleId;
  }
};
