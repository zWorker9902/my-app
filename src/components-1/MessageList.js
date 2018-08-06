import React, {Component} from 'react';
import Message from "./Message";

export default class MessageList extends Component {
  constructor(){
    super();
  }

  render () {
    let { messages, removeMessage } = this.props;
    return (
      <ul className="list-group">
        {
          messages.map((message, index) => (
            <Message message={message} removeMessage={removeMessage} index={index}  key={index}/>
          ))
        }
      </ul>
    )
  }
}