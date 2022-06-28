import React from "react";
import Externals from "./Externals";
import Hero from "./Hero";
import Navigation from "./Navigation";

function body() {
  return (
    <div class="row">
      <Navigation />
      <Externals />
      <Hero />
    </div>
  );
}

export default body;
