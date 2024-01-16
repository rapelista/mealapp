import { Link } from "react-router-dom";
import { Spinner } from "./Spinner";

export const BannerRecommendation = ({
    data,
    isLoading,
}) => {
    return (
        <Link className="flex flex-col gap-2 md:flex-row group max-h-96" to={`${data ? "/meals/" + data.meals[0].strCategory.toLowerCase() + "/" + data.meals[0].idMeal : "#"}`}>
            <div className="w-full overflow-hidden bg-gray-200 rounded-2xl xl:w-96 aspect-square">
                {
                    isLoading && (
                        <div className="flex items-center justify-center w-full h-full">
                            <Spinner />
                        </div>
                    )
                }
                {
                    data && (
                        <img src={data.meals[0].strMealThumb}
                            className="w-full transition-all duration-200 scale-125 group-hover:scale-150 group-hover:rotate-12"
                            title={data.meals[0].strMeal}
                        />
                    )
                }
            </div>
            <div className="text-medium lg:text-xl font-medium text-center text-gray-500 transition-colors duration-200 group-hover:text-orange-500 md:[writing-mode:vertical-rl] overflow-visible">
                {
                    data && data.meals[0].strMeal
                }
                {
                    isLoading && <div className="h-12 text-opacity-0">.</div>
                }
            </div>
        </Link>
    );
};
