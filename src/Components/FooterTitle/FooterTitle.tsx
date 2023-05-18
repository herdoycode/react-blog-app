import React from "react";
import "./FooterTitle.css";

interface Props {
  title: string;
}

const FooterTitle = ({ title }: Props) => {
  return <h2 className="footer__title">{title}</h2>;
};

export default FooterTitle;
