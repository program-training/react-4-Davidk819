import React, { useContext } from 'react';
import { UserContext } from '../UserContext/UserContext'
import Title from '../Title/Title';
import '../Header/Header.css'


export default function Header() {
  const context = useContext(UserContext);
  if(!context) return null;

    

  return (
    <div className='header'>
        <Title text={context.name}/>
    </div>
  );
}
