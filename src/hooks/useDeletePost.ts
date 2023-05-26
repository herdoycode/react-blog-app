import { useMutation, useQueryClient } from "@tanstack/react-query";
import Post from "../entities/Post";
import apiClient from "../services/apiClient";
import { toast } from "react-toastify";

interface DeletePostContext {
  previousPosts: Post[];
}

const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation<Post, Error, Post, DeletePostContext>({
    mutationFn: (post) =>
      apiClient.delete(`/posts/${post._id}`).then((res) => res.data),
    onMutate: async (deletedPost) => {
      await queryClient.cancelQueries({ queryKey: ["posts"] });
      const previousPosts = queryClient.getQueryData<Post[]>(["posts"]) || [];
      queryClient.setQueryData<Post[]>(["posts"], (old = []) =>
        old.filter((o) => o._id != deletedPost._id)
      );
      return { previousPosts };
    },
    onSuccess: () => {
      toast.success("Post successfully deleted");
    },
    onError: (err, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData(["posts"], context.previousPosts);
      toast.error(err.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};

export default useDeletePost;
