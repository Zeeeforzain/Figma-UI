import React from "react";
import Navbar from "./Components/Nav";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import BoxComponent from "./Components/Box";
import Title from "./Components/Title";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const navigate = useNavigate();
  return (
    <>
    <BoxComponent>
        <Navbar />
        <Title title="Welcome Back!" subtitle="Enter your user name, email and password to sign in" />
        <Form bt="Sign In" alrdy="Didn't have an account?" sgn="Sign Up" reg="Log In with" name="User Name"/>
        <Footer />
        </BoxComponent>
    </>
  );
}
export default SignIn;
