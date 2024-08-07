import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Signup";
import SignIn from "./SignIn";
import Table from "./Table";
import Profile from "./Profile";
function App() {
  return (
    <><BrowserRouter>
    <Routes>

      <Route index element={<SignUp/>}/>
      <Route path="SignUp" element={<SignUp/>}/>
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/Table" element={<Table />} />
      <Route path="/Profile" element={<Profile />} />

    </Routes>
    </BrowserRouter>
    </>    
  );
}

export default App;
