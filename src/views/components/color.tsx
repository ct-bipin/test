import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { palette } from "../../theme/palette";

const ColorPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Card >
        <CardHeader
          title="Color Component Showcase"
        />
        <Divider />

        <CardContent> 
          <Stack spacing={6}>
            {Object.entries(palette).map(([groupName, colors]) => {
              if (groupName === "text") return null;

              return (
                <Stack key={groupName} gap={2}>
                  <Typography
                    variant="h2"
                    color="grey.600"
                  >
                    {groupName}
                  </Typography>

                  <Stack direction="row" gap={2} flexWrap="wrap" justifyContent="center">
                    {Object.entries(colors).map(([label, value]) => (
                      <Stack
                        key={label}
                        spacing={1}
                        p={1}
                        sx={{
                          width: 199,
                        }}
                      >
                 
                        <Box
                          sx={{
                            height: 116,
                            borderRadius: 1,
                            backgroundColor: value,
                            // border: "1px solid #e0e0e0",
                          }}
                        />

                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            p={1}
                        >
                            <Typography variant="h4" color="grey.500">
                            {label}
                            </Typography>

                            <Typography variant="h4" color="grey.500">
                            {value}
                            </Typography>
                        </Stack>

                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              );
            })}
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ColorPage;
