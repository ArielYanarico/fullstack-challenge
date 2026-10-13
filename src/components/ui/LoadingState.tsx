import { Box, CircularProgress, Typography } from "@mui/material";

export function LoadingState() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        p: 5,
        minHeight: '300px',
        textAlign: 'center'
      }}
    >
      <CircularProgress size={50} thickness={4} sx={{ mb: 2 }} />
      <Typography variant="body1" color="text.secondary">
        Loading content, please wait...
      </Typography>
    </Box>
  )
}
