import { useMutation, useQueryClient } from "@tanstack/react-query";
import Post from "../entities/Post";
import apiClient from "../services/apiClient";

const useEditPost = (postId: string, redirect: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Post, Error, Post>({
    mutationFn: (data: Post) =>
      apiClient.put<Post>(`/posts/${postId}`, data).then((res) => res.data),

    onSuccess: (savedPost, newPost) => {
      queryClient.setQueryData<Post[]>(["posts"], (posts = []) => [
        savedPost,
        ...posts,
      ]);
      redirect();
    },
  });
};

export default useEditPost;
