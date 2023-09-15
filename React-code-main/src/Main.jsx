import React, { useState } from "react";

function Main({info, setInfo}) {
  return (
    <footer>

      <h2 onClick={setInfo}>{info}</h2>
    </footer>
  );
}
  
  export default Main;
  