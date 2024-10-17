import React from 'react';
import './FilledButton.css'

interface ButtonProps {
    btn_name: string; 
}

const FilledButton: React.FC<ButtonProps> = ({ btn_name }) => {
    return (
        <div className="btn">
            <button className="btn-filled">{btn_name}</button>
        </div>
    );
};

export default FilledButton;
