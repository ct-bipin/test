import { useNavigate } from "react-router-dom";

// @mui
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

// @project
import MainCard from "@/components/MainCard";

const routes = [
  { label: "Button", path: "/component/button" },
  { label: "Chip", path: "/component/chip" },
  { label: "TextField", path: "/component/textfield" },
  { label: "Color", path: "/component/color" },
  { label: "Pagination", path: "/component/pagination" },
  { label: "Checkbox", path: "/component/checkbox" },
  { label: "Typography", path: "/component/typography" },
  { label: "Tab", path: "/component/Tab" },
];

// ---------------------------------  ROUTE PAGE  ---------------------------------

export default function RoutePage() {
  const navigate = useNavigate();

  return (
    <MainCard title="Component Showcase Dashboard">
      <Grid
        container
        sx={{
          gap: 3,
        }}
      >
        {routes.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.path}>
            <Button
              fullWidth
              size="large"
              variant="outlined"
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </Button>
          </Grid>
        ))}
      </Grid>
    </MainCard>
  );
}
