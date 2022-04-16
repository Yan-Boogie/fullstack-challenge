import { ReactNode, useMemo } from 'react';
import { Button as MuiButton, IconButton, ButtonProps } from '@mui/material';
import useBreakPoint from '@@hooks/useBreakPoint';
import { LG } from '@@constants/breakPoints';

interface IButton extends ButtonProps {
  className?: string;
  size?: 'small' | 'medium';
  startIcon?: ReactNode;
  disabled?: boolean;
  bgColor?: keyof typeof btnBGColorMapper;
  children?: ReactNode;
  round?: boolean;
}

const btnSizeMapper = {
  round: 'w-10 h-10',
  small: 'w-20 h-10',
  medium: 'w-32 h-10',
};

const btnBGColorMapper = {
  none: '',
  primary: 'bg-green-900 hover:bg-green-700',
  active: 'bg-amber-200 hover:bg-amber-200',
};

const Button = (props: IButton) => {
  const {
    className = '',
    size = 'small',
    startIcon = null,
    bgColor = 'none',
    children = null,
    round = false,
    ...rest
  } = props;

  const windowSize = useBreakPoint();

  const isBtnRound = useMemo(() => {
    if (round) return true;

    if (!startIcon) return false;

    if (windowSize >= LG) return false;

    return true;
  }, [round, windowSize, startIcon]);

  if (isBtnRound) {
    return (
      <div className={`${btnSizeMapper.round} ${className} flex justify-center items-center`}>
        <IconButton size={size} className={`${btnBGColorMapper[`${bgColor}`]}`} {...rest}>
          {startIcon}
        </IconButton>
      </div>
    );
  }

  return (
    <MuiButton
      className={`flex items-center	space-x-2 rounded-3xl ${btnSizeMapper[`${size}`]} ${btnBGColorMapper[`${bgColor}`]} ${className}`}
      {...rest}
    >
      {startIcon}
      {children}
    </MuiButton>
  );
};

export default Button;