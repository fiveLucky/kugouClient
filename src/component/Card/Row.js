
import React from 'react';

function Row(props) {
  const { label, onClick } = props;
  return (
    <div onClick={onClick}>
      {label}
    </div>
  );
}

export default Row;
