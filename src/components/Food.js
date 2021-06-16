import React from 'react';

export default (props) => {

  const style = {
    left: `${props.dot[0]}%`,
    top: `${props.dot[1]}%`,
    position: "absolute",
    width: "2%",
    height: "2%",
    background: `${props.color}`,
    border: `1px solid #fff`,
    zIndex: "1",
  }

  return (
    <div style={style}></div>
  )
}