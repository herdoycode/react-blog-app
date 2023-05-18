import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import Category from "../entities/Category";

const useCategorys = () =>
  useQuery<Category[], Error>({
    queryKey: ["categorys"],
    queryFn: () =>
      apiClient.get<Category[]>("/categorys").then((res) => res.data),
  });
export default useCategorys;
