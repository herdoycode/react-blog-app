import Category from "./Category";
import User from "./User";

export default interface Post {
  _id?: string;
  title?: string;
  category?: Category;
  content?: string;
  author?: User;
  categoryId?: string;
  authorId?: string;
  comment?: Comment[];
  thumbnail?: string;
  createdAt?: number;
}
