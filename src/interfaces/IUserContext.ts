import React from "react";

export default interface IUserContext {
  user: string,
  favRecipes: string[],
  setUser: React.Dispatch<React.SetStateAction<string>>,
  setFavRecipes: React.Dispatch<React.SetStateAction<string[]>>,
}