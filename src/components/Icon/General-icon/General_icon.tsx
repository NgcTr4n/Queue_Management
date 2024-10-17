import React from 'react';
interface IconProps {
    icon: string;
    bg_color: string;
}
const General_icon : React.FC<IconProps> = ({ icon, bg_color }) => {

    return (
        <div className="bg-general-icon">
        <div className="bg-icon" style={{ background: bg_color }}>
          <div className="general-icon">
                {icon}
          </div>
        </div>
      </div>
    );
};

export default General_icon;