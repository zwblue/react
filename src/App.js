// export default App;
import React from 'react'
import { Button, List } from 'antd-mobile'
class App extends React.Component {
  render() {
    let boss = '李云龙'
    return (
      <div>
        <h2>独立团，团长{boss}</h2>
        <OneYing boss='张大彪'></OneYing>
        <TwoYing boss='孙德胜'></TwoYing>
      </div>
    )
  }
}

function TwoYing(props) {//函数式组件 简单的组件
  return <h2>骑兵连连长{props.boss}，冲啊！</h2>
}

class OneYing extends React.Component {//class要大写
  // this.props获取值
  constructor(props) {
    super(props)
    this.state = {
      solders: ['狗子', '猴子', '虎子', '和尚']
    }
    // this.addSolder=this.addSolder.bind(this);
  }
  componentWillMount() {
    console.log('组件马上就要加载了')
  }
  componentDidMount() {
    console.log('组件加载完毕')
  }
  componentWillReceiveProps() {
    console.log('组件要接收父组件的值了')
  }
  shouldComponentUpdate() {
    console.log('判断是不是要更新组件了')
    return true;
  }
  componentWillUpdate() {
    console.log('马上要更新组件了')
  }
  componentDidUpdate() {
    console.log('更新组件完毕')
  }
  componentWillUnmount() {
    console.log('组件卸载了')
  }
  addSolder = () => {
    console.log('hello add solder');
    this.setState({
      solders: [...this.state.solders, '皮蛋' + Math.random() * 100]
    })
  }
  render() {
    console.log('组件正在加载')
    return (
      <div>
        <h2>一营营长，{this.props.boss}</h2>
        {/* <button onClick={()=>this.addSolder()}>新兵入伍</button> */}
        <Button type='primary' onClick={this.addSolder}>新兵入伍</Button>
        <List renderHeader={() => '士兵列表'}>
          {this.state.solders.map((v, index) => {
            return <List.Item key={index}>{v} </List.Item>
          })}
        </List>
      </div>
    )
  }
}
export default App