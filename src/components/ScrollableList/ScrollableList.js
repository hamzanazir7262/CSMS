
import React, { useRef } from 'react';
import { Box, Typography, IconButton } from '@mui/material';

const ScrollableList = ({ title, items, leftArrowIcon, rightArrowIcon }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -100, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ paddingTop: 1, position: 'relative', textAlign: 'center' }}>
      <Typography
        variant="span"
        gutterBottom
        sx={{
          border: "1px solid white",
          color: "#ddd",
          borderRadius: 1,
          paddingLeft: 3,
          paddingRight: 3
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          overflowX: 'hidden', 
          whiteSpace: 'nowrap',
          border: "1px solid white",
          borderRadius: 2,
          marginBottom: 1,
          marginTop: 1,
          width: "100%"
        }}
      >
        <IconButton
          onClick={scrollLeft}
          sx={{
            position: 'absolute',
            left: '0',
            zIndex: 1,
          }}
        >
          <img src={leftArrowIcon} alt="Left Arrow" style={{ height: '24px' }} />
        </IconButton>
        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '5px 15px',
            overflowX: 'auto', 
            scrollbarWidth: 'none', 
            '&::-webkit-scrollbar': {
              display: 'none', 
            },
          }}
        >
          {items.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: 'flex', 
                flexDirection: 'row',
                alignItems: 'center',
                textAlign: 'center',
                margin: '6px 12px',
                width: '100px', 
                cursor: 'pointer', 
                border: '1px solid #ddd', 
                borderRadius: '4px', 
                padding: '5px',
              }}
            >
              <img src={item.icon} alt={item.title} style={{ height: '10px' }} />
              <Typography variant="caption" sx={{ fontSize: '0.5rem', color: "white" }}>
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>

        <IconButton
          onClick={scrollRight}
          sx={{
            position: 'absolute',
            right: '0',
            zIndex: 1,
          }}
        >
          <img src={rightArrowIcon} alt="Right Arrow" style={{ height: '24px' }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ScrollableList;
