import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import User from "../entities/User";

const useAuth = (userId: string) =>
  useQuery<User, Error>({
    queryKey: ["user"],
    queryFn: () =>
      apiClient.get<User>(`/users/${userId}`).then((res) => res.data),
  });

export default useAuth;
