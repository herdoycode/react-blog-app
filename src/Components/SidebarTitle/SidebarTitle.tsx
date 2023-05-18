import React from "react";
import "./SidebarTitle.css";

interface Props {
  title: string;
}

const SidebarTitle = ({ title }: Props) => {
  return <h2 className="sidebar__title">{title}</h2>;
};

export default SidebarTitle;
