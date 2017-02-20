/**
*  reducers takes two things in
1. states -- this is current state of system
2. action -- this is what action happened and what should we change it to

reducres return updated store finally
*/

function posts(state = [], action) {
     // console.log(state, action);
     switch (action.type) {
          case "INCREMENT_LIKES":
               console.log("Incrementing likes");
               // console.log(state);
               const i = action.index;
               // console.log(i);
               //
               return [
                    ...state.slice(0,i), // array before target
                    {...state[i], likes:state[i].likes + 1},
                    ...state.slice(i +1), // array after target
               ]
               break;

          default:

     }
     return state;
}

export default posts;
