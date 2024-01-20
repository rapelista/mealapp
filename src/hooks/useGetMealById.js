import { useQuery } from "react-query";
import ApiService from "../utils/ApiService";

export const useGetMealById = (idMeal) => {
    return useQuery({
        queryKey: ["lookup.php?i=", { idMeal }],
        queryFn: async () => await ApiService.get("lookup.php?i=" + idMeal),
    });
};
