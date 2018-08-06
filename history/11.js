import React, { Component } from 'react';
import { render } from 'react-dom'; // 将元素插入到界面中去
import 'bootstrap/dist/css/bootstrap.min.css';


/**
 * 1、组件的完整生命周期
 * 2、一般代码编写顺序
 * */

 class Counter extends Component {
   constructor(){
     super();

     this.state = {
       num: 0
     };
   }

   componentWillMount(){
     console.log("1.componentWillMount 组件将要被挂载");
   }

   componentDidMount() {
     console.log("3.componentDidMount 组件挂载完成")
   }

   // newProps 新的属性对象
   // newState 新状态对象
   shouldComponentUpdate(newProps, newState) {
     console.log("4.shouldComponentUpdate 组件是否要进行更新");
     if(newState.num%1 ==0){
       return true;// 重新渲染，更新页面
     }
     else {
       return false;
     }
   }

   componentWillUpdate() {
      console.log("5.componentWillUpdate 组件将要更新")
   }

   componentDidUpdate() {
     console.log("6.componentDidUpdate 组件更新完成")
   }

  handleClick = () => {
     this.setState({
       num: this.state.num + 1
     }, () => {
       console.log(this.state.num);
     })

    // console.log("异步："+this.state.num);// 由于setState（） 是异步的，所以在赋值之后不能立刻获取最新的state值，可以在回调函数中获取
  }

   render() {
     console.log("2.render 组件挂载")
     return (
       <div className="panel panel-default" style={{border: '1px solid red', padding: 5}}>
         <p>{this.state.num}</p>
         <button onClick={this.handleClick} className="btn btn-default">+</button>
         <SubCounter num={this.state.num}/>
       </div>
     )
   }
}

// 子计数器
class SubCounter extends Component {
   componentWillReceiveProps() {
     console.log("SubCounter componentWillReceiveProps 组件将要接收到新的属性对象")
   }

   shouldComponentUpdate(newProps, newState) {
     if(newProps.num%3 == 0) {
       return true;
     }
     else {
       return false;
     }
   }

  render() {
    return (
      <div className="panel panel-default" style={{border: '1px solid green', padding: 5}}>
        <p>{this.props.num}</p>
      </div>
    )
  }
}

render(<Counter />, window.app)