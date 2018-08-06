import React, {Component} from 'react';
import MessageList from './MessageList';
import MessageForm from "./MessageForm";

import './MessageBox.css';

export default class MessageBox extends Component {
  constructor(){
    super();

    this.state = {
      messages: [], // 消息数组
    }
  }

  addMessage = (message) => {
    // state 每次生成都是新对象
    let messages = [...this.state.messages, message];
    this.setState({messages})
  }

  removeMessage = (index) => {
    this.state.messages.splice(index, 1);
    this.setState({
      messages: [...this.state.messages]
    });
  }

  render () {
    return (
      <div className="container">

        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="text-center">留言板</h2>
              </div>
              <div className="panel-body">
                <MessageList messages={this.state.messages} removeMessage={this.removeMessage}/>
              </div>
              <div className="panel-footer">
                <MessageForm addMessage={this.addMessage}/>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}