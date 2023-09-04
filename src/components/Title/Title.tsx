import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { useContext, useState } from "react";
import '../Title/Title.css'
import { ThemeContext } from "../ThemeContext/ThemeContext";

export default function Title() {
    const context = useContext(ThemeContext)
    if(!context) return null
    const {mode} = context

    const [myClass, setClass] = useState("title-container")
    const changeClass = () => {
        setClass(mode === "dark"?"null":"title-container")
    }
  return (
    
      <div className={mode}>
        <ThemeSwitcher/>
        <h1>hello world</h1>
        <p>kill me</p>
      </div>
    
  );
}
