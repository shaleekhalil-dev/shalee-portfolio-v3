import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from "@chakra-ui/react";
import App from './App';
import theme from "./theme";
import './i18n';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Failed to find the root element");
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  );
}