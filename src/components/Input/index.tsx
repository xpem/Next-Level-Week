import React, { InputHTMLAttributes } from 'react';
import './styles.css';


//passar o input attributes
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest}></input>
        </div>
    );
}

export default Input;