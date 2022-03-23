import React from "react";
import Carousel from "./comps/Carousel";
import Distentions from "./comps/Distentions";
import Footer from "./comps/Footer";
import { Hero } from "./comps/Hero";
import { Navbar } from "./comps/Navbar";
import { Search } from "./comps/Search";
import { Selects } from "./comps/Selects";

function App() {
  return (
    <div  >
      <Navbar/>
      <Hero/>
      <Distentions/>
      <Search/>
      <Selects/>
      <Carousel />
      <Footer/>
    </div>
  );
}

export default App;
