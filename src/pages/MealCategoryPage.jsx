import { Card } from "../components/ui/Card";
import { CategoryCard } from "../components/ui/CategoryCard";
import { Spinner } from "../components/ui/Spinner";
import { useGetMealCategory } from "../hooks/useGetMealCategory";

export const MealCategoryPage = () => {
    const {
        data,
        isLoading,
    } = useGetMealCategory();

    return (
        <div className="container mx-auto">
            {
                isLoading && (
                    <div className="mt-8 text-center">
                        <Spinner />
                    </div>
                )
            }

            {
                data && (
                    <div
                        className="grid grid-cols-2 gap-4 mt-8 md:grid-cols-3 lg:grid-cols-4"
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
