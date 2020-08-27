import React from "react";
import "./footer.css";
import { MessageCircle, Star } from "react-feather";

function Footer(props) {
  return (
    <div className="blog-footer">
      <div className="published-date">{props.publishedDate}</div>
      <div className="comments2">
        <div className="comments">
          <MessageCircle />
          <span className="numero">{props.commentsCount}</span>
        </div>
        <div className="comments">
          <Star />
          <span className="numero">{props.rating}</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
