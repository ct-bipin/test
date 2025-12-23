import {
  Stack,
  Typography,
  Divider,
  Button,
  Container,
  Card,
  CardHeader,
  CardContent,
  IconButton,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const ButtonPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Card>
        <CardHeader title="Button Component Showcase" />
        <Divider />

        <CardContent>
          <Stack spacing={6}>

            {/* ================= Contained Section ================= */}
            <Stack spacing={2}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h6" fontWeight={600}>
                  Contained
                </Typography>

              </Stack>

              <Stack direction="row" spacing={2} flexWrap="wrap">
                <Button variant="contained">Primary</Button>
              </Stack>
            </Stack>

            {/* ================= Outlined Section ================= */}
            <Stack spacing={2}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h6" fontWeight={600}>
                  Outlined
                </Typography>

              </Stack>

              <Stack direction="row" spacing={2} flexWrap="wrap">
                <Button variant="outlined">Primary</Button>
              </Stack>
            </Stack>

            {/* ================= Text Section ================= */}
            <Stack spacing={2}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h6" fontWeight={600}>
                  Icon Button
                </Typography>

              </Stack>

              <Stack direction="row" spacing={2} flexWrap="wrap">
                <IconButton color="primary">
                  <VisibilityOutlinedIcon />
                </IconButton>
              </Stack>
            </Stack>

          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ButtonPage;
