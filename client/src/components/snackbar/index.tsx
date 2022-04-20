import React, { useState, useContext, ReactNode } from 'react';
import { Snackbar as MuiSnackbar, Alert as MuiAlert } from '@mui/material';
import Button from '@@components/ui/button/button';
import CloseIcon from '@mui/icons-material/Close';

type IAlertContext = [
  IAlertModel, React.Dispatch<React.SetStateAction<IAlertModel>>
] | 'UNINITED';

export const AlertContext = React.createContext<IAlertContext>('UNINITED');

export type IAlertType = 'error' | 'success';

export interface IAlertModel {
  message: string;
  type: IAlertType;
  open: boolean;
}

const VERTICAL = 'top' as const;
const HORIZONTAL = 'center' as const;

export const useSnackbar = () => {
  const alertContext = useContext(AlertContext);
  const modelContext = useState<IAlertModel>({ message: '', type: 'success', open: false });

  if (alertContext !== 'UNINITED') return alertContext;

  return modelContext;
};

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const modelContext = useSnackbar();

  return (
    <AlertContext.Provider value={modelContext}>
      {children}
    </AlertContext.Provider>
  )
}

const Snackbar = () => {
  const [alertModel, setAlertModel] = useSnackbar();

  return (
    <MuiSnackbar
      className="w-96"
      anchorOrigin={{ vertical: VERTICAL, horizontal: HORIZONTAL }}
      onClose={() => setAlertModel({ message: '', type: alertModel.type, open: false })}
      open={alertModel.open}>
      <MuiAlert
        className="w-full flex items-center"
        severity={alertModel.type}
        action={(
          <Button round onClick={() => setAlertModel({ message: '', type: alertModel.type, open: false })} startIcon={<CloseIcon fontSize="small" />} />
        )}>
        <span>{alertModel.message}</span>
      </MuiAlert>
    </MuiSnackbar>
  );
};

export default Snackbar;
