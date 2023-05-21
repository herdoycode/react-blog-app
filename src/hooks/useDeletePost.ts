import { useMutation, useQueryClient } from "@tanstack/react-query";
import {toast} from 'react-toastify'
import Post from "../entities/Post";
import apiClient from "../services/apiClient";

interface AddTodoContext {
  previousPost: Post[];
}

const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation<Post, Error, Post, AddTodoContext>({
    mutationFn: (data: Post) =>
      apiClient.delete<Post>(`/posts/${data._id}`).then((res) => res.data),

    onMutate: (newTodo: Post) => {
      const previousPost = queryClient.getQueryData<Post[]>(["posts"]) || [];

      queryClient.setQueryData<Post[]>(["posts"], (posts = []) =>
        posts.filter((p) => p._id !== newTodo._id)
      );

      return { previousPost };
    },

    onSuccess: (savedPost, newPost) => {
      queryClient.setQueryData<Post[]>(["posts"], (todos) =>
        todos?.map((post) => (post === newPost ? savedPost : post))
      );
    },

    onError: (error, newTodo, context) => {
      if (!context) return;
      toast.error(error.message)
      queryClient.setQueryData<Post[]>(["posts"], context.previousPost);
    },
  });
};

export default useDeletePost;
