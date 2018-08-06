import React from 'react';
import ReactDom from 'react-dom'; // 将元素插入到界面中去

let names = ['one', '', 'three'];

// React 是一个用于构建用户界面的库
// React元素JSX元素，其实就是用JS来描述界面的对象


// React 元素
// 1。首字母消协，凡是首字母消协的都会被认为是React元素


ReactDom.render(
  <div>
    {
      // map 返回新数组，每项为返回值组成
      names.map(function(item, index) {
        return item.length > 0 ? <span key={index}
                                       style={{backgroundColor: 'pink'}} className='red'>{item} </span> : null
      })
    }
  </div>,
  document.querySelector('#root')
);

