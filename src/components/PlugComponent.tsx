import '../App.css';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export const Plug = () => {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" component="div" gutterBottom>
        No results found
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Try adjusting your search or filter to find what you're looking for.
      </Typography>
    </Box>
  )
}