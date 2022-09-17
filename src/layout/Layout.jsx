import { Outlet } from 'react-router-dom';
import { Box } from 'styles/Box';
import { AppBar } from '../layout/AppBar/AppBar';

export const Layout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      minHeight="100vh"
      backgroundColor="backgroundColor"
    >
      <AppBar />

      <Box display="flex" flexDirection="column" alignItems="center" pt="xl">
          <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;