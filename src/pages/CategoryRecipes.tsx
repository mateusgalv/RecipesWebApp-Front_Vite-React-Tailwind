import { useParams } from "react-router-dom"
import Header from "../components/Header";

export default function CategoryRecipes() {
  const { category } = useParams();
  console.log(category);

  return (
    <div>
      <Header />
      {category}
    </div>
  )
}
