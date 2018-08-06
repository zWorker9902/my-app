import React, {Component} from 'react';
import jsonp from 'jsonp';

/**
 *
 * 1.input绑定改变事件
 *
 * */

export default class Suggest extends Component {
  constructor(){
    super();

    this.state = {
      words: [],
      index: -1, // 当前选中的索引
    }
  }

  handleChange = (e) => {
    let wd = e.target.value;

    // 缓存用户输入关键字
    this.wd = wd;

    // 调用百度搜索关键字接口
    jsonp(`https://www.baidu.com/su?wd=${wd}`, {
        param: 'cb',
      },
      (err, data) => {
      console.log(data)
        this.setState({
          words: data.s
        })
      }
    )
  }

  handleKeyDown = (e) => {
    let code = e.keyCode;
    //  当按下向上／向下按键
    if(code == '38' || code == '40') {
      let index = this.state.index;
      if(code == '38') {
        index -- ;
        if(index < -1) {
          index = this.state.words.length - 1;
        }
      }else if(code == '40') {
        index ++ ;
        if(index == this.state.words.length) {
          index = -1;
        }
      }

      this.setState({index})
    }else if(code == '13') {
      window.location = `http://www.baidu.com/s?wd=${e.target.value}`;
    }
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <div className="panel panel-default">
              <div className="panel-heading">
                <input onKeyUp={this.handleEnter} value={this.state.words[this.state.index] || this.wd} onKeyDown={this.handleKeyDown} type="text" className="form-control" onChange={this.handleChange}/>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {
                    this.state.words.map((word, index) => (
                      <li className={"list-group-item " + (index === this.state.index ? 'active': '')} key={index}>{word}</li>
                    ))
                  }
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}