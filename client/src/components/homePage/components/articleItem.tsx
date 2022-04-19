import ButtonBase from '@mui/material/ButtonBase';
import { ArticleListItem } from '@@interfaces/index';

export type IArticleItem = Omit<ArticleListItem, 'id'>;

const ArticleItem = (props: IArticleItem) => {
  const { title, userId, description, bannerNode } = props;

  return (
    <ButtonBase
      className="w-full h-48 p-4 hover:bg-neutral-100 duration-150">
      <div className="w-full h-full grid grid-rows-[56px_auto_74px]">
        <h3 className="font-bold text-lg text-left">{title}</h3>
        <h5 className="text-sm leading-tight text-left">{userId}</h5>
        <p className="text-base text-gray-400 font-light text-ellipsis overflow-hidden text-left">{description}</p>
      </div>
    </ButtonBase>
  );
}

export default ArticleItem;
