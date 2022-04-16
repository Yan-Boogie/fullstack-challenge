import { ButtonGroup } from '@mui/material';

export const Toolbar = ({ children, ...props }) => {
  return (
    <ButtonGroup {...props}>
      {children}
    </ButtonGroup>
  );
};
