import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}
interface Props {
  children: React.ReactNode;
}

export const UserContext = createContext<User | null>(null);

export default function UserContextProvider(props: Props) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const randomUser =
          response.data[Math.floor(Math.random() * response.data.length)];
        setUser(randomUser);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []); 

  return (
    <UserContext.Provider value={user}>
        {props.children}
    </UserContext.Provider>
    );
}
