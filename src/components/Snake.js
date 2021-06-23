import React from 'react'

export default (props) => {
  return (
    <div>
      {props.snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
          position: 'absolute',
          width: '8%',
          height: '8%',
          backgroundColor: props.color,
          zIndex: '2'
        }
        return <div key={i} style={style}></div>
      })}
    </div>
  )
}
