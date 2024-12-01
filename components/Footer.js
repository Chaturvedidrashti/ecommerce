import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ textAlign: 'center', padding: 2, backgroundColor: '#f5f5f5' }}>
      <Typography variant="body2" color="text.secondary">
        &copy; 2024 E-Commerce. All Rights Reserved.
      </Typography>
    </Box>
  );
}
