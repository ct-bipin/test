import './App.css'
import OrderList from './pages/OrderList'
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/index"; 

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <OrderList />
    </ThemeProvider>
    </>
  )
}

export default A