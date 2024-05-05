import { useCallback, useEffect, useRef, useState } from "react";
import './password.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function PassswordGenerator() {
    const [length, setLength] = useState(8);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const genPassword = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopgrstuvwxyz";
        if (numAllowed) str += '0123456789';
        if (charAllowed) str += '!@#$%&';
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }
        setPassword(pass);
    }, [length, numAllowed, charAllowed, setPassword])

    // const passRef = useRef(null);
    const copyPassword = useCallback(() => {
        // passRef.current?.select();
        window.navigator.clipboard.writeText(password);
        toast.success('Password Copied!');
    }, [password])

    useEffect(() => {
        genPassword();
    }, [length, numAllowed, charAllowed, genPassword])
    return (
        <>
            <div className="main-section">
                <h1 className="header">Password Generator</h1>
                <hr className='hrline'></hr>
                <div className="flex">
                    <input className="input-field" type="text" readOnly value={password} />
                    <button className="button-3" onClick={copyPassword}>Copy</button>
                </div>
                <div className="selection-div">
                    <div className="slider-container">
                        <input type="range" className="slider" min={6} max={50} value={length} onChange={(e) => setLength(e.target.value)} /> <span className="length-value">({length})</span>
                    </div>
                    <div className="checkbox-div">
                        <div>
                            <input type="checkbox" onChange={() => setNumAllowed((prev) => !prev)} />
                            <label> Number</label>
                        </div>
                        <div>
                            <input type="checkbox" onChange={() => setCharAllowed((prev) => !prev)} />
                            <label> Character</label>
                        </div>
                    </div>
                </div>
                <ToastContainer position="bottom-right" autoClose={2000} />
            </div>
        </>
    )
}

export default PassswordGenerator;