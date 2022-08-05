import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home";
import { Signin } from "./pages/SignIn";
import { Container } from "@mui/material";

function App() {
  return (
    <Container>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path ="" element = {<Signin/>}/>
    
      </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
