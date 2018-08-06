import React, { Component } from 'react';
import { render } from 'react-dom'; // 将元素插入到界面中去
import PropTypes from 'prop-types';

class Person extends Component {
  constructor(){
    super();

    this.state = {
      happy: true
    };

    // this.handleChange = this.handleChange.bind(this)
  }

  // 默认属性对象
  static defaultProps = {
    name: '无名',
    // age: 10
  }

  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
  }

  // 这里使用箭头函数，就避免了函数内部this的绑定问题
  // 这个语法确保了、this、绑定在handleChange函数内部
  // 如果是正常函数定义，则需要绑定this
  handleChange = () => {
    this.setState({
      happy: !this.state.happy
    })
  }

  render() {
    let heart = this.state.happy? '开心': '难过';
    return (
      <div>
        <p>姓名：{this.props.name} 年龄：{this.props.age}</p>
        <p>心情: {heart}</p>
        <button onClick={this.handleChange}>改变</button>
      </div>
    )
  }
}

render(<Person name="Toms" age={100}/>, window.app)