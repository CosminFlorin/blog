import React from "react";
import "./article.css";
import Tag from "../tag/tag";
function Article(props) {
  return (
    <div className="article">
      <h1 className="article-title">{props.title}</h1>
      <p>{props.content}</p>
      {props.tags.map((value) => (
        <Tag value={value} key={value} />
      ))}
    </div>
  );
}

Article.defaultProps = {
  title: "Hello World",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia at ab eius ea quisquam iste pariatur. Laborum facilis, quo amet sint aut iusto odit, incidunt quae consequatur dolores quod officiis.",
  tags: ["a", "b", "c"],
};
export default Article;
