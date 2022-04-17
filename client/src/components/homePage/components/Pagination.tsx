import Button from '@@components/ui/button/button';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

export interface IPagination {
  pageCount: number;
  page: number;
  setPage: (page: number) => void;
}

const Pagination = (props: IPagination) => {
  const {
    page,
    pageCount,
    setPage,
  } = props;

  console.log('page-->\n', page);

  const leftBtnDisabled = page === 0;
  const rightBtnDisabled = page === pageCount - 1;

  return (
    <div className="flex flex-row justify-center p-2 w-full">
      <Button round disabled={leftBtnDisabled} startIcon={<ChevronLeft />} onClick={() => setPage(page - 1)} />
      {Array.from(Array(pageCount)).map((_, idx) => (
         <Button
          round
          key={idx}
          startIcon={<span className="w-7 h-7">{idx}</span>}
          bgColor={page === idx ? 'active' : 'none'}
          onClick={() => {
            if (page === idx) return;

            setPage(idx);
          }} />
      ))}
      <Button round disabled={rightBtnDisabled} startIcon={<ChevronRight />} onClick={() => setPage(page + 1)} />
    </div>
  );
};

export default Pagination;
