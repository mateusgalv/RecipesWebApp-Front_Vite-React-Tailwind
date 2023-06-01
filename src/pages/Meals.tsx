import { useEffect } from 'react';
import useMealCategory from '../hooks/useMealCategory';
import Header from '../components/Header';
import '../index.css';

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
      <div className='absolute inset-0 top-14 z-0 transparent-background z-1'></div>
      <div className='z-1'>
        {
          mealCategory !== null && (
            mealCategory.map((category) => (
              <p>{category.strCategory}</p>
            ))
          )
        }
      </div>
    </div>
  )
}
