import React from 'react';
import { useNavigate } from 'react-router-dom';
interface ButtonProps {
    btn_name: string;
    link: string;
}
const BorderButton : React.FC<ButtonProps> = ({ btn_name, link }) => {
    const navigate = useNavigate()
    const showLinkPage = ()=>{
        navigate(link)
    }
   
    return (
        <div className="btn">
            <button className="btn-border" onClick={showLinkPage}>{btn_name}</button>
        </div>
    );
};

export default BorderButton;