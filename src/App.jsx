import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Signup";
import SignIn from "./SignIn";
import Table from "./Table";
function App() {
  return (
    <><BrowserRouter>
    <Routes>

      <Route index element={<SignUp/>}/>
      <Route path="SignUp" element={<SignUp/>}/>
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/Table" element={<Table />} />
    </Routes>
    </BrowserRouter>
    </>    
  );
}

export default App;
