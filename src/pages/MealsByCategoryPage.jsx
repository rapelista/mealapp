import { useParams } from "react-router-dom";
import { useGetMealsByCategory } from "../hooks/useGetMealsByCategory";
import { Spinner } from "../components/ui/Spinner";
import { MealCard } from "../components/ui/MealCard";
import { Card } from "../components/ui/Card";

export const MealsByCategoryPage = () => {
    const { mealCategory } = useParams();
    const {
        data,
        isLoading,
    } = useGetMealsByCategory(mealCategory);

    return (
        <div className="container mx-auto mt-8">
            {
                isLoading ? (
                    <div className="flex items-center justify-center w-full h-full">
                        <Spinner />
                    </div>
                ) : data && (
                    <div className="grid grid-cols-2 gap-4 mt-8 md:grid-cols-3 lg:grid-cols-4">
                        {data.meals.map(({
                            idMeal,
                            strMeal,
                            strMealThumb,
                        }) => (
                            <Card
                                to={`${idMeal}`}
                                key={idMeal}
                                name={strMeal}
                                thumbnail={strMealThumb}
                            />
                        ))}
                    </div>
                )
            }
        </div >
    );
};
