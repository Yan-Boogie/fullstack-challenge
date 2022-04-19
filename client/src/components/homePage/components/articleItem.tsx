import { ReactNode } from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { ArticleListItem } from '@@interfaces/index';
import useBreakPoint from '@@hooks/useBreakPoint';
import { SM } from '@@constants/breakPoints';

export type IArticleItem = Omit<ArticleListItem, 'id'>;
interface IScreenContent extends IArticleItem {
  bannerNode: ReactNode;
}

const LargeScreenContent = ({ title, userId, description, bannerNode }: IScreenContent) => (
  <div className="w-full h-full grid grid-cols-[auto_170px] relative">
    <div className="w-full flex flex-col items-start">
      <h3>{title}</h3>
      <h5>{userId}</h5>
      <p>{description}</p>
    </div>
    {bannerNode}
  </div>
);

const SmallScreenContent = ({ title, userId, description, bannerNode }: IScreenContent) => (
  <div className="">

  </div>
);

const ArticleItem = (props: IArticleItem) => {
  const breakPoint = useBreakPoint();

  return (
    <ButtonBase
      className="w-full h-48 p-4 hover:bg-neutral-100 duration-150">
      {breakPoint > SM ? (
        <LargeScreenContent {...props} bannerNode={<div id="Article-Cover" className="w-44 h-24 border" />} />
      ) : (
        <SmallScreenContent {...props} bannerNode={<div id="Article-Cover" className="w-44 h-24 border" />} />
      )}
    </ButtonBase>
  );
}

export default ArticleItem;
