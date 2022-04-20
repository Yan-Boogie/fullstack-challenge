import { useState } from 'react';
import { useRouter } from 'next/router';
import { useEthers } from '@usedapp/core';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Explore as ExploreIcon, Create as CreateIcon } from '@mui/icons-material';
import { useSnackbar } from '@@components/snackbar';

enum Navigator {
  Explore,
  Create
}

const Footer = () => {
  const [value, setValue] = useState<Navigator>(Navigator.Explore);
  const router = useRouter();
  const { account } = useEthers();
  const [, setModel] = useSnackbar();

  return (
    <BottomNavigation
      className="border-t fixed bottom-0 left-0 w-full"
      value={value}
      onChange={(_, newValue: Navigator) => {
        switch (newValue) {
          case Navigator.Explore: {
            router.push('/');
            setValue(newValue);

            return;
          }

          case Navigator.Create: {
            if (!account) {
              setModel({ open: true, type: 'error', message: '請先連結錢包' });
              return;
            }
    
            router.push('/drafts');
            setValue(newValue);

            return;
          }

          default: return;
        }
      }}>
      <BottomNavigationAction icon={<ExploreIcon />} />
      <BottomNavigationAction icon={<CreateIcon />} />
    </BottomNavigation>
  );
}

export default Footer;
