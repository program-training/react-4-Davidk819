import React, { createContext, useState } from 'react';

interface Data {
    text: string;
}
interface DataContextType {
    data: Data;
    setData:React.Dispatch<React.SetStateAction<Data>>;
}
interface Props {
    children:React.ReactNode;
}
export const UseTextContext = createContext<DataContextType | null>(null);

export default function DataContextProvider(props:Props) {
    const [data,setData] = useState<Data>({text:"hello world !"} )

    return (
        <UseTextContext.Provider value={{data,setData}}>
            {props.children}
        </UseTextContext.Provider>
    )
}