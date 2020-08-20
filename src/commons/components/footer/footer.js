import React from "react";
import "./footer.css";
import { MessageCircle, Star } from "react-feather";

function Footer() {
  return (
    <div className="blog-footer">
      <div className="published-date">2 days ago</div>
      <div className="comments2">
        <div className="comments">
          <MessageCircle />
          <span className="numero">4</span>
        </div>
        <div className="comments">
          <Star />
          <span className="numero">1</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
