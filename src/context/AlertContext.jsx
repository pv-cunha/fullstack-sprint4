import React from 'react';
import { v4 } from 'uuid';
import Alert from '../components/alert/Alert';

const AlertContext = React.createContext();

const useAlert = () => {
  const context = React.useContext(AlertContext);

  if (!context) {
    throw new Error('useToast must be used within a AlertProvider !');
  }

  return context;
};

const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = React.useState([]);

  const addAlert = React.useCallback(({ text, time = 1000 }) => {
    const id = v4();

    const alert = { id, text };

    setAlerts((state) => [...state, alert]);

    setTimeout(() => removeAlert(alert.id), time);

    // eslint-disable-next-line
  }, []);

  const removeAlert = React.useCallback((id) => {
    setAlerts((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <AlertContext.Provider value={{ addAlert, removeAlert }}>
      {children}
      <Alert alerts={alerts} />
    </AlertContext.Provider>
  );
};

export { AlertProvider, useAlert };
