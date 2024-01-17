import { Card } from "../components/Card";
import { Spinner } from "../components/Spinner";
import { useGetMealCategory } from "../hooks/useGetMealCategory";

export const MealCategoryPage = () => {
    const {
        data,
        isLoading,
    } = useGetMealCategory();

    return (
        <div className="container mx-auto mt-2 md:mt-12">
            {
                isLoading && (
                    <div className="text-center">
                        <Spinner />
                    </div>
                )
            }

            {
                data && (
                    <div
                        className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
                    >
                        {
                            data.categories.map(({
                                idCategory,
                                strCategory,
                                strCategoryThumb,
                            }) => (
                                <Card
                                    key={idCategory}
                                    to={`${strCategory.toLowerCase()}`}
                                    thumbnail={strCategoryThumb}
                                    name={strCategory}
                                />
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};
