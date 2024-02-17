//TextForm.js


import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("UpperCase was clicked" +text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }


    const handleLoClick = () =>{
        console.log("LowerCase was clicked" +text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");


    }


    const handleReClick = () => {
        let newText = text.trim().replace(/\s+/g, ' ');
        setText(newText);
        props.showAlert("Remove Extra spaces!", "success");


      };


      const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("clear text", "success");


      };


      const handleCapitalizeClick = () => {
        let newText = text
          .toLowerCase() // Convert all to lowercase
          .replace(/\b\w/g, (match) => match.toUpperCase()); // Capitalize first letter of each word
        setText(newText);
        props.showAlert("Converted to capitalize!", "success");


      };


      const handleCopyClick = () =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges();
        props.showAlert("Copy text", "success");


    }


   
    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value)
    }

    const darkMode = ()=>{

    }

    const [text, setText] = useState("");
    return (
        <>
        <div className='container' style={{color: props.mode === 'light'? '#042743':'white'}}>
            <h1 className='mb-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'? 'white':'rgb(36 74 104)', color: props.mode === 'light'? '#042743':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleReClick}>Remove Extra spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCapitalizeClick}>Capitalize Case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-2 my-1" >Dark Mode</button>
           
        </div>
        <div className='container my-3' style={{color: props.mode === 'light'? '#042743':'white'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charecters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to Preview"}</p>
        </div>
        </>
    )
}
