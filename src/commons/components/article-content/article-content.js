import React from "react";
import "./article-content.css";
import Tag from "../tag/tag";
import Footer from "../footer/footer";
import Header from "../header/header";
import Comments from "../comments/comments";
import { Link } from "react-router-dom";
function ArticleContent(props) {
  return (
    <div className="article">
      <Header author={props.author} />
      <Link to={`/article/${props.id}`}>
        <h1 className="article-title">{props.title}</h1>
      </Link>
      <p>{props.content}</p>
      {props.tags.map((value) => (
        <Tag value={value} key={value} />
      ))}
      <Footer
        publishedDate={props.publishedDate}
        commentsCount={props.commentsCount}
        rating={props.rating}
      />
      {props.shouldDisplayComments && (
        <Comments
          id={props.id}
          author={props.author}
          comments={props.comments}
        />
      )}
    </div>
  );
}

export default ArticleContent;
