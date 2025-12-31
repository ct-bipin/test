// @mui
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// @project
import { MainCard } from "@/components";

// ---------------------------------  CHIP - PAGE  ---------------------------------

export default function ChipPage() {
  return (
    <MainCard title="Chip Component Showcase">
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 6 }}>
          <MainCard title="Color">
            <Stack direction="row" sx={{gap: 2, flexWrap: 'wrap', mb:2}}>
              <Chip label="primary" color="primary" />
              <Chip label="warning" color="warning" />
              <Chip label="success" color="success" />
              <Chip label="error" color="error" />
            </Stack>
            <Stack direction="row" sx={{gap: 2, flexWrap: 'wrap'}}>
              <Chip label="primary" color="primary" variant="outlined" />
              <Chip label="warning" color="warning" variant="outlined" />
              <Chip label="success" color="success" variant="outlined" />
              <Chip label="error" color="error" variant="outlined" />
            </Stack>
          </MainCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <MainCard title="Size">
            <Stack direction="row" spacing={2} flexWrap="wrap">
              <Chip label="small" size="small" color="primary" />
              <Chip label="medium" size="medium" color="primary" />
            </Stack>
          </MainCard>
        </Grid>
      </Grid>
    </MainCard>
  );
}
