// @mui
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// @project
import { MainCard } from "@/components";
import { colorData } from "@/utils/color-data";

// ---------------------------------  COLOR - PAGE  ---------------------------------

export default function ColorPage() {
  const theme = useTheme();

  return (
    <MainCard title="Color Component Showcase">
      <Stack spacing={6}>
        {colorData.map((group) => (
          <Stack key={group.name} gap={2}>
            <Typography variant="h2" color="grey.600">
              {group.name}
            </Typography>

            <Stack
              direction="row"
              gap={2}
              flexWrap="wrap"
              justifyContent="center"
              bgcolor={theme.palette.grey[100]}
              border={`2px solid ${theme.palette.grey[200]}`}
              p={2}
              borderRadius={5}
            >
              {group.colors.map((color) => (
                <Stack
                  key={color.label}
                  spacing={1}
                  p={1}
                  sx={{ width: 199, }}
                >
                  <Card
                    sx={{
                      height: 116,
                      borderRadius: 1,
                      backgroundColor: color.value,
                    }}
                  />

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    p={1}
                  >
                    <Typography variant="h4" color={theme.palette.grey[500]}>
                      {color.label}
                    </Typography>

                    <Typography variant="h4" color={theme.palette.grey[500]}>
                      {color.value}
                    </Typography>
                  </Stack>
                </Stack>
              ))}

            </Stack>
          </Stack>
        ))}
      </Stack>
    </MainCard>
  );
};

