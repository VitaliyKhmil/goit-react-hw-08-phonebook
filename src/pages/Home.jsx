import { Box } from 'styles/Box';
import imgDesktop from 'images/phone2.gif';

const Home = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <picture>
        <source srcSet={imgDesktop} />
      </picture>
      <img className='phonebook' src={imgDesktop} alt="phone" />      
    </Box>
  );
};

export default Home;
