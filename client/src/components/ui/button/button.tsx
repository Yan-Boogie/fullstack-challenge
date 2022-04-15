import { ReactNode } from 'react';
import { Button as MuiButton } from '@mui/material';
import useBreakPoint from '@@hooks/useBreakPoint';
import { LG } from '@@constants/breakPoints';

interface IButton {
  size?: 'small' | 'medium';
  startIcon?: ReactNode;
  disabled?: boolean;
  bgColor?: 'none' | 'primary';
  children?: ReactNode;
}

const btnSizeMapper = {
  small: 'w-20',
  medium: 'w-32',
};

const btnBGColorMapper = {
  none: '',
  primary: 'bg-green-900',
};

const Button = (props: IButton) => {
  const {
    size = 'small',
    startIcon = null,
    disabled = false,
    bgColor = 'none',
    children,
  } = props;

  const windowSize = useBreakPoint();

  if (startIcon) {
    return (
      <MuiButton
        disabled={disabled}
        className={`flex items-center	space-x-2 rounded-3xl ${btnSizeMapper[`${size}`]} ${btnBGColorMapper[`${bgColor}`]}`}
      >
        {startIcon}
        {windowSize >= LG ? children : null}
      </MuiButton>
    );
  }

  return (
    <MuiButton
      disabled={disabled}
      className={`space-x-2 rounded-3xl ${btnSizeMapper[`${size}`]} ${btnBGColorMapper[`${bgColor}`]}`}>
      {children}
    </MuiButton>
  );
};

export default Button;