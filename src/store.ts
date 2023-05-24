import { create } from "zustand";

interface PostQuery {
  categoryId?: string;
  searchText?: string;
}

interface GameQueryStore {
  postQuery: PostQuery;
  setSearchText: (searchText: string) => void;
  setCategoryId: (categoryId: string) => void;
}

const usePostQueryStore = create<GameQueryStore>((set) => ({
  postQuery: {},
  setSearchText: (searchText) => set(() => ({ postQuery: { searchText } })),
  setCategoryId: (categoryId) =>
    set((store) => ({
      postQuery: {
        ...store.postQuery,
        categoryId: categoryId,
        searchText: undefined,
      },
    })),
}));

export default usePostQueryStore;
