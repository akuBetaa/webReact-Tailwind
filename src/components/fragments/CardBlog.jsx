import React from "react";
import { Link } from "react-router-dom";
import Button from "../elements/Button";

const CardBlog = (props) => {
  const { children } = props;

  return (
    <div className="max-w-max rounded-lg shadow-xl border-inhiret border-gray-500 flex-col">
      <Link to="/" className="">
        {children}
      </Link>
    </div>
  );
};

const Header = ( {image} ) => {
  return (
    <div>
      <img src={ image } alt="article" className="rounded-t-lg" />
    </div>
  )
};

const Body = ( props ) => {
  const { title, children } = props;
  return (
    <div className="px-4 pt-4 border-4 border-white border-t-indigo-500">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-textgrey flex-grow">
        { children }
      </p>
    </div>
  )
};

const Footer = () => {
  return (
    <div className="flex justify-end px-4 py-3 ">
      <Button
        style="text-xs hover:text-white font-semibold"
        variant="bg-secondary text-primary hover:bg-primary"
      >
        Selengkapnya
      </Button>
    </div>
  )
};

// NASTED RENDERING 
CardBlog.Header = Header;
CardBlog.Body = Body;
CardBlog.Footer = Footer;

export default CardBlog;
