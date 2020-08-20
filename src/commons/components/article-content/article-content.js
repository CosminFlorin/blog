import React  from "react";
import "./article-content.css";
import Tag from "../tag/tag";
import Footer from "../footer/footer"
import Header from "../header/header"
import Comments from "../comments/comments"
import {Link} from "react-router-dom"
function ArticleContent(props) {

 
  
  return (
    <div className="article">
      <Header/>
      <Link to={`/article/${props.id}`}> 
      <h1 className="article-title">{props.title}</h1>
      </Link>
      <p>{props.content}</p>
      {props.tags.map((value) => (
        <Tag value={value} key={value} />
      ))}
      <Footer/>
      <Comments />
    </div>
    
  );
}

ArticleContent.defaultProps = {
  title: "Title",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia at ab eius ea quisquam iste pariatur. Laborum facilis, quo amet sint aut iusto odit, incidunt quae consequatur dolores quod officiis.",
  tags: ["a", "b", "c"],
};
export default ArticleContent;
