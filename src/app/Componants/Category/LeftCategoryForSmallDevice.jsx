'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import HeaderText from './HeaderText';
import CategorySearchBar from './CategorySearchBar';
import AllCategory from './AllCategory';
import { my_context } from '@/app/ContextProvider';
import { FiAlignJustify } from 'react-icons/fi';

export default function AnchorTemporaryDrawer() {
  const { cartData } = React.useContext(my_context);

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className='xl:hidden block'>
        <div className="w-fit bg-white">
          <HeaderText />
          {/* Search Input */}
          <CategorySearchBar />
        </div>

        <div className="w-fit h-[90%] overflow-hidden mb-20 bg-white rounded-b-lg">
          {/* Header */}
          <AllCategory data={cartData} />
        </div>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div className='block  absolute -top-2 xl:hidden'>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* Hamburger Icon Button */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(anchor, true)}
          >
            {/* <FiAlignJustify className=''/> */}
            <img src="/Dua.png" className='w-14 h-14' alt="" />

          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
