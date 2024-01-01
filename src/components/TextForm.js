import React, { useState } from 'react'


console.log(process.env.REACT_APP_API_KEY || "uuuu")
export default function TextForm(props) {
    const [text, setText] = useState("Enter text here...");


    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        const txt = document.getElementById("mainText")
        txt.select();
        navigator.clipboard.writeText(txt.value);
    }

    const handleExtraSpc = () => {
        const txt = text.split(/[ ]+/)
        setText(txt.join(" "))
    }

    return (
        <>
            <div className="container">
                <h1 className="my-3">{props.heading}</h1>
                <div className="mb-3 my-3">
                    <textarea style={props.mode === 'dark' ? {backgroundColor: '#607385', color: 'white'} : {backgroundColor: 'white', color: 'black'}} className="form-control" onChange={handleChange} value={text} id="mainText" rows={10} />
                    <button className="btn btn-primary my-2" onClick={handleUpClick}>Uppercase</button>
                    <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Lowercase</button>
                    <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>copy</button>
                    <button className="btn btn-primary text-wrap mx-2 my-2" onClick={handleExtraSpc}>remove extra spaces</button>

                    <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>clear</button>


                </div>
            </div>
            <div className="container my-3">
                <h2>Text Summary</h2>
                <p >total words - {text ? text.replace(/\s+/g, ' ').trim().split(" ").length : 0} and total characters - {text.replace(/\s+/g, ' ').trim().length}</p>
                <p>{text ? 0.008 * text.split(" ").length : 0} Minutes read</p>
                
            </div>
        </>


    )
}
