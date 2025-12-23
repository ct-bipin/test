import { Card, CardContent, CardHeader, Checkbox, Container, Divider } from "@mui/material";

const CheckboxPage = () =>{
    return(
        <>
            <Container maxWidth="lg" sx={{ py: 5 }}>
                <Card>
                    <CardHeader title="Checkbox Component Showcase" />
                    <Divider />
                    <CardContent>
                        <Checkbox />
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default CheckboxPage;