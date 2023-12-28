import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';

import theme from './theme';
import AppProvider from './providers/AppProvider';
import Example from './components/Example';
import FallbackRender from './FallbackRender';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary fallbackRender={FallbackRender}>
        <AppProvider>
          <CssBaseline />
          <Example />
        </AppProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
