import React from 'react';

export default function Box(prop) {
  console.log(prop.first);

  return (
    Array(prop.first).fill(null).map((_element, index) => (
      <div key={index} className="box"></div>
    ))
  );
}
