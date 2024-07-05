import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./textArea.css";


export default function TextArea(props) {
    const handleonclick = () =>{
        let newtxt = text.toUpperCase();
        setText(newtxt);
    };

    const handleonClick = () => {
        setText(text.toLowerCase());
    }

    const handleOnClick = () =>{
        let vowels = ['A', 'E', 'I', 'O', 'U'];
        let vowelCount = 0;
        for(let i = 0; i < text.length; i++){
            if(vowels.includes(text[i].toUpperCase())){
                vowelCount++;
            }
        }
        setTxt(vowelCount);
    }

    const handleonChange = (e) => {
        setText(e.target.value);
    };

    const [text, setText] = useState('');
    const [txt, setTxt] = useState('');

    return (
        <div>
            <h2 >Enter Your Text Below </h2>
            <div className="form-floating">
                <textarea className="form-control " placeholder="Leave a comment here" id="floatingTextarea2" 
                style={{height: '100px'}}  value = {text} onChange={handleonChange}>
                    {props.inputText}
                </textarea>
                <label htmlFor="floatingTextarea2">Input Text</label>
            </div>
            <div>
                <button onClick={handleonclick} className="btn btn-info mx-2" >
                    UpperCase
                </button>
                <button onClick={handleonClick} className="btn btn-info" >
                    LowerCase
                </button>
                <button onClick={handleOnClick} className="btn btn-info mx-2" >
                    Vowels 
                </button>
                <input className="vowel " placeholder="vowel-count" value={txt} />
            </div>
            <h3>Text Summary</h3>
            <p>Total words are {text.split(' ').length} and Total characters are {text.length} </p>
            
        </div>
    )
}
TextArea.propTypes = {
    inputText: PropTypes.string,
};

