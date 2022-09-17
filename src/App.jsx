import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import operations from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';

import { Loader } from './components/Loader/Loader';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';

const LoginView = lazy(() =>
  import('pages/LoginView/LoginView')
);
const RegisterView = lazy(() =>
  import(
    'pages/RegisterView/RegisterView')
);
const ContactsView = lazy(() =>
  import(
    'pages/ContactsView/ContactsView')
);
const Home = lazy(() =>
  import('pages/Home'));
  
const Layout = lazy(() =>
  import('layout/Layout'));

function App() {
  const dispatch = useDispatch();
  const isFetchCurrentUser = useSelector(authSelectors.getIsFetchCurrentUser);
  console.log(isFetchCurrentUser);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);
  return isFetchCurrentUser ? (
    <Loader />
  ) : (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            path="/"
            element={<PublicRoute component={<Home />} />}
          />
          <Route
            path="register"
            element={
              <PublicRoute
                restricted
                redirectTo="contacts"
                component={<RegisterView />}
              />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute
                restricted
                redirectTo="contacts"
                component={<LoginView />}
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="login" component={<ContactsView />} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;

        

       
    

