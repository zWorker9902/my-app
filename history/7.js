import React, { Component } from 'react';
import { render } from 'react-dom'; // 将元素插入到界面中去
import PropTypes from 'prop-types';

/*****
 * 受控组件：
 *    组件受状态控制
 *
 * 非受控组件：
 *
 * **********/

class Input extends Component {
  constructor(){
    super();

    this.state = {
      val: ''
    }
  }

  handleChange = (e) => {
    let val = e.target.value;
    this.setState({
      val
    })
  }

  render() {
    // 双向数据绑定
    return (
      <div>
        <p>{this.state.val}</p>
        <input type="text" value={this.state.val} onChange={this.handleChange}/>
      </div>
    )
  }
}

render(<Input/>, window.app)