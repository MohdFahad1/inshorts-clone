import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import categories from '../data/category';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function SwipeableTemporaryDrawer({ setCategory}) {


  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  const [state, setState] = React.useState({
    left: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{padding: 2}}>
       <ListItem>Categories</ListItem>
      </List>
      <Divider />
      <List>
        {categories.map((text) => (
          <ListItem key={text}>
            <ListItemButton style={{borderRadius:'10px'}}>
              <ListItemText primary={text} onClick={()=>setCategory(text)}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
          <Button onClick={toggleDrawer("left", true)}><MenuIcon style={{color: 'black'}}/></Button>
          <ThemeProvider theme={darkTheme}>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
          </ThemeProvider>
    </div>
  );
}