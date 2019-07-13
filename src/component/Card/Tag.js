
import React from 'react';

function Tag(props) {
  const { label, onClick } = props;
  return (
    <div onClick={onClick}>
      {label}
    </div>
  );
}

export default Tag;
