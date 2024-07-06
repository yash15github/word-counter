import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./textArea.css";

export default function TextArea(props) {
    const handleOnClickUpperCase = () => {
        let newTxt = text.toUpperCase();
        setText(newTxt);
    };

    const handleOnClickLowerCase = () => {
        setText(text.toLowerCase());
    }

    const handleOnClickVowels = () => {
        let vowels = ['A', 'E', 'I', 'O', 'U'];
        let vowelCount = 0;
        for (let i = 0; i < text.length; i++) {
            if (vowels.includes(text[i].toUpperCase())) {
                vowelCount++;
            }
        }
        setTxt(vowelCount);
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    const [text, setText] = useState('');
    const [txt, setTxt] = useState(0);

    return (
        <div className="center-container" style={{ color: props.mode === "dark" ? "white" : "black"}}  >
            <h2>Enter Your Text Below</h2>
            <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                    style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black"}} value={text} onChange={handleOnChange}>
                </textarea>
            
            </div>
            <div className="my-btn" >
                <button onClick={handleOnClickUpperCase} className="btn btn-info mx-2 " style={{ color: props.mode === "dark" ? "white" : "black"}}>
                    UpperCase
                </button>
                <button onClick={handleOnClickLowerCase} className="btn btn-info" style={{ color: props.mode === "dark" ? "white" : "black"}}>
                    LowerCase
                </button>
                <button onClick={handleOnClickVowels} className="btn btn-info mx-2" style={{ color: props.mode === "dark" ? "white" : "black"}}>
                    Vowels
                </button>
                <input className="vowel" placeholder="vowel-count" value={txt} style={{ backgroundColor: props.mode === "#0dcaf0" ? "white" : "grey", color: props.mode === "dark" ? "white" : "black"}}  readOnly />
            </div>
            <h3>Text Summary</h3>
            <p>Total words are {text.split(' ').filter(Boolean).length} and Total characters are {text.length}</p>
        </div>
    );
}

TextArea.propTypes = {
    inputText: PropTypes.string,
};
