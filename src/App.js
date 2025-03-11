import React from "react";
import Conveyer from "./Components/Conveyer/Conveyer";
import Section from "./Components/Main-Section/Section";
import Navbar from "./Components/Navbar/Navbar";
import Prototype from "./Components/Prototype/Prototype";
import Screen from "./Components/Screen/Screen";
import Service from "./Components/Service/Service";
import Video from "./Components/Video/Video";
import Vps from "./Components/Vps/Vps";

function App() {
  return (
    <div>
      <Navbar/>
      <Section/>
      <Screen/>
      <Prototype/>
      <Service/>
      <Vps/>
      <Conveyer/>
      <Video/>
    </div>
  );
}

export default App;

