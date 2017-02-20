import React from "react";

class Comments extends React.Component {
     // constructor() {
     //
     // }
     renderComment(comment, i){
          //return();-
          // console.log(comment);
          return(
               <div className="comment" key={i}>
                    <p>
                         <strong>{comment.user}</strong>
                         {comment.text}
                         <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)} >&times;</button>
                    </p>
               </div>
          )
     }

     handleSubmit(event) {
          event.preventDefault();
          console.log("submitting the form!");
          // console.log(this.refs.author.value)
          const postId = this.props.params.postId;
          const comment = this.refs.comment.value;
          const author = this.refs.author.value;
          // console.log(postId, author, comment);
          this.props.addComment(postId,author, comment);
          this.refs.commentForm.reset();
     }

     render(){
          return (
               <div className="comments">
                    {this.props.postComments.map(this.renderComment.bind(this))}
                    <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
                         <input type="text" ref="author" placeholder="author"/>
                         <input type="text" ref="comment" placeholder="comment"/>
                         <input type="submit" hidden/>
                    </form>
               </div>
          );
     }
}

export default Comments
