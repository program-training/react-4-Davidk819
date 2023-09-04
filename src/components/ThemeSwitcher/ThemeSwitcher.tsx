import React, { useContext,useState } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';

export default function ThemeSwitcher() {
    const context = useContext(ThemeContext)
    const [buttonText,setText] = useState<string>("dark")
    if(!context) return null;
    const { mode, setMode } = context;

    const change = () => {
        setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
        setText(prevMode => (prevMode === "light" ? "dark" : "light"));
    }


    return (
        <div>
            <button onClick={change}>{buttonText}</button>
        </div>
    );
   
}