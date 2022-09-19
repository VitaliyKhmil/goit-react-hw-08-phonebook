import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { operations  } from 'redux/authSlice';
import { Loader } from './components/Loader/Loader';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import { useAuth } from 'hooks/useAuth';

const Login = lazy(() => import('pages/LoginView/LoginView'));
const Register = lazy(() => import('pages/RegisterView/RegisterView'));
const Contacts = lazy(() => import('pages/ContactsView/ContactsView'));
const Home = lazy(() => import('pages/Home'));
const Layout = lazy(() => import('layout/Layout'));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);
  return isRefreshing ? (
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

export default App;

        

       
    

