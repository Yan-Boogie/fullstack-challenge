import { Field, ObjectType } from "type-graphql";
import {v4} from "uuid";
import { IArticle } from '@@common/article';

@ObjectType()
export default class Article implements IArticle {
  @Field()
  id: string = v4()

  @Field()
  title: string = ``

  @Field()
  description: string = ``

  @Field()
  content: string = ``
}