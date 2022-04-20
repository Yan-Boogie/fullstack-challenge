import { Descendant } from 'slate';
import { QueriedArticle } from '@@interfaces/index';

export const articleMiddleware = (queriedArticle: QueriedArticle): Descendant[] => {
  const { article } = queriedArticle;

  const descendent: Descendant[] = [];

  /** Article Title */
  descendent.push({ type: 'heading', children: [{ text: article.title }] });

  /** Article Subtitle */
  descendent.push({ type: 'heading-two', children: [{ text: article.description }] });

  /** Article Content */
  descendent.push(...(JSON.parse(article.content) as Descendant[]));

  return descendent;
}

export default articleMiddleware;
