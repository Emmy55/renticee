import React from "react";
import Header from "../Header";
import Hero from "./Hero";
import Footer from "../Footer";
import Main from "./main/Main";
import FindProperty from "./FindProperty";
import SendMessage from "./SendMessage";

function Home() {
  return (
    <div>
      <Header />
      <div className="relative">
        <Hero />
        <div className="mt-[-195px]">
          <Main />
        </div>
      </div>
      <FindProperty />
      <SendMessage />
      <Footer />
    </div>
  );
}

export default Home;
