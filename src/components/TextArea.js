import React, { useState } from 'react'



function TextArea(props) {
  const Up=()=>{
    setText(text.toUpperCase());
    props.salert("Change to Uppercase","primary");
  }
  const Down=()=>{
    setText(text.toLowerCase());
    props.salert("Change to Lowercase","success");
  }
   const Clear=()=>{
    setText("");
    props.salert("Text Cleared","danger");
  }

  const handle=(event)=>{
   setText(event.target.value);
  }
  const [text,setText]=useState("");

  
  return (
   
    <>
    <div className={`container bg-${props.mode} text-${props.mode==='light'?'dark':'light'} `}>
<div className="mb-3" >
    <h1>{props.heading}</h1>
  
  <textarea className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} id="myform" value={text} onChange={handle} rows="8"></textarea>
  <button className='btn btn-primary my-3' onClick={Up}>Convert to Uppercase</button>
  <button className='btn btn-success my-3 mx-2' onClick={Down}>Convert to Lowercase</button>
  <button className='btn btn-danger my-3 mx-2' onClick={Clear}>Clear Text</button>

</div>

<div className="container">
  <h1>Your Word Count is :</h1>
  <h4>No of words <b> {text.split(' ').length-1} </b>characters <b>{text.length} </b>in your text.</h4>
  <p>Read in {0.008*(text.split(' ').length-1)} Minutes</p>

  <h1>Preview:</h1>
  <p className="bg-danger">{text}</p>
</div>
</div>
  
  </>
  )
}

export default TextArea
