import React, { Component } from 'react';
import { render } from 'react-dom'; // 将元素插入到界面中去
import PropTypes from 'prop-types';

//  非受控组件 非受控元素：值不受状态控制
class Sum extends Component {
  constructor(){
    super();

    this.state = {
      a: 0,
      b: 0,
      result: 0
    }
  }


  handleChange = (e) => {
    // let a = parseInt(this.refs.a.value || 0);
    // let b = parseInt(this.refs.b.value || 0);
    //
    // // 通过refs操作dom
    // this.refs.result.value = a + b

    let a = parseInt(this.a.value || 0);
    let b = parseInt(this.b.value || 0);

    // 通过refs操作dom
    this.result.value = a + b

    console.log(this.refs);

  }

  render(){
    return (
      /*
      <div onChange={this.handleChange}>
        !ref如果是一个函数，表示当元素挂载到页面中之后，会立刻调用此函数，并传入渲染后的DOM元素,this指向当前组件的实例*!
        <input ref={ref=>this.a = ref} type="text"/>+
        <input ref="b" type="text"/>=
        <input ref="result" type="text"/>
      </div>
      */

      <div onChange={this.handleChange}>
        {/*/!*ref如果是一个函数，表示当元素挂载到页面中之后，会立刻调用此函数，并传入渲染后的DOM元素,this指向当前组件的实例*!/*/}
        <input ref={ref=>this.a = ref} type="text"/>+
        <input ref={ref=>this.b = ref} type="text"/>=
        <input ref={ref=>this.result = ref} type="text"/>
      </div>
    )
  }
}

render(
  <Sum/>,
  window.app
)