import { Box, Typography, Link } from '@mui/material';

const PageModule = (props) => {
  const Header = props.header;
  const Content = props.content;

  const handleDrawerToggle = () => {
    const event = new Event('toggle-navbar');
    dispatchEvent(event);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Box
        sx={{
          display: { sm: 'block', xs: 'none' },
          flexDirection: 'column',
          width: 256,
        }}
      />
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header onDrawerToggle={handleDrawerToggle} />
        <Box
          component='main'
          sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}
        >
          <Content />
        </Box>
        <Box component='footer' sx={{ p: 2, bgcolor: '#eaeff1' }}>
          <Typography variant='body2' color='text.secondary' align='center'>
            {'Copyright © '}
            <Link color='inherit' href='https://mui.com/'>
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PageModule