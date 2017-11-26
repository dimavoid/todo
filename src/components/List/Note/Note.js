import React from 'react';

import './Note.css'

export default class Note extends React.Component {
  constructor(props) {
    super(props);

    this.handleDel = this.handleDel.bind(this);
  }

  handleDel(e) {
    this.props.onDel(this.props.item.id);
  }

  render() {
    return (
      <section className="note">
        <p className="note-text">{this.props.item.text}</p>
        <button className="note-del" onClick={this.handleDel}>Del</button>
      </section>
    );
  }
}