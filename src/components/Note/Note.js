import React from 'react';

import './Note.css';

class Note extends React.Component {
  handleDel = (e) => {
    this.props.onDel(e);
  }

  render() {
    return (
      <section className="Note" id={this.props.id}>
        <p className="Note__text">{this.props.text}</p>
        <button className="Note__del" onClick={this.handleDel}>Del</button>
      </section>
    );
  }
}

export default Note;