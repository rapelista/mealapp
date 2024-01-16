import { useGetMealCategory } from "../hooks/useGetMealCategory";
import { CategoryCard } from "./ui/CategoryCard";
import { Spinner } from "./ui/Spinner";

export const CategoryMeal = () => {
    const {
        data,
        isLoading,
    } = useGetMealCategory();
    return (
        <>
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
                                <CategoryCard
                                    key={idCategory}
                                    name={strCategory}
                                    thumbnail={strCategoryThumb}
                                />
                            ))
                        }
                    </div>
                )
            }
        </>
    );
};
