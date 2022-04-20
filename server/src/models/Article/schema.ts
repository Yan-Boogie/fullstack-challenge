import { Field, ObjectType, InputType } from "type-graphql";
import {v4} from "uuid";
import { IArticle, IArticleInput } from '@@common/article';

@ObjectType()
export class Article implements IArticle {
  @Field()
  id: string = v4()

  @Field()
  userId: string = ``

  @Field()
  title: string = ``

  @Field()
  description: string = ``

  @Field()
  content: string = ``
}

@InputType()
export class ArticleInput implements IArticleInput {
  @Field()
  userId: string = ``

  @Field()
  title: string = ``

  @Field()
  description: string = ``

  @Field()
  content: string = ``
}