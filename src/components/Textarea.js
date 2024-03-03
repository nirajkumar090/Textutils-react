import React,{useState} from 'react'

export default function Textarea(props) {
  
    const handleOnChange =(event) =>{
        setText(event.target.value)
    }
  
    const handleUpClick =()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLowClick =()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

     const handleClear =()=>{
        let newText='';
        setText(newText);
     }   

    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'light':'#042743'}} >
    <div className="container my-3">
        <h2 className='mb-4' style={{color:props.mode==='dark'?'white':'#042743'}}>{props.heading}</h2>
    <textarea class="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}> Convert Upper Case</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}> Convert Lower case</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}> Clear Text</button>
    </div>
   
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}} >
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} Character</p>
        <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minu Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>

    </>
    
    )
}
