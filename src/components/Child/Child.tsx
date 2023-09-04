import { useContext } from "react";
import { UseTextContext } from "../textContext/textContext";

function Child() {
  const context = useContext(UseTextContext);
  if (!context) return null;
  const { data } = context;


  return (
    <div>
      <h1>Child</h1>
      {data.text}
    </div>
  );
}

export default Child;
