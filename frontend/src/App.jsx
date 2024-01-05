import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/home/Hero";
import Home from "./components/home/Home";
import Main from "./components/home/main/Main";
import FindProperty from "./components/home/FindProperty";
import SendMessage from "./components/home/SendMessage";
import LogIn from "./components/login/LogIn";
import SignUp from "./components/signup/SignUp";
import VerifyCode from "./components/verifyCode/VerifyCode";
import ChooseCategory from "./components/chooseCategory/ChooseCategory";

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <Footer /> */}
      {/* <Hero /> */}
      {/* <Home /> */}
      {/* <Main /> */}
      {/* <FindProperty /> */}
      {/* <SendMessage /> */}
      {/* <LogIn /> */}
      {/* <SignUp /> */}
      {/* <VerifyCode /> */}
      <ChooseCategory />
    </>
  );
}

export default App;
