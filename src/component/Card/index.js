
import React, { Component } from 'react';

import Tag from './Tag';
import Row from './Row';

class Card extends Component {
  static Tag = Tag;

  static Row = Row;

  render() {
    const { title, children } = this.props;
    return (
      <div>
        <div>
          {title}
        </div>
        <div>{children}</div>
      </div>
    );
  }
}
export default Card;
