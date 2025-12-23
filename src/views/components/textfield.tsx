import { Card, CardContent, CardHeader, Container, TextField } from "@mui/material";

const TextfieldpPage = () =>{
    return(
        <>
            <Container maxWidth="lg" sx={{ py: 5 }}>
                <Card>
                    <CardHeader title="Textfield Component Showcase" />
                    <CardContent>
                        <TextField label="Outlined" variant="outlined" />
                    </CardContent>   
                </Card>
            </Container>
        </>
    )
}

export default TextfieldpPage;