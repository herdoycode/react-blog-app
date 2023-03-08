import { useDispatch, useSelector } from "react-redux";
import SidebarTitle from "../SidebarTitle/SidebarTitle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./Category.css";
import { filterFpost } from "../../store/posts";

const Category = () => {
  const dispatch = useDispatch();
  const categorys = useSelector((state) => state.entities.categorys.list);

  return (
    <div className="category">
      <SidebarTitle title={"Category"} />
      <div className="categorys">
        {categorys.map((c) => (
          <div
            onClick={() => dispatch(filterFpost(c.name))}
            key={c._id}
            className="category__item"
            style={{ cursor: "pointer" }}
          >
            <span>{c.name}</span>
            <span className="category__count">
              <CheckCircleIcon color="inherit" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
