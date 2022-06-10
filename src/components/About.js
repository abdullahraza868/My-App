import React from 'react'
export default function About(props) {

    let myStyle ={
        color: props.mode=== 'dark'? 'white' : 'black',
        backgroundColor: props.mode=== 'dark'? 'rgb(68 85 98)' : 'white'
      }
  return (
    <div className='container' style={{color: props.mode=== 'dark'? 'white' : 'black'}} >
      
      <h3>{props.AboutHeading}</h3>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item"  >
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button"   data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What is HTML?
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <p><strong>HTML </strong>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.</p>
                </div>
                </div>
            </div>
            <div className="accordion-item"  >
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button"   data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    What is CSS?
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <p><strong>CSS </strong>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
                </div>
                </div>
            </div>
            <div className="accordion-item"  >
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button"   data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    What is JAVASCRIPT?
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <p><strong>Javascript,</strong> often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.</p>
                </div>
                </div>
            </div>
            </div>




    </div>
  )
}
