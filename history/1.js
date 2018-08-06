import React from 'react';
import ReactDom from 'react-dom'; // 将元素插入到界面中去

// render 将一个react元素渲染到Dom容器内部
// JSX javascript + html(xml的一种)的混合写法
ReactDom.render(
  <h1>Hello</h1>,
  document.querySelector('#root')
);

// react元素是通过JS对象来描述DOM结构的一种数据结构
// ReactDom.render(
//   {
//     tagName: 'h1',
//     attr: null,
//     children: ['hello']
//   }
//   React.createElement('h1', null, ['hello'])
// )

