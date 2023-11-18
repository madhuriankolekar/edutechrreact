
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CardContent from '@material-ui/core/CardContent';
import {
  AppBar,
  Container,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Paper,
  Divider,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ReactPlayer from 'react-player';
import image1 from '../assert/images1.jpg';
import image2 from '../assert/images2.jpg';
import image3 from '../assert/images3.jpg';
import image4 from '../assert/download2.jpg';
import image5 from '../assert/download5.jpg';
import image6 from '../assert/images.jpg';
import image7 from '../assert/images55.jpg';
import image8 from '../assert/images11.jpg';
import Card from './Card';
import MathCardsScreen from './MathCardsScreen';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Collapse from '@material-ui/core/Collapse';
import { BrowserRouter as Router, Routes, Route, Link , Switch } from 'react-router-dom';

import Grade5Screen from './Grade5Screen'; // Import the Grade5Screen component

import { useSpring, animated } from 'react-spring';
import Cardcss from './Cardcss.css';

const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };
const theme = createTheme({
  palette: {
    primary: {
      main: '#800080', // Purple color for the header
    },
    background: {
      default: '#f3e5f5', // Light purple color for the rest of the page
    },
  },
});

const LandingPage = () => {

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [isMathOpen, setIsMathOpen] = useState(false);
 
  const handleMathToggle = () => {
    setIsMathOpen(!isMathOpen);
  };


  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2, image3,image4,image5,image6,image7,image8];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentImage, images.length]);
  const ShoppingCard = ({ title, description }) => {
    const styles = useSpring({
      from: { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
      to: async (next) => {
        await next({ opacity: 1, transform: 'translate3d(0, 0, 0)' });
      },
    });
  
    return (
      <animated.div style={styles}>
        <Card title={title} description={description} />
      </animated.div>
    );
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        
        <AppBar position="sticky">
      <Toolbar style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
            Menu
          </IconButton>
          <Typography variant="h6" style={{ marginLeft: 16 }}>
            Edutech
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Paper component="form">
            <InputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              style={{ width: '300px', padding: '8px' }}
            />
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
      </Toolbar>
    </AppBar>
    <Router>
      <div>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List>
            <ListItem button onClick={handleMathToggle}>
              <ListItemText primary="Mathematics" />
              <ListItemIcon>
                <ChevronRightIcon />
              </ListItemIcon>
            </ListItem>
            <Collapse in={isMathOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {/* Use the Link component to navigate to Grade5Screen */}
                <ListItem button component={Link} to="/grade5" style={linkStyle}>
                  <ListItemText primary="Grade 5" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Drawer>

        {/* Define the route for Grade5Screen within Routes */}
        <Switch>
        <Route path="/grade5" component={Grade5Screen} />
      </Switch>
      </div>
    </Router>
        <Container component="main" style={{ marginTop: 64 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
  <img
    src={images[currentImage]}
    alt={`Image ${currentImage + 1}`}
    style={{ maxWidth: '50%', marginRight: '20px' }}
  />
  <div>
    <h2>Edutech Made Learning Easier</h2>
    <p>
      The Edutech application revolutionizes learning with a wealth of examples, solutions, and instructional videos. Our platform is designed to make learning easy and enjoyable, providing students with a comprehensive educational experience. Explore a diverse range of subjects with confidence, as our application empowers you with the resources you need to succeed.
    </p>
  </div>
</div>

<MathCardsScreen/>   

          <Container component="section" style={{ padding: '20px 0' }}>
            <Typography variant="h4" gutterBottom>
              Featured Video
            </Typography>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=HIxr36qhjRQ"
              width="100%"
              height="100%"
              controls
            />
          </Container>

          <Container component="section" style={{ padding: '20px 0' }}>
            <Typography variant="h4" gutterBottom>
              Scroller Section
            </Typography>
            <Divider style={{ margin: '20px 0' }} />
            {/* Add your scroller component here */}
          </Container>
        </Container>
      </div>
       </ThemeProvider>
  );
};

export default LandingPage;



// <--Container component="section" style={{ padding: '20px 0' }}>
// <Typography variant="h4" gutterBottom>
//   Featured Cards
// </Typography>
// {Array.from({ length: 10 }, (_, index) => (
//   <Card key={index} /* Pass necessary props to your Card component */ />
// ))}
// </Container>-->


