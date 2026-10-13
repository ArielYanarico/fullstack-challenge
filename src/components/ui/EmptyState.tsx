import { Box, Typography } from "@mui/material";
import OutletOutlinedIcon from '@mui/icons-material/OutletOutlined';

export function EmptyState() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      sx={{
        p: 5,
        minHeight: '300px',
        border: '2px dashed',
        borderColor: 'divider',
        borderRadius: 2,
        bgcolor: 'background.paper',
      }}
    >
      <Box sx={{ color: 'text.secondary', mb: 2 }} >
        <OutletOutlinedIcon fontSize="large"/>
      </Box>

      <Typography variant="h5" fontWeight="600" gutterBottom>
        No data available
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 400 }}>
        There's nothing to show yet. Try updating filter search.
      </Typography>

    </Box>
  )
}
