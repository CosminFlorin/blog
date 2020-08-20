import React  from "react";
import "./comments.css";

class Comments extends React.Component {
 
state={
  comments:[]
}

  handleSubmit = (event) => {
    event.preventDefault(); 
    const comment = event.target.comment.value;
    const name = event.target.name.value;

    this.setState(function(previousState){
      return {
        comments: previousState.comments.concat({
          id: Date.now(),
          comment,
          name
        })
      }
    })

    event.target.comment.value=""
    event.target.name.value=""
  };


  render() {
    return (
     <>
        <div className="comment-section">
          <h4>Comments:</h4>
          <ul>
            {this.state.comments.map(commentItem =>{
              return  (
                <li key={commentItem.id}>
                  <div className="listed-name">{commentItem.name}</div>
                  <div className="listed-comment">{commentItem.comment}</div>
                </li>
              )
            })}
          </ul>
        </div>
        <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        
        <input type="text"  name="name" placeholder="Type your name" />
          
          <textarea  name="comment"   placeholder="Type your comment" className="text-area" />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
      </>
    );
  }
}

export default Comments;
