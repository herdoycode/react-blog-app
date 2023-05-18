import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import Message from "./../entities/Message";

const useMessages = () =>
  useQuery<Message[], Error>({
    queryKey: ["messages"],
    queryFn: () =>
      apiClient.get<Message[]>("/messages").then((res) => res.data),
  });
export default useMessages;
