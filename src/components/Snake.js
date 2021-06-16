import React from 'react'

export default (props) => {
  return (
    <div>
      {props.snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
          position: 'absolute',
          width: '2%',
          height: '2%',
          backgroundColor: 'red',
          border: '1px solid #fff',
          zIndex: '2'
        }
        return <div style={{}} key={i} style={style}></div>
      })}
    </div>
  )
}
