import { MealDetailThumb } from "./MealDetailThumb";
import { MealDetailTitle } from "./MealDetailTitle";
import { MealDetailInstructions } from "./MealDetailInstructions";

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
            <MealDetailThumb
                thumbnail={strMealThumb}
            />
            <MealDetailTitle>
                {strMeal}
            </MealDetailTitle>
            <MealDetailInstructions>
                {strInstructions}
            </MealDetailInstructions>
        </div>
    );
};
