import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton, makeStyles} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


export default function SideDrawer(props) {


  const [state, setState] = React.useState({
    left: false
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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      bgcolor="red"
    >
      <List>
        {/* {['Dashboard', 'Activity List', 'Carer Registration', 'Resident Registration'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
        <ListItem button key={'Dashboard'} ><ListItemText primary={'Dashboard'} /></ListItem>
        <ListItem button key={'Activity List'} ><ListItemText primary={'Activity List'} /></ListItem>
        <ListItem button key={'Carer Registration'}><ListItemText primary={'Carer Registration'} /></ListItem>
        <ListItem button key={'Resident Registration'}><ListItemText primary={'Resident Registration'} /></ListItem>
      </List>
      <Divider />
    </Box>
  );


  return (
    <div>
     
        <React.Fragment key={'left'}>
          {/* <Button onClick={toggleDrawer('left', true)}>{'lft'}</Button> */}
          <IconButton
            color="inherit"
            // aria-label="open drawer"
            onClick={toggleDrawer('left', true)}
            // edge="start"
            // sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
            PaperProps={{
              sx: {
                backgroundColor: "pink",
                color: "red",
              }
            }}
          >
            {list('left')}
          </SwipeableDrawer>
        </React.Fragment>

    </div>
  );
}
