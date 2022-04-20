export interface IArticle {
  id: string;
  userId: string;
  title: string;
  description: string;
  content: string;
}

export interface IArticleInput extends Omit<IArticle, 'id'> {}