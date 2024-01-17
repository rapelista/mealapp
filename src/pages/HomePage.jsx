import { useEffect, useState } from "react";
import { Banner } from "../components/Banner";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useGetMealByName } from "../hooks/useGetMealByName";
import { Link } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { BannerSecondary } from "../components/BannerSecondary";

export const HomePage = () => {
    const [isShow, setIsShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState("");

    const debouncedValue = useDebounce(value, 500);

    const {
        data,
        isFetched,
        isSuccess,
        refetch,
    } = useGetMealByName(debouncedValue);

    const handleChange = (e) => {
        setIsLoading(true);
        setValue(e.target.value);
    };

    const handleFocus = () => {
        setIsShow(true);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setIsShow(false);
        }, 500);
    };

    useEffect(() => {
        refetch();
    }, [debouncedValue]);

    useEffect(() => {
        if (isSuccess) {
            setIsLoading(false);
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isFetched) {
            setIsLoading(false);
        }
    }, [isFetched]);

    return (
        <>
            <Banner />
            <div className="w-full py-6 bg-orange-500">
                <div className="container flex flex-col mx-auto text-center">
                    <span className="mb-3 text-white">or, search your food here</span>
                    <Search
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                    />
                </div>
                {
                    (isShow && value) && (
                        <div className="absolute w-full mt-2 ">
                            <div className="container mx-auto">
                                <div className="w-full overflow-y-scroll bg-white divide-y-2 rounded-lg shadow-2xl md:w-1/2 max-h-40 md:mx-auto">
                                    {
                                        (isLoading) ? (
                                            <div className="py-4 text-center">
                                                <Spinner />
                                            </div>
                                        ) : (data && data.meals) && data.meals.map(({ idMeal, strMeal, strArea }) => (
                                            <Link
                                                key={idMeal}
                                                className="block px-4 py-2"
                                                to={`/meals/${strArea.toLowerCase()}/${idMeal}`}
                                            >
                                                {strMeal}
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            <BannerSecondary />
        </>
    );
};
