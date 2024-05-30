import React from "react";
import DummyImage from "../../assets/images/placeholder.png";

const ImgTag = ({
  className = "object-fit-cover w-100 h-100",
  src,
  placeholder = DummyImage,
  id,
}) => {
  return (
    <img
      onError={(e) => {
        e.target.src = placeholder;
      }}
      id={id}
      className={className}
      src={src || placeholder}
      alt="..."
    />
  );
};

export default ImgTag;
