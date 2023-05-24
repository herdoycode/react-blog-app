import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import Post from "./../entities/Post";
import usePostQueryStore from "../store";

const usePosts = () => {
  const postQuery = usePostQueryStore((s) => s.postQuery);
  return useQuery<Post[], Error>({
    queryKey: ["posts", postQuery],
    queryFn: () =>
      apiClient
        .get<Post[]>("/posts", {
          params: {
            categoryId: postQuery.categoryId,
            searchText: postQuery.searchText,
          },
        })
        .then((res) => res.data),
  });
};
export default usePosts;
