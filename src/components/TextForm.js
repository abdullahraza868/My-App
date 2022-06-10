import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!" , "success");
    }
    const handleLowClick = () =>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!" , "success");
    }
    const handleRemoveClick = ()=>{
       let newText= '';
       setText(newText);
       props.showAlert("Text removed successfully!" , "success");
    }


    const handleOnChang = (event) =>{
        //console.log("onChange");
        setText(event.target.value);
        
    }

   const [text, setText] = useState('');

  return (
      <>
    <div className='container' style = {{color: props.mode=== 'dark'? 'white' : '#042743'}}>
      <h2>{props.heading}</h2>
       
       <div className="mb-3">
       <textarea className="form-control" style = {{backgroundColor: props.mode=== 'dark'? '#6c757d' : 'white' , color: props.mode=== 'dark'? 'white' : '#042743'}} value={text} id="myBox" onChange= {handleOnChang} rows="7"></textarea>
       <button className="btn btn-primary mx-3 my-1" onClick={handleUpClick} >Convert to UpperCase</button>
       <button className="btn btn-primary mx-3 my-1" onClick={handleLowClick} >Convert to LowerCase</button>
       <button className="btn btn-primary mx-3 my-1" onClick={handleRemoveClick} >Clear Text</button>
     </div>
    </div>

    <div className="container" style = {{color: props.mode=== 'dark'? 'white' : '#042743'}}>
        <h3>YOUR TEXT SUMMARY:</h3>
        <p>Characters= {text.length}   and   Words = {text.split(" ").filter((element)=> {return element.length!==0}).length}</p>
        <p>{0.008 * text.split(" ").filter((element)=> {return element.length!==0}).length} : Minutes to Read</p>
    </div>
    </>
  )
}
