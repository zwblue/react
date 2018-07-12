import React from 'react'
class App extends React.Component {
    render() {
        const store = this.props.store
        const num = store.getState();//获取storecounter的值
        const addGUN=this.props.addGUN;
        const removeGUN=this.props.addGUN;
        return (
            <div>
                <h1>现在有机枪{num}把</h1>
                <button onClick={() => store.dispatch(addGUN())}>
                    加一起机关枪
                </button>
                <button onClick={() => store.dispatch(removeGUN())}>
                    减一起机关枪
                </button>
            </div>
        )

    }
}
export default App;