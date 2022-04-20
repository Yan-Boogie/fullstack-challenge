import { gql } from "@apollo/client";

export const ARTICLE_LIST_QUERY = gql`
  query ArticleListQuery(
    $offset: Float!
    $limit: Float!
  ) {
    articles(
      offset: $offset
      limit: $limit
    ) {
      id
      userId
      title
      description
    }
  }
`;

export const ARTICLE_AMOUNT_QUERY = gql`
  query ArticleAmountQuery {
    articlesCount
  }
`;

export const ADD_ARTICLE_MUTATION = gql`
  mutation AddArticleMutation ($articleInput: ArticleInput!) {
    addArticle(articleInput: $articleInput) {
      userId
      title
      description
      content
    }
  }
`;
