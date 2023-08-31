import React, { useState } from "react";

function Toggle(): JSX.Element {
  const [isOn, setIsOn] = useState<boolean>(false);

  function handleClick(): void {
    setIsOn((prevIsOn: boolean) => !prevIsOn);
  }

  const color: string = isOn ? "red" : "white";

  return (
    <button style={{ background: color }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;