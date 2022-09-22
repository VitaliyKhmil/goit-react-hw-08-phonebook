import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from 'routes/PublicRoute';
import { PrivateRoute } from 'routes/PrivateRoute';

import { Layout } from 'layout/Layout';
import   Home  from 'pages/Home';
import  RegisterView  from 'pages/RegisterView/RegisterView';
import LoginView from 'pages/LoginView/LoginView';
import  ContactsView  from 'pages/ContactsView/ContactsView';

export const App = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            index
            element={<PublicRoute restricted component={<Home />} />}
          />
          <Route
            path="register"
            element={<PublicRoute restricted component={<RegisterView />} />}
          />
          <Route
            path="login"
            element={<PublicRoute restricted component={<LoginView />} />}
          />
          <Route
            path="contacts"
            element={<PrivateRoute component={<ContactsView />} />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
