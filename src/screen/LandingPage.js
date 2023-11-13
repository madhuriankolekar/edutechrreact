
import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
import Card from './Card';
import { useSpring, animated } from 'react-spring';
import Cardcss from './Cardcss.css';
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

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2, image3];

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
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
              Menu
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Imgur
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <IconButton color="inherit">
                  <SearchIcon />
                </IconButton>
              </div>
              <Paper component="form" style={{ marginLeft: 16 }}>
                <InputBase placeholder="Search..." inputProps={{ 'aria-label': 'search' }} />
              </Paper>
            </div>
          </Toolbar>
        </AppBar>

        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List>
            {['About', 'Press', 'Apps', 'Advertise', 'Community', 'Careers'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Container component="main" style={{ marginTop: 64 }}>
          <div>
            <h2>  Imgur</h2>
            <img
              src={images[currentImage]}
              alt={`Image ${currentImage + 1}`}
              style={{ maxWidth: '100%' }}
            />
          </div>

          <Container component="section" style={{ padding: '20px 0' }}>
            <Typography variant="h4" gutterBottom>
              Featured Video
            </Typography>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=W_Msv57LXrw"
              width="100%"
              height="100%"
              controls
            />
          </Container>

          <Container component="section" style={{ padding: '20px 0' }}>
            <Typography variant="h4" gutterBottom>
              Featured Cards
            </Typography>
            {Array.from({ length: 10 }, (_, index) => (
              <Card key={index} /* Pass necessary props to your Card component */ />
            ))}
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
      
      <Container component="section" style={{ padding: '20px 0' }}>
          <Typography variant="h4" gutterBottom>
            Shopping Cards (Animated)
          </Typography>
          {Array.from({ length: 20 }, (_, index) => (
            <ShoppingCard
              key={index}
              title={`Product ${index + 1}`}
              description={`Description for Product ${index + 1}`}
            />
          ))}
        </Container>
      
    </ThemeProvider>
  );
};

export default LandingPage;
