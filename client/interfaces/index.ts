import type { IArticle } from '@@common/article';
import type { ApolloError } from '@apollo/client';

export type { IArticle };

export type ArticleListItem = Omit<IArticle, 'content'>;

export type QueriedArticleList = {
  articles: ArticleListItem[];
};

export type QueriedArticleCount = {
  articlesCount: number;
}

export interface ApolloQueryBase<T> {
  data: T;
  loading: boolean;
  error: ApolloError
}

export type IArticleListQuery = ApolloQueryBase<QueriedArticleList>;
export type IArticleCountQuery = ApolloQueryBase<QueriedArticleCount>;