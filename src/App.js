import React from 'react';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import CSMS from './pages/CSMS';
import { Box } from '@mui/material';

function App() {
  return (
    <>
    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3}}>
        <CSMS />
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
    </>
  );
}

export default App;
