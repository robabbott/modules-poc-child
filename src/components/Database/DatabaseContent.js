import * as React from 'react';
import { AppBar, Box, Paper, Skeleton } from '@mui/material/';

export default function DatabaseContent() {
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <Box>
        <Skeleton variant='text' />
        <Skeleton variant='circular' width={40} height={40} />
        <Skeleton variant='rectangular' width={210} height={118} />
      </Box>
    </Paper>
  );
}
