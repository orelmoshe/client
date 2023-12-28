import React from 'react';

export interface AppProps {}

export const AppContext = React.createContext<AppProps>({} as AppProps);

const AppProvider = ({ children }: any) => {
  const value = {};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
