import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { useContext, useState } from "react";
import '../Title/Title.css'
import { ThemeContext } from "../ThemeContext/ThemeContext";
interface Props {
    text:string
}
export default function Title(props:Props) {
    const context = useContext(ThemeContext)
    if(!context) return null
    const {mode} = context


  return (
    
      <div className={mode}>
        <h1>{props.text}</h1>
        <ThemeSwitcher/>
      </div>
    
  );
}
