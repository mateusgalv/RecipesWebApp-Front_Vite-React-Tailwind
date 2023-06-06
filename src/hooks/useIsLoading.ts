import { useState } from "react";

export default function useIsLoading() {
  const [isLoading, setIsLoading] = useState(true);

  const setLoading = () => {
    isLoading ? setIsLoading(false) : setIsLoading(true);
  };

  return {
    isLoading,
    setLoading,
  };
}