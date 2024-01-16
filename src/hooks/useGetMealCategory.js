import { useQuery } from "react-query";
import ApiService from "../../utils/ApiService";

export const useGetMealCategory = () => {
    return useQuery({
        queryKey: ["categories.php"],
        queryFn: async () => await ApiService.get("categories.php"),
    });
};
