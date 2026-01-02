// @mui
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// @project
import MainCard from "@/components/MainCard";

// ---------------------------------  CHIP - PAGE  ---------------------------------

export default function ChipPage() {
  return (
    <MainCard title="Chip Component Showcase">
      <Grid
        container
        sx={{
          gap: 6,
        }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <MainCard title="Color">
            <Stack direction="row" sx={{ gap: 2, flexWrap: "wrap", mb: 2 }}>
              <Chip label="primary" color="primary" />
              <Chip label="warning" color="warning" />
              <Chip label="success" color="success" />
              <Chip label="error" color="error" />
            </Stack>
          </MainCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <MainCard title="Size">
            <Stack direction="row" sx={{ gap: 2, flexWrap: "wrap" }}>
              <Chip label="small" size="small" color="primary" />
              <Chip label="medium" size="medium" color="primary" />
            </Stack>
          </MainCard>
        </Grid>
      </Grid>
    </MainCard>
  );
}
