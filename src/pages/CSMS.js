import React from 'react';
import { Box, Typography } from '@mui/material';
import ContentBox from '../components/CentralContent/ContentBox'; 
import ScrollableList from '../components/ScrollableList/ScrollableList';
import ReferenceProcessStatus from '../components/Table/ReferenceProcessStatus';

const leftArrowIcon = '/assets/icons/leftarrowicon.png'; 
const rightArrowIcon = '/assets/icons/rightarrowicon.png';

const departments = [
  { id: 1, title: 'Ref no', icon: '/assets/icons/totalicon.png' },
  { id: 2, title: 'Ref no', icon: '/assets/icons/totalicon.png' },
  { id: 3, title: 'Ref no', icon: '/assets/icons/totalicon.png' },
  { id: 4, title: 'Ref no', icon: '/assets/icons/totalicon.png' },
  { id: 5, title: 'Ref no', icon: '/assets/icons/totalicon.png' },
  { id: 6, title: 'Ref no', icon: '/assets/icons/totalicon.png' },
  { id: 7, title: 'Ref no', icon: '/assets/icons/totalicon.png' },
  { id: 8, title: 'Ref no', icon: '/assets/icons/totalicon.png' },
  { id: 9, title: 'Ref no', icon: '/assets/icons/totalicon.png' },
  { id: 10, title: 'Ref no', icon: '/assets/icons/totalicon.png' },
  { id: 11, title: 'Ref no', icon: '/assets/icons/totalicon.png' },
  { id: 12, title: 'Ref no', icon: '/assets/icons/totalicon.png' },
  { id: 13, title: 'Ref no', icon: '/assets/icons/totalicon.png' },
  { id: 13, title: 'Ref no', icon: '/assets/icons/totalicon.png' },
  { id: 13, title: 'Ref no', icon: '/assets/icons/totalicon.png' },
  { id: 13, title: 'Ref no', icon: '/assets/icons/totalicon.png' },
];

const CSMS = () => {
  return (
    <Box
      sx={{
        marginLeft: "5%",
        marginRight: "5%",
        borderRadius: 2,
        border: "1px solid white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", 
        justifyContent: "center",
        
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          textAlign: "center",
          width: '100%', 
        }}
      >
        Central Status Management System (CSMS)
      </Typography>

      <ContentBox sx={{ width: '100%' }}> 
      <ScrollableList
      title="Department List"
      items={departments}
      leftArrowIcon={leftArrowIcon}
      rightArrowIcon={rightArrowIcon}
    />
      <ScrollableList
      title="Department Process Status"
      items={departments}
      leftArrowIcon={leftArrowIcon}
      rightArrowIcon={rightArrowIcon}
    />
    <ReferenceProcessStatus/>
      </ContentBox>

      <Typography sx={{ padding: 3 }}>
      </Typography>
    </Box>
  );
};

export default CSMS;
