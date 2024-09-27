import { QueryClientProvider } from '@tanstack/react-query';
import { Analytics } from "@vercel/analytics/react";
import dayjs from 'dayjs';
import 'dayjs/locale/nl-be';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { QUERY_CLIENT } from './utils/vendors/Tanstack/ReactQuery';

dayjs.locale('nl-be');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={QUERY_CLIENT}>
      <Analytics debug={process.env.NODE_ENV === 'development'} />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
