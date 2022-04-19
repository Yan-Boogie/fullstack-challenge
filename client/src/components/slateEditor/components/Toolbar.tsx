import { ButtonGroup } from '@mui/material';

export const Toolbar = ({ children, ...props }) => {
  return (
    <div className="px-2 border-b w-full h-12 flex items-center">
      <ButtonGroup {...props}>
        {children}
      </ButtonGroup>
    </div>
  );
};
