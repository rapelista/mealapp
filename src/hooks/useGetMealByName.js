import { useQuery } from "react-query";
import ApiService from "../utils/ApiService";

export const useGetMealByName = (name) => {
    return useQuery({
        queryKey: ["search.php?s=", { name }],
        queryFn: async () => await ApiService.get("search.php?s=" + name),
        enabled: false,
    });
};
