import React from 'react';
import { Box } from '@mui/material';

const ContentBox = ({ children }) => {
  return (
    <Box sx={{ border: '2px solid #ddd', borderRadius: '8px', width:"90%" }}>
      {children}
    </Box>
  );
};

export default ContentBox;
