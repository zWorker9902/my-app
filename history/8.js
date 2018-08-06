import React, { Component } from 'react';
import { render } from 'react-dom'; // 将元素插入到界面中去
import PropTypes from 'prop-types';

// 受控组件
class Sum extends Component {
  constructor(){
    super();

    this.state = {
      a: 0,
      b: 0,
      result: 0
    }
  }

  handleChangeA = (e) => {
    let a = !e.target.value ? 0: parseInt(e.target.value)
    this.setState({
      a: a,
      result: a + this.state.b
    })
  }

  handleChangeB = (e) => {
    let b = !e.target.value ? 0: parseInt(e.target.value)
    this.setState({
      b: b,
      result: b + this.state.a
    })
  }

  render(){
    return (
      <div>
        <input type="text" value={this.state.a} onChange={this.handleChangeA}/>+
        <input type="text" value={this.state.b} onChange={this.handleChangeB}/>=
        <input type="text" value={this.state.result}/>
      </div>
    )
  }
}

render(
  <Sum/>,
  window.app
)