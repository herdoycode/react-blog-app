import User from "./User";
export default interface Comment {
  _id: string;
  postId: string;
  user: User;
  text: string;
}
