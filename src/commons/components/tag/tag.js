import React from "react";
import "./tag.css";
function Tag(props) {
  const handleOnClick = () => {
    props.onClick(props.value);
  };
  return (
    <span className="tag" onClick={handleOnClick}>
      {props.value}
    </span>
  );
}
Tag.defaultProps = {
  onClick: (value) => console.log(value),
};
export default Tag;
