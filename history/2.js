import React from 'react';
import ReactDom from 'react-dom'; // 将元素插入到界面中去

// 声明了一个react对象, 内部转换成第二种写法
let ele1 = <div><span>Hello</span></div>;
console.log(ele1)

//  标签类型 属性对象 子元素
// 1 注意： 此处使用的属性名都要转换成驼峰命名法：backgroundColor： 'red'
// 2 部分属性是JS关键字，需要换种学法： class - className， for  - htmlFor
let ele2 = React.createElement('div', {id: 1, className:'red'},  ['Hello']);
console.log(ele2);
// 经过Babel编译和React构造成 最终的React元素是这样的
let eleObj = {type: 'div', props: {
    className: 'red',
    id: 1,
    children: ['hello',
      {
        type: 'span',
        props: {
          className: 'blue',
          children: ['world']
        }
      }]
  }
};


function render(eleObj, conatiner) {
  // 解构出标签类型和属性对象
  let { type, props } = eleObj;

  // 创建Dom 元素
  let ele = document.createElement(eleObj.type);

  // 循环属性对象
  for(let attr in props) {
    if(attr == 'children') {
      props[attr].forEach(function(item){
        if(typeof item == 'string') {
          let textNode = document.createTextNode(item);
          ele.appendChild(textNode)
        }
        else {
          render(item, ele);
        }

      });
    }
    else if(attr == 'className') {
      ele.className = props[attr];
      // ele.setAttribute('class', props[attr]);
    }
    else {
      ele.setAttribute(attr, props[attr]);
    }
  }

  conatiner.appendChild(ele)

}


render(eleObj, document.querySelector('#root'))


// render 将一个react元素渲染到Dom容器内部
// JSX javascript + html(xml的一种)的混合写法
// ReactDom.render(
//   ele1,
//   document.querySelector('#root')
// );

