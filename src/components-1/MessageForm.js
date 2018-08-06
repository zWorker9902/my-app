import React, {Component} from 'react';

export default class MessageForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault(); // 组织默认表单的提交

    // 获取用户名和内容值
    let username = this.username.value;
    let content = this.content.value;

    this.props.addMessage({
      username,
      content,
      createAt: new Date()
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="control-label">用户名</label>
          <input ref={param => this.username = param} type="text" className="form-control"/>
        </div>

        <div className="form-group">
          <label htmlFor="content" className="control-label">内容</label>
          <input ref={param => this.content = param} type="text" className="form-control"/>
        </div>

        <div className="form-group">
          <button className="btn btn-primary">发表</button>
        </div>
      </form>
    )
  }
}