import React, { createContext, useState } from 'react';
type Mode = "light" | "dark";

interface ThemeContextType {
   mode:Mode;
   setMode: React.Dispatch<React.SetStateAction<Mode>>
}
interface Props {
    children:React.ReactNode;
}


export const ThemeContext = createContext<ThemeContextType | null>(null)

export default function ThemeProvider(props:Props) {
    const [mode,setMode] = useState<Mode>("light")

    return (
        <ThemeContext.Provider value={{mode,setMode}}>
            {props.children}
        </ThemeContext.Provider>
    )


}