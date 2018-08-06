import React, { Component } from 'react';
import { render } from 'react-dom'; // 将元素插入到界面中去
import 'bootstrap/dist/css/bootstrap.min.css';

// 复合组件
class Panel extends Component {
  constructor(){
    super();

    this.state = {
      color: 'black'
    }
  }

  render() {
      return (
        <div className="panel panel-default">
          <button className="btn btn-default" onClick={()=>this.setState({color: 'red'})}>红</button>
          <button className="btn btn-default" onClick={()=>this.setState({color: 'green'})}>绿</button>
          <PanelHead color={this.state.color} head={this.props.head}/>
          <PanelBody color={this.state.color} body={this.props.body}/>
          <PanelFooter color={this.state.color} footer={this.props.footer}/>
        </div>
      )
    }
}

// React单项数据流：数据只能从父组件传递到子组件

class PanelHead extends Component {
  render() {
    return (
      <div style={{color: this.props.color}} className="panel-heading">
        {this.props.head}
      </div>
    )
  }
}

class PanelBody extends Component {
  render() {
    return (
      <div style={{color: this.props.color}}  className="panel-body">
        {this.props.body}
      </div>
    )
  }
}


class PanelFooter extends Component {
  render() {
    return (
      <div style={{color: this.props.color}}  className="panel-footer">
        {this.props.footer}
      </div>
    )
  }
}

render(<Panel head="Head" body="Body" footer="Footer"/>, window.app)