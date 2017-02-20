import React from "react";
import Photo from "./Photo";
import Comments from "./Comments";

class Single extends React.Component {
     // constructor() {
     //
     // }
     render(){
          // const post = // we would have to select post from urls
          const i = this.props.posts.findIndex((post)=> post.code === this.props.params.postId)
          const post = this.props.posts[i];

          //Comments components passing variable
          const postComments = this.props.comments[this.props.params.postId] || [] // not every one has comment
          return(
               <div className="single-photo">
                    <Photo i={i} post={post} {...this.props} />
                    <Comments postComments={postComments} {...this.props}/>
               </div>
          );

     }
}

export default Single;