import { useQuery } from "react-query";
import ApiService from "../../utils/ApiService";

export const useGetMealsByCategory = (categoryName) => {
    return useQuery({
        queryKey: ["filter.php?c=", { categoryName }],
        queryFn: async () => await ApiService.get("filter.php?c=" + categoryName),
    });
};
