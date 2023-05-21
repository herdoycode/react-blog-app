import { useMutation, useQueryClient } from "@tanstack/react-query";
import {toast} from 'react-toastify'
import apiClient from "../services/apiClient";
import Comment from "../entities/Comment";

const useAddComment = (reload:()=> void) => {
  const queryClient = useQueryClient();

  return useMutation<Comment, Error, Comment>({
    mutationFn: (data: Comment) =>
      apiClient.post<Comment>("/comments", data).then((res) => res.data),

    onSuccess: (savedComment, newComment) => {
      queryClient.setQueryData<Comment[]>(["comments"], (comments = []) => [
        savedComment,
        ...comments,
      ]);
      reload()
    },
    onError: (error, post, context) => {
      toast.error(error.message)
    }
  });
};


export default useAddComment