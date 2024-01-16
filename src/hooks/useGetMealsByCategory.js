import { useQuery } from "react-query";

export const useGetMealByCategory = (categoryName) => {
    return useQuery({
        queryKey: ["filter.php?c=", { categoryName }],
        queryFn: async () => await ApiService.get("filter.php?c=" + categoryName),
    });
};
