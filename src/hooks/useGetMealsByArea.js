import { useQuery } from "react-query";
import ApiService from "../utils/ApiService";

export const useGetMealsByArea = (mealArea) => {
    return useQuery({
        queryKey: ["filter.php?a=", { mealArea }],
        queryFn: async () => await ApiService.get("filter.php?a=" + mealArea),
    });
};
