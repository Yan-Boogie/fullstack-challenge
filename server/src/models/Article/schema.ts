import { Field, ObjectType, InputType } from "type-graphql";
import {v4} from "uuid";
import { IArticle } from '@@common/article';

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
export class ArticleInput implements Omit<IArticle, 'id'> {
  @Field()
  userId: string = ``

  @Field()
  title: string = ``

  @Field()
  description: string = ``

  @Field()
  content: string = ``
}