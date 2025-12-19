import './App.css'
// import OrderList from './views/orders/List'
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/index"; 
import AppRoutes from './routes/main';

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <OrderList /> */}
      <AppRoutes />
    </ThemeProvider>
    </>
  )
}

export default App