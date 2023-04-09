import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';
interface IProps {
  title: string;
  size?: number;
  children: React.ReactNode;
}

export default function Layout({ title, children }: IProps) {
  return (
    <Grid
      container
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        m: 1,
      }}
    >
      <Grid xs={12} mt={3}>
        <Typography
          component="h1"
          variant="h5"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            m: 1,
          }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid xs={12} md={10}>
        <Box sx={{ overflowX: 'scroll', overflowY: 'hidden' }}>{children}</Box>
      </Grid>
    </Grid>
  );
}
