import { gql } from "@apollo/client";

export const ARTICLE_LIST_QUERY = gql`
  query ArticleListQuery {
    articles {
      id
      userId
      title
      description
    }
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
