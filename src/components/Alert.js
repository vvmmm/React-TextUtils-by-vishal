import React from 'react'
import PropTypes from 'prop-types'



function Alert(props) {
  const Capitalise=(t)=>{
    const lower=t.toLowerCase();
    return lower[0].toUpperCase()+lower.slice(1)
  }

  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{Capitalise(props.alert.type)} </strong> : {props.alert.msg}
       
    </div> 

    
  )
}

export default Alert
