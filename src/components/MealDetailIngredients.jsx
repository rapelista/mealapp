export const MealDetailIngredients = ({ meal }) => {
    return (
        <div
            className="py-6"
        >
            <h1
                className="pb-2 mb-2 text-lg border-b-2 border-orange-500 w-fit"
            >
                Ingredients
            </h1>
            <div>
                {
                    Array(20).fill().map((_, i) => {
                        const ingredient = meal[`strIngredient${i + 1}`];
                        const measure = meal[`strMeasure${i + 1}`];

                        if (ingredient == "" || measure == " ") {
                            return undefined;
                        }

                        return (
                            (
                                <div
                                    key={i}
                                    className="flex justify-between gap-4"
                                >
                                    <div>
                                        {ingredient}
                                    </div>
                                    <div>
                                        {measure}
                                    </div>
                                </div>
                            )
                        );
                    })
                }
            </div>
        </div>
    );
};
