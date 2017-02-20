function postComment(state = [], action) {
     switch (action.type) {
          case "ADD_COMMENT":
               //  return the new state with the new comment
               return[...state,{
                    user: action.author,
                    text: action.comment
               }]
               break;
          case "REMOVE_COMMENT":
               console.log("removing comment ");
               return [
                    ...state.slice(0,action.i),
                    ...state.slice(action.i+1)
               ]
               break;
          default:

     }
     return state;
}

function comments(state = [], action) {
     // console.log(state, action);

     if(typeof action.postId !== 'undefined'){
          return{
               // take the current state
               ...state,
               // overwrite this post with a new one
               [action.postId]: postComment(state[action.postId], action)
          }
     }


     return state;
}

export default comments;
