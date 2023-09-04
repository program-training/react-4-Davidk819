import { UseTextContext } from "../textContext/textContext";
import { useContext,useState } from 'react';
import Child from '../Child/Child';

function Father() {
    const context = useContext(UseTextContext);
    const [inputText, setInputText] = useState('');
    if (!context) return null;
      const {data,setData} = context
    
    const updateText = () => {
        setData({text:inputText})
    }  
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }
      
  return (
    <div >
      <h1>father</h1> 
      <input type="text" value={inputText} onChange={handleInput}></input>
      <div> {data.text} </div> 
      <Child/>
      <button onClick={updateText}>Update Text</button>
    </div>
  );
};
export default Father;