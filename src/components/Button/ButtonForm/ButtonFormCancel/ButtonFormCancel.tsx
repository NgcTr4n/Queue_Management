import React from 'react';
import '../ButtonForm.css'

interface ButtonProps {
    btn_name: string; 
}

const ButtonFormCancel: React.FC<ButtonProps> = ({ btn_name }) => {
    return (
        <div className="btn-form">
            <button className="btn-form-cancel">{btn_name}</button>
        </div>
    );
};

export default ButtonFormCancel;
