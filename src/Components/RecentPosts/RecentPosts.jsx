import "./RecentPosts.css";
import SidebarTitle from "../SidebarTitle/SidebarTitle";

const RecentPosts = () => {
  return (
    <div>
      <SidebarTitle title={"Recent Posts"} />
      <div className="recent__posts">
        <img
          src="https://samartheme1.vercel.app/images/blog/recent-blog/pic1.jpg"
          alt=""
        />
        <div className="recent__post__content">
          <p>Fusce mollis felis quis tristique</p>
          <span>7 March, 2020 </span>
        </div>
      </div>
      <div className="recent__posts">
        <img
          src="https://samartheme1.vercel.app/images/blog/recent-blog/pic1.jpg"
          alt=""
        />
        <div className="recent__post__content">
          <p>Fusce mollis felis quis tristique</p>
          <span>7 March, 2020 </span>
        </div>
      </div>
      <div className="recent__posts">
        <img
          src="https://samartheme1.vercel.app/images/blog/recent-blog/pic1.jpg"
          alt=""
        />
        <div className="recent__post__content">
          <p>Fusce mollis felis quis tristique</p>
          <span>7 March, 2020 </span>
        </div>
      </div>
      <div className="recent__posts">
        <img
          src="https://samartheme1.vercel.app/images/blog/recent-blog/pic1.jpg"
          alt=""
        />
        <div className="recent__post__content">
          <p>Fusce mollis felis quis tristique</p>
          <span>7 March, 2020 </span>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
