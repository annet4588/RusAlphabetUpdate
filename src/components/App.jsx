import React from "react";
import Letters from "./Letters";
import Navbar from "./Navbar";
import letters from "../letters";

function App() {
  return (
    <div className="App">
      <h1>Russian Alphabet</h1>
      <Navbar />
      {letters.map((letter) => (
        <Letters key={letter.key} name={letter.name} />
      ))}
      ;
    </div>
  );
}
export default App;
