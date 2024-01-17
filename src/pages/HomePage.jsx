import { useEffect, useState } from "react";
import { Images } from "../../utils/Images";
import { Banner } from "../components/Banner";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useGetMealByName } from "../hooks/useGetMealByName";
import { Link } from "react-router-dom";
import { Spinner } from "../components/Spinner";

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
                        <div className="absolute w-full mt-2">
                            <div className="w-1/2 mx-auto overflow-y-scroll bg-white divide-y-2 rounded-lg shadow-2xl max-h-40">
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
                    )
                }
            </div>

            <div className="w-full">
                <div className="container flex flex-col items-center justify-center gap-8 py-12 mx-auto md:py-16 md:gap-0 md:flex-row">
                    <img
                        src={Images.CookingFood}
                        className="w-9/12 bg-red-800 md:w-2/6 rounded-3xl"
                    />
                    <div className="text-2xl font-semibold leading-snug text-center text-gray-800 bg-white rounded-lg md:border-l-4 md:border-b-4 md:py-8 md:px-6 border-orange-500/50 md:w-6/12 lg:text-5xl lg:leading-tight h-fit md:-ms-8 md:text-left">
                        So, what are you going to eat <span className="text-orange-500">today?</span>
                    </div>
                </div>
            </div>
        </>
    );
};
