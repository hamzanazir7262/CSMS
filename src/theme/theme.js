import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d47a1', 
    },
    secondary: {
      main: '#f44336', 
    },
  },
  typography: {
    h6: {
      fontSize: '1.25rem',
     color:"white"
      
    },
  },
});

export default theme;
