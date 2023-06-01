import { useEffect } from 'react';
import useMealCategory from '../hooks/useMealCategory';
import Header from '../components/Header';

export default function Meals() {
  const { mealCategory, fetchMealCategory } = useMealCategory();

  useEffect(() => {
    const fetchData = async () => {
      await fetchMealCategory();
    }

    fetchData();
  }, [fetchMealCategory])
  
  
  return (
    <div>
      <Header />
      {
        mealCategory !== null && (
          mealCategory.map((category) => (
            <p>{category.strCategory}</p>
          ))
        )
      }
    </div>
  )
}
