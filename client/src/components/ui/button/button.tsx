import { ReactNode, useMemo, MouseEventHandler } from 'react';
import { Button as MuiButton, IconButton } from '@mui/material';
import useBreakPoint from '@@hooks/useBreakPoint';
import { LG } from '@@constants/breakPoints';

interface IButton {
  className?: string;
  size?: 'small' | 'medium';
  startIcon?: ReactNode;
  disabled?: boolean;
  bgColor?: 'none' | 'primary';
  children?: ReactNode;
  round?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
}

const btnSizeMapper = {
  round: 'w-10 h-10',
  small: 'w-20 h-10',
  medium: 'w-32 h-10',
};

const btnBGColorMapper = {
  none: '',
  primary: 'bg-green-900 hover:bg-green-700',
};

/**
 * @todo
 * isBtnRound ????????????????????????????????????????
 */
const Button = (props: IButton) => {
  const {
    className = '',
    size = 'small',
    startIcon = null,
    disabled = false,
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

  console.log('isBtnRound-->\n', isBtnRound);

  if (isBtnRound) {
    return (
      <IconButton className={className} size={size} {...rest}>
        {startIcon}
      </IconButton>
    );
  }

  return (
    <MuiButton
      disabled={disabled}
      className={`flex items-center	space-x-2 rounded-3xl ${btnSizeMapper[`${size}`]} ${btnBGColorMapper[`${bgColor}`]} ${className}`}
      {...rest}
    >
      {startIcon}
      {children}
    </MuiButton>
  );
};

export default Button;