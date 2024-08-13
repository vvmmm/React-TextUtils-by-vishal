import React,{useCallback, useState} from 'react'

function Explain() {
  const [myCSS,setMyCss]=useState({
         color:"black",
         backgroundColor:"white",

  });
  const [btnText,setBtnText]=useState("DARK");

  const changeCSS=()=>{
               if(myCSS.color==="black"){
                setMyCss({
                    color:"white",
                    backgroundColor:"black",
                })
                setBtnText("LIGHT");
               }
               else{
                setMyCss({
                    color:"black",
                    backgroundColor:"white",
             })
             setBtnText("DARK");
               }
  }

  return (
    <div>
            <div className="accordion" id="accordionExample" style={myCSS}>
        <div className="accordion-item" style={myCSS}>
            <h2 className="accordion-header"style={myCSS}>
            <button className="accordion-button" style={myCSS} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body"style={myCSS}>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item"style={myCSS}>
            <h2 className="accordion-header"style={myCSS}>
            <button className="accordion-button collapsed" style={myCSS}type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" style={myCSS}className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body"style={myCSS}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item"style={myCSS}>
            <h2 className="accordion-header"style={myCSS}>
            <button className="accordion-button collapsed"style={myCSS} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" style={myCSS}className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body"style={myCSS}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
        <button className="btn btn-dark my-3" onClick={changeCSS}>{btnText}</button>
    </div>
  )
}

export default Explain
