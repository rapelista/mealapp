import { useEffect } from "react";
import { useGetRandomMeal } from "../hooks/useGetRandomMeal";
import { BannerGreeting } from "./BannerGreeting";
import { BannerRecommendation } from "./BannerRecommendation";

export const Banner = () => {
    const {
        data,
        isLoading,
    } = useGetRandomMeal();

    return (
        <div className="container mx-auto">
            <div className="flex flex-col justify-between gap-8 py-4 lg:py-16 md:flex-row md:gap-16">
                <BannerGreeting />
                <div>
                    <h5
                        className="mb-2 font-medium text-orange-500"
                    >
                        Recommendation for you
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