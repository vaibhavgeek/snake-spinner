import React from 'react';

export default (props) => {

  const style = {
    left: `${props.dot[0]}%`,
    top: `${props.dot[1]}%`,
    position: "absolute",
    width: "8%",
    height: "8%",
    background: `${props.color}`,
    zIndex: "1",
  }

  return (
    <div style={style}></div>
  )
}