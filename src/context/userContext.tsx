import { ReactNode, createContext, useState } from "react";
import IUserContext from "../interfaces/IUserContext";

export const UserContext = createContext<IUserContext>({
  user: '',
  favRecipes: [],
  setUser: () => {},
  setFavRecipes: () => {},
});

export const UserContextProvider = (
  { children }: { children: ReactNode }
) => {
  const [user, setUser] = useState('');
  const [favRecipes, setFavRecipes] = useState<string[]>([]);

  return (
    <UserContext.Provider
      value={{ user, favRecipes, setUser, setFavRecipes }}
    >
      { children }
    </UserContext.Provider>
  )
}