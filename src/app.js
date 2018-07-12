import React from "react";
import { connect } from "react-redux";
import { addGUN, removeGUN, addGunAsync } from "./index.redux";
// const mapStatetoProps = state => {
//   return { num: state };
// };
// const actionCreators = {addGUN, removeGUN, addGunAsync };
//   App = connect( mapStatetoProps,actionCreators
//
//
//   )(App);
@connect(
  //1、你要state什么属性放到props里 :state
  state => ({ num: state }),
  //2、你要什么方法放在props里，自动dispatch
  { addGUN, removeGUN, addGunAsync }
)
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>现在有机枪{this.props.num}把</h1>
        <button onClick={this.props.addGUN}>加一起机关枪</button>
        <button onClick={this.props.removeGUN}>减一起机关枪</button>
        <button onClick={this.props.addGunAsync}>过两天加一起机关枪</button>
      </div>
    );
  }
}

export default App;
