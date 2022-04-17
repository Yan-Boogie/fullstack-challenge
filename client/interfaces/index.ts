import type { IArticle } from '@@common/article';
import type { ApolloError } from '@apollo/client';

export type { IArticle };

export type ArticleListItem = Omit<IArticle, 'content'>;

export type QueriedArticleList = {
  articles: ArticleListItem[];
};

export interface ApolloQueryBase<T> {
  data: T;
  loading: boolean;
  error: ApolloError
}

export type IArticleListQuery = ApolloQueryBase<QueriedArticleList>;
