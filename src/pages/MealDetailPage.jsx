import { useParams } from "react-router-dom";
import { useGetMealById } from "../hooks/useGetMealById";
import { Spinner } from "../components/ui/Spinner";
import { MealDetail } from "../components/ui/MealDetail";

export const MealDetailPage = () => {
    const { idMeal } = useParams();
    const {
        data,
        isLoading,
    } = useGetMealById(idMeal);

    return (
        <div className="container mx-auto mt-8">
            {
                isLoading ? (
                    <div className="flex items-center justify-center w-full h-full">
                        <Spinner />
                    </div>
                ) : data && <MealDetail data={data.meals[0]} />
            }
        </div>
    );
};
