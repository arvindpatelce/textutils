import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked")
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLoClick = ()=>{
        //console.log("Lowercase was clicked")
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleClearClick = ()=>{
        let newText = ''
        setText(newText)
    }
    
    const handleOnChange = (event)=>{
        //console.log("On Change")
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here2')

   
    
    return (
        <>
        <div className="container" style={{color:props.mode=== 'Dark'?'white': 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundcolour: props.mode==='Dark'? 'grey': 'white', color:'#042743'}} id="myBox" rows="8"></textarea>
            </div>

            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1"onClick={handleUpClick}>
                Convert to Upppercase
            </button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1"onClick={handleLoClick}>
                Convert to Lowercase
            </button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1"onClick={handleClearClick}>
                Clear Text
            </button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1"onClnick={() =>  navigator.clipboard.writeText(text)}>
                Copy to Clipboard
            </button>
        </div>
        <div className="container my-3" style={{color:props.mode=== 'Dark'?'white': 'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            {/*<p>{text.length > 0 ? text.trim().split(" ").length:0} words and {(text.length)-(text.length > 0 ? text.trim().split(" ").length:0) + 1 } characters</p>*/}
            {/*<p>{text.trim() === " " ? 0 : text.match(/\s+/g).length} words and{text.replace(/\s+/g," ").length} characters</p>*/}
            {/*<p>{text.split(" ").filter((y) => (y!=="")).length} words and {text.length} characters</p>*/}
            <p>{0.008 * (text.split(/\s+/).filter((element)=>{return element.length!==0}).length ) } Minutes read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}
