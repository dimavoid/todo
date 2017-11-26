import React from 'react';

import './Task.css'

export default class Task extends React.Component {
  constructor(props) {
    super(props);

    this.handleDone = this.handleDone.bind(this);
    this.handleDel = this.handleDel.bind(this);
  }

  handleDone(e) {
    this.props.onDone(this.props.item.id);
  }

  handleDel(e) {
    this.props.onDel(this.props.item.id);
  }

  render() {
    return (
      <section className={this.props.item.active ? 'task' : 'task task--completed'}>
        <button className="task-done" onClick={this.handleDone}>Done</button>
        <p className="task-text">{this.props.item.text}</p>
        <button className="task-del" onClick={this.handleDel}>Del</button>
      </section>
    );
  }
}