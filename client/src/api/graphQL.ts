import { gql } from "@apollo/client";

export const articlesList = gql`
  query {
    articles {
      user_id
      title
      description
      content
    }
  }
`;

export const createArticle = gql`
  mutation ($articleInput: ArticleInput) {
    createArticle(articleInput: $articleInput) {
      user_id
      title
      description
      content
    }
  }
`;
