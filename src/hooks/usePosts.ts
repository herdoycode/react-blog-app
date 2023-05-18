import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import Post from "./../entities/Post";

const usePosts = () =>
  useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: () => apiClient.get<Post[]>("/posts").then((res) => res.data),
  });
export default usePosts;
