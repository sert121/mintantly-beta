import React from 'react';
import "./Inputbox.css";

import logo from "./images/logo.png";
import logo3 from "./images/logo3.png";

import mintantly from "./images/mintantly.jpeg";
import justlogo from "./images/justlogo.jpeg";

import './header.css';

const InputBox = () => {
    const [input, setInput] = React.useState("");
     const [placeholder,setPlace] = React.useState("Enter candy machine ID");

    const handleSubmit = (e:any) => {
		e.preventDefault();
        let s = window.location.origin +  "/"+ input;
		window.location.href = s;
        setInput("");
        
        
    }
    
	const handlekeyPress = (e:any) => {
        if (e.key === 'Enter') {
		e.preventDefault();
        let s = window.location.origin  + "/"+ input;
		window.location.href = s;
		// window.location.href = s;
        setInput("");}
    }   
 
  return (
      <div  className="outermist">
            <div className="header">
                    <img src={justlogo} className="logo">
                    </img>
                    
                    <div className="header-right">
                        {/* <a className="active" href="#home">Home</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a> */}

                    </div>
            </div>
        
      <div className='container-input'>
            <div className='input-parent' >
                <div id="logo-wrapper">
                    <img src={mintantly} className="logo2">
                    </img>
                </div>
                
                <div>
                <input type="text"
                 placeholder={placeholder}
                 onFocus={(e) => setPlace('')}
                 onBlur={(e) => setPlace('Enter candy machine ID')}
                 onChange={(e) => setInput(e.target.value)}
                 onKeyPress={handlekeyPress}
                 onSubmit={handleSubmit}
                 className='input-box' 
                ></input>
                </div>
            </div>

     </div>
     </div>
  )
};

export default InputBox;