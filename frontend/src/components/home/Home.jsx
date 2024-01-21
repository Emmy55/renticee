import React, { useEffect } from "react";
import Hero from "./Hero";
import Main from "./main/Main";
import FindProperty from "./FindProperty";
import SendMessage from "./SendMessage";

function Home() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <div className="mt-[-35px] lg:mt-[-175px] xl:mt-[-195px]">
        <Main />
      </div>
      <FindProperty />
      <SendMessage />
    </div>
  );
}

export default Home;
