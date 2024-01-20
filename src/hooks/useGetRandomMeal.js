import { useQuery } from "react-query";
import ApiService from "../utils/ApiService";

export const useGetRandomMeal = () => {
    return useQuery({
        queryKey: ["random.php"],
        queryFn: async () => await ApiService.get("random.php")
    });
};
