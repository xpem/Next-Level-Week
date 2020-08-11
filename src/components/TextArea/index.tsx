import React, { TextareaHTMLAttributes } from 'react';
import './styles.css';


//passar o input attributes
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea  id={name} {...rest}></textarea>
        </div>
    );
}

export default Textarea;