import React from 'react'

const Message = (props) => {
  return (
    <div>
        <h3>Error!!!!!</h3>
        <h4>{props.children}</h4>

    </div>
  )
}  

export default Message