import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Container } from "@mui/material";

function App() {
  return (
    <Container>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="" element = {<SignIn/>}/>
        <Route path="/signup" element = {<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
