import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("Uppercase was clicked"+ text); 
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }

    const handleLoClick= ()=>{
        // console.log("Uppercase was clicked"+ text); 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
    }

    const handleClearClick= ()=>{
        // console.log("Uppercase was clicked"+ text); 
        let newText = '';
        setText(newText)
        props.showAlert("Cleared text!","success");
    }
    const handleOnChange= (event)=>{
        // console.log("On Chnage");
        setText(event.target.value);
    }
    const[text,setText] = useState('Enter Text Here');

    const handleCopy = ()=>{
        var text = document.getElementById("OneBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!","success");
    }

    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Cleared extra spaces!","success");
    }
    // text ="new text"; //Wrong way to change the state
    // setText("New text"); // Correct way to change the state
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange ={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#284562':'white', color: props.mode==='dark'?'white':'#042743'}} id="OneBox" rows="9"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>Clear Extra Space</button>
            
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes required to read by an Average person</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
