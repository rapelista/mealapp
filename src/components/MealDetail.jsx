import { MealDetailThumb } from "./MealDetailThumb";
import { MealDetailTitle } from "./MealDetailTitle";
import { MealDetailInstructions } from "./MealDetailInstructions";
import { parseYoutubeEmbed } from "../../utils/Youtube";
import { MealDetailYoutube } from "./MealDetailYoutube";
import { MealDetailIngredients } from "./MealDetailIngredients";

export const MealDetail = ({
    data
}) => {
    const {
        strMeal,
        strMealThumb,
        strInstructions,
        strYoutube,
        ...meal
    } = data;

    return (
        <>
            <div className="container mx-auto">
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
            <div className="mt-4 bg-secondary">
                <div className="container grid grid-cols-1 mx-auto md:grid-cols-2 md:gap-8">
                    <MealDetailYoutube
                        url={strYoutube}
                    />
                    <MealDetailIngredients
                        // todo: add data ingredients to component
                        meal={meal}
                    />
                </div>
            </div>
        </>
    );
};
