/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
const firebaseConfig = {
  apiKey: 'AIzaSyDv8ONOeJe0Yk8_ZylNnnGPH3WLZMEHR30',
  authDomain: 'dodo4114.firebaseapp.com',
  projectId: 'dodo4114',
  storageBucket: 'dodo4114.appspot.com',
  messagingSenderId: '373250171609',
  appId: '1:373250171609:web:dcc194d15b29ab2dd714c8',
  measurementId: 'G-M5BRR7Q74S',
};

export function App() {
  const { i18n } = useTranslation();
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Dodo!"
        defaultTitle="Dodo!"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Dodo's homepage" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
