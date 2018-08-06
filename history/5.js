import React, { Component } from 'react';
import { render } from 'react-dom'; // 将元素插入到界面中去

// 计时器 Clock
// 函数方式声明的组件是无状态的,无法满足要求

// 通过类声明组件，继承Component
class Clock extends Component {
  constructor(){
    super();

    this.state = {
      time: new Date().toLocaleString()
    }
  }

  // 生命周期函数：也称为生命周期钩子

  // 组件挂载完成
  componentDidMount() {
    this.timerID = window.setInterval(() => {
      // 避免出现This指向问题，这里使用箭头函数
      // setState() 方法更新状态，并且调用render() 方法进行重新渲染
      this.setState({
        time: new Date().toLocaleString()
      })
    }, 1000)
  }

  // 组件即将销毁
  componentWillUnmount() {
    clearInterval(this.timerID)
  }


  // render() 表示该组件如何渲染，只能返回一个React元素
  render() {
    return <h1>{this.state.time}</h1>

  }
}

render(
  <div>
    <Clock />
  </div>,
  window.app
);