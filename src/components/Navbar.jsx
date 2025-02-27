import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>CourseHub</Link>
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Courses</Button>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
