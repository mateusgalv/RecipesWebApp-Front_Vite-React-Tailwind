import { useEffect } from 'react';
import useDrinkCategory from '../hooks/useDrinkCategory';
import Header from '../components/Header';

export default function Meals() {
  const { drinkCategory, fetchDrinkCategory } = useDrinkCategory();

  useEffect(() => {
    const fetchData = async () => {
      await fetchDrinkCategory();
    }

    fetchData();
  }, [fetchDrinkCategory])
  
  
  return (
    <div>
      <Header />
      {
        drinkCategory !== null && (
          drinkCategory.map((category) => (
            <p>{category.strCategory}</p>
          ))
        )
      }
    </div>
  )
}
