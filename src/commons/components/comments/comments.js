import React from "react";
import "./comments.css";

class Comments extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    const author = event.target.name.value;

    fetch("http://localhost:8080/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author,
        comment,
        articleId: this.props.id,
      }),
    });

    event.target.comment.value = "";
    event.target.name.value = "";
  };

  render() {
    return (
      <>
        <div className="comment-section">
          <h4>Comments:</h4>
          <ul>
            {this.props.comments.map((commentItem) => {
              return (
                <li key={commentItem.id}>
                  <div className="listed-name">{commentItem.author}</div>

                  <div className="listed-comment">{commentItem.comment}</div>
                </li>
              );
            })}
          </ul>
        </div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>

          <input type="text" name="name" placeholder="Type your name" />

          <textarea
            name="comment"
            placeholder="Type your comment"
            className="text-area"
          />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
      </>
    );
  }
}
Comments.defaultProps = {
  comments: [],
};

export default Comments;
