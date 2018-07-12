import React from 'react'
import { connect } from 'react-redux';
import { addGUN, removeGUN, addGunAsync } from './index.redux'
class App extends React.Component {
    render() {
        const num = this.props.num;
        const addGUN = this.props.addGUN;
        const removeGUN = this.props.addGUN;
        const addGunAsync = this.props.addGunAsync;
        return (
            <div>
                <h1>现在有机枪{num}把</h1>
                <button onClick={addGUN}>
                    加一起机关枪
                </button>
                <button onClick={removeGUN}>
                    减一起机关枪
                </button>
                <button onClick={addGunAsync}>
                    过两天加一起机关枪
                </button>
            </div>
        )

    }
}
const mapStatetoProps = (state) => {
    return { num: state }
}
const actionCreators = { addGUN, removeGUN, addGunAsync }
App = connect(mapStatetoProps, actionCreators)(App)
export default App;