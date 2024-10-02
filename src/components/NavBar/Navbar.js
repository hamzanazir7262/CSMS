import React from 'react';
import { IconButton, InputBase, Box } from '@mui/material';

const Navbar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft:"5%",
        marginRight:"5%",
        padding: '10px 20px'}}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="/assets/icons/businesswindowicon.png"
          alt="Logo"
          style={{ height: '50px', marginRight: '10px' }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solid white',
          borderRadius: 5,
          padding: '0 10px',
          width: 600,
          justifyContent: 'center', 
        }}
      >
              <img
          src="/assets/icons/serchicon.png"
          alt="Search"
          style={{ height: '15px', marginRight: '10px' }}
        />

        <InputBase
          placeholder="Search here Business Windows"
          sx={{
            flex: 1,
            textAlign: 'center',
            '& input': {
              textAlign: 'center',
              color:"white"
            },
          }}
        />
        <img
          src="/assets/icons/micicon.png"
          alt="Search"
          style={{ height: '15px', marginLeft: '10px' }}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton color="inherit">
          <img
            src="/assets/icons/getappicon.png"
            alt="Notification"
            style={{ height: '30px' }}
          />
        </IconButton>
        <IconButton color="inherit">
          <img
            src="/assets/icons/settingicon.png"
            alt="Settings"
            style={{ height: '30px' }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;
