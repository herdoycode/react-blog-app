import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import Comment from "../entities/Comment";

const useComments = (postId: string) =>
  useQuery<Comment[], Error>({
    queryKey: ["comments", postId],
    queryFn: () =>
      apiClient.get<Comment[]>(`comments/${postId}`).then((res) => res.data),
  });

export default useComments;
