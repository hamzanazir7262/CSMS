import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Box } from '@mui/material';

const ReferenceProcessStatus = () => {
  const headerIcons = [
    { image: '/assets/icons/totalicon.png', title: 'Ref no' },
    { image: '/assets/icons/totalicon.png', title: 'Ref no' },
    { image: '/assets/icons/totalicon.png', title: 'Ref no' },
    { image: '/assets/icons/totalicon.png', title: 'Ref no' },
    { image: '/assets/icons/totalicon.png', title: 'Ref no' },
    { image: '/assets/icons/totalicon.png', title: 'Ref no' }, { image: '/assets/icons/totalicon.png', title: 'Ref no' },
    { image: '/assets/icons/totalicon.png', title: 'Ref no' },
    { image: '/assets/icons/totalicon.png', title: 'Ref no' }, { image: '/assets/icons/totalicon.png', title: 'Ref no' },
    { image: '/assets/icons/totalicon.png', title: 'Ref no' },
    { image: '/assets/icons/totalicon.png', title: 'Ref no' },
  ];
   const emptyRows = 3;

  return (
    <Box sx={{textAlign:"center"}}>
       <Typography
        variant="span"
        gutterBottom
        sx={{
          border: "1px solid white",
          color: "#ddd",
          borderRadius: 1,
          paddingLeft: 3,
          paddingRight: 3,
          
        }}
      >
       References Process Status
      </Typography>
    <TableContainer component={Paper} elevation={0} style={{ border: '1px solid white', background: "none", borderRadius:1, marginTop:7 }}>
      <Table sx={{ borderCollapse: 'separate' }}>
        <TableHead>
          <TableRow>
            {headerIcons.map((icon, index) => (
              <TableCell key={index} align="center" style={{ border: '1px solid #ccc', padding: '2px',borderRadius:5 }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid white", borderRadius: 1 }}>
                  <img src={icon.image} alt={icon.title} style={{ width: '10px', height: '10px' }} />
                  <Typography sx={{ fontSize: 12, color: "white"}}>{icon.title}</Typography>
                </Box>
              </TableCell>
            ))}
            <TableCell align="center" style={{ border: '1px solid #ccc', padding: '8px', color:"white", fontSize:12, borderRadius:5 }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: emptyRows }).map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {headerIcons.map((_, index) => (
                <TableCell key={index} align="center" style={{ border: '1px solid #ccc', borderRadius:5 }}>
                  {/* Empty cell */}
                </TableCell>
              ))}
              <TableCell align="center" style={{ border: '1px solid #ccc', padding: '0px 8px', borderRadius:5 }}>
                <IconButton>
                  <img src="/assets/icons/eyeicon.png" alt="icon" style={{ width: '14px', height: '14px' }} />
                </IconButton>
                <IconButton>
                  <img src="/assets/icons/tickicon.png" alt="icon" style={{ width: '14px', height: '14px' }} />
                </IconButton>
                <IconButton>
                  <img src="/assets/icons/infoicon.png" alt="icon" style={{ width: '14px', height: '14px' }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
};

export default ReferenceProcessStatus;
