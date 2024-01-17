import { useQuery } from "react-query";
import ApiService from "../../utils/ApiService";

export const useGetArea = () => {
    return useQuery({
        queryKey: ["list.php?a=list"],
        queryFn: async () => await ApiService.get("list.php?a=list"),
    });
};
