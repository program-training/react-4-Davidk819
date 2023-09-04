import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

type User = string;

export const UserContext = createContext<User | null>(null);

export default function UserContextProvider {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // בטעינת הרנדומליות מה-URL
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // בחירת משתמש רנדומלי מהמערך שקיבלנו
        const randomUser = response.data[Math.floor(Math.random() * response.data.length)];
        setUser(randomUser);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []); // הפעל את ה-Effect פעם אחת כאשר הרכיב מתרנדר לראשונה

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};
