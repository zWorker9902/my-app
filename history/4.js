import React from 'react';
import ReactDom from 'react-dom'; // 将元素插入到界面中去

// 组件的二种定义方式，以及它们之间的区别
// 1、组件定义的第一种方式：函数
// { msg="hello" id="5" }
// 2、组件的首字母一定要大写（小写会被认为是React元素）
// 3、组件定义文笔后，可以像react元素一样使用
// 组件的渲染过程：
// 1、封装props对象
// 2、调用组件函数，得到返回的React元素
// 3、ReactDom把React元素转成真实的DOM元素并且插入到目标容器内部

let Message1 = (props) => {
  // 传递的是属性对象，下面方法是解构赋值
  console.log(props)
  return <h1 style={props.style}>{props.msg}</h1>
}

let Message = ({msg, style}) => {
  // 解构赋值，获取props中的msg
  return <h1 style={style}>{msg}</h1>
}

ReactDom.render(
  <div>
    <Message1 msg="hello" id="5" style={{ color: 'red' }}/>
    <Message msg="hello" id="5" style={{ color: 'red' }}/>
  </div>,
  window.app
);

