import { useParams } from "react-router-dom";
import { useGetMealById } from "../hooks/useGetMealById";
import { Spinner } from "../components/Spinner";
import { MealDetail } from "../components/MealDetail";

export const MealDetailPage = () => {
    const { idMeal } = useParams();
    const {
        data,
        isLoading,
    } = useGetMealById(idMeal);

    return (
        <div className="mt-8">
            {
                isLoading ? (
                    <div className="text-center">
                        <Spinner />
                    </div>
                ) : data && <MealDetail data={data.meals[0]} />
            }
        </div>
    );
};
