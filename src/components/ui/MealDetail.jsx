export const MealDetail = ({
    data
}) => {
    const {
        strMeal,
        strMealThumb,
        strInstructions,
        strYoutube,
    } = data;

    return (
        <div>
            <img
                src={strMealThumb}
                className="w-1/2 mx-auto mb-8 md:w-1/3 rounded-xl"
            />
            <div
                className="px-2 pb-2 mx-auto mb-8 text-xl font-medium text-center text-orange-500 border-b-2 border-orange-500 md:text-2xl w-fit"
            >
                {strMeal}
            </div>
            <div className="text-justify">
                {strInstructions}
            </div>
        </div>
    );
};
