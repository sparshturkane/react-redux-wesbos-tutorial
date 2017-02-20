//main was dumb component
//App.js will be nice component and we will connect states and actions
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";
import Main from "./Main";

//mapping states to react
function mapStateToProps(state) {
     return {
          posts: state.posts,
          comments: state.comments
     }
}

//mapping action/dispatchers to react
function mapDispatchToProps(dispatch) {
     return bindActionCreators(actionCreators, dispatch);
}
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
