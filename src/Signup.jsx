import React from "react";
import Navbar from "./Components/Nav";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import Box from "./Components/Box";
import Title from "./Components/Title";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const navigate = useNavigate();
  return (
    <Box>
      <Navbar />
      <Title
        title="Welcome!"
        subtitle="Use these awesome forms to login or create new account in your project
          for free"
      />
      <Form bt="Sign Up" alrdy="Already have an account?" sgn="Sign In"  reg="Register with" name="Name"/>
      <Footer />
    </Box>
  );
}

export default SignUp;
