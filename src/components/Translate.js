import React, {useState, useEffect, useRef} from 'react';
import Dropdown from "./Dropdown";
import Convert from "./Convert";

//Translate API key
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];


const Translate = () => {

    const [language, setLanguage] = useState(options[2]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text}
                           onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>

            <Dropdown label="Select a Language" selected={language} onSelectedChange={setLanguage} options={options}/>

        <hr/>
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language}></Convert>
        </div>
    );
};

export default Translate;
