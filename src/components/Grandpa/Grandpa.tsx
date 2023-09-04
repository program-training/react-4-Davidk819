import Father from "../Father/Father";
import { UseTextContext } from "../textContext/textContext";
import { useContext } from 'react';

function Grandpa() {
    const context = useContext(UseTextContext);
    if (!context) return null;
      const {data} = context
    //   setData({text:"david"})
    return (
      <div>
        <h1>Grandpa </h1>
        <div> {data.text}  </div> 
        <Father />
      </div>
    );
  };
  
  export default Grandpa;