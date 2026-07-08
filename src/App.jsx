import { useState } from "react";
import padsData from "./padsData";
import Pad from "./Pad";

function App() {
  const [pads, setPads] = useState(padsData);
  function toggle(id) {
    setPads((prevPads) =>
      prevPads.map((pad) => {
        return pad.id === id ? { ...pad, on: !pad.on } : pad;
      }),
    );
  }
  const buttonElements = pads.map((pad) => (
    <Pad
      toggle={() => toggle(pad.id)}
      key={pad.id}
      color={pad.color}
      on={pad.on}
    />
  ));
  return (
    <main className="bg-gray-900 h-lvh">
      <div className="grid grid-cols-4 gap-2 max-w-xl mx-auto p-4">
        {buttonElements}
      </div>
    </main>
  );
}

export default App;
