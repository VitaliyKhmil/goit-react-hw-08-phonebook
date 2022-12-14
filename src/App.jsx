import { lazy, Suspense, } from 'react';
import { useAuth } from 'hooks/useAuth';
import { Route, Routes, Navigate } from 'react-router-dom';
import  PublicRoute  from 'routes/PublicRoute';
import  PrivateRoute  from 'routes/PrivateRoute';
import { Loader } from './components/Loader/Loader';

const Layout = lazy(() => import('layout/Layout'));
const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/ContactsView/ContactsView'));
const SignUp = lazy(() => import('pages/RegisterView/RegisterView'));
const LogIn = lazy(() => import('pages/LoginView/LoginView'));


export const App = () => {
  const { isRefreshing } = useAuth();
  
  return isRefreshing ? (
     <h1>Refreshing user...</h1>
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            path="/"
            element={<PublicRoute component={<Home />} />}
          />
          <Route
            path="signUp"
            element={
              <PublicRoute
                restricted
                redirectTo="contacts"
                component={<SignUp />}
              />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute
                restricted
                redirectTo="contacts"
                component={<LogIn />}
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
