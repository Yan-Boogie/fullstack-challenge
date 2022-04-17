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

// export const createArticle = gql`
//   mutation ($articleInput: ArticleInput) {
//     createArticle(articleInput: $articleInput) {
//       user_id
//       title
//       description
//       content
//     }
//   }
// `;
