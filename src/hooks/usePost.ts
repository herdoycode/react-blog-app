import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import Post from "../entities/Post";

const usePost = (postId: string) =>
  useQuery<Post, Error>({
    queryKey: ["post", postId],
    queryFn: () =>
      apiClient.get<Post>(`/posts/${postId}`).then((res) => res.data),
  });

export default usePost;
