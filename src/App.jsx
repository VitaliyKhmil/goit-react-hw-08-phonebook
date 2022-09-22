import { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { PublicRoute } from 'routes/PublicRoute';
import { PrivateRoute } from 'routes/PrivateRoute';

import { Layout } from 'layout/Layout';
import   Home  from 'pages/Home';
import Register from 'pages/RegisterView/RegisterView';
import Login from 'pages/LoginView/LoginView';
import Contacts from 'pages/ContactsView/ContactsView';

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
            element={
              <PublicRoute
                restricted
                redirectTo="contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute
                restricted
                redirectTo="contacts"
                component={<Login />}
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
