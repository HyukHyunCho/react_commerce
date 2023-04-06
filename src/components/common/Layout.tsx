import React, { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';

interface IProps {
  title: string;
  size?: number;
  children: React.ReactNode;
}

export default function Layout({ title, size, children }: IProps) {
  return (
    <Container
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Box sx={{ mt: 7 }}>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: size,
          mt: 5,
        }}
      >
        {children}
      </Box>
    </Container>
  );
}
