import React from 'react';

import './Task.css';

class Task extends React.Component {
  handleDel = (e) => {
    this.props.onDel(e);
  }

  handleToggle = (e) => {
    this.props.onToggle(e);
  }

  render() {
    const classTask = (this.props.completed) ? 'Task Task--completed' : 'Task';

    return (
      <section className={classTask} id={this.props.id}>
        <button className="Task__toggle" onClick={this.handleToggle}>Done</button>
        <p className="Task__text">{this.props.text}</p>
        <button className="Task__del" onClick={this.handleDel}>Del</button>
      </section>
    );
  }
}

export default Task;