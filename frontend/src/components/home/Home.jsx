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
      <Hero />
      <div className="mt-[-35px] lg:mt-[-175px] xl:mt-[-195px]">
        <Main />
      </div>
      <FindProperty />
      <SendMessage />
      <Footer />
    </div>
  );
}

export default Home;
