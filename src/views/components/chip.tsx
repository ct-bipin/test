import { Card, CardContent, CardHeader, Chip, Container, Divider, Stack, Typography } from "@mui/material";

const ChipPage = () =>{
    return(
        <>
            <Container maxWidth="lg" sx={{ py: 5 }}>
                <Card>
                    <CardHeader title="Chip Component Showcase" />
                    <Divider />
                    <CardContent>
                         <Stack spacing={2} py={4}>
                            <Typography variant="h6"> color </Typography>

                            <Stack direction="row" spacing={2} flexWrap="wrap">
                            <Chip label="primary" color="primary" />
                            <Chip label="warning" color="warning" />
                            <Chip label="info" color="info" />
                            <Chip label="success" color="success" />
                            <Chip label="error" color="error" />
                            </Stack>
                        </Stack>


                         <Stack spacing={2}>
                            <Typography variant="h6"> size </Typography>

                            <Stack direction="row" spacing={2} flexWrap="wrap">
                            <Chip label="small" size="small"  color="primary"/>
                            <Chip label="medium" size="medium" color="primary" />
                            </Stack>
                        </Stack>

                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default ChipPage;