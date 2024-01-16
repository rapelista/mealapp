import { useEffect } from "react";
import { useGetRandomMeal } from "../hooks/useGetRandomMeal";
import { BannerGreeting } from "./ui/BannerGreeting";
import { BannerRecommendation } from "./ui/BannerRecommendation";

export const Banner = () => {
    const {
        data,
        isLoading,
    } = useGetRandomMeal();

    useEffect(() => {
        if (data) console.log(data.meals);
    }, [data]);

    return (
        <div className="container mx-auto">
            <div className="flex flex-col justify-between gap-8 py-8 lg:py-16 md:flex-row md:gap-16">
                <BannerGreeting />
                <div>
                    <h5
                        className="mb-2 font-medium text-orange-500"
                    >
                        Recommended for you
                    </h5>
                    <BannerRecommendation
                        data={data}
                        isLoading={isLoading}
                    />
                </div>
            </div>
        </div>
    );
};