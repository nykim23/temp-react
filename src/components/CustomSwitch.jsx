import React, { useState } from 'react';
// import Switch from "react-switch";

const CustomSwitch = ({ checked, onChange, disabled = false }) => {
    const handleClick = () => {
        if(!disabled && onChange) {
            onChange(!checked);
        }
    }

    return (
        <div 
            onClick={handleClick}
            style={{
                width:'50px',
                height:'25px',
                backgroundColor: checked ? '#2196F3' : '#ccc',
                borderRadius: '15px',
                position: 'relative',
                cursor: disabled ? 'not-allowed' : 'pointer',
                transition:'background-color 0.2s',
                opacity: disabled ? 0.6 : 1
            }}
        >
            <div
                style={{
                    width:'21px',
                    height:'21px',
                    backgroundColor:'#fff',
                    borderRadius:'50%',
                    position:'absolute',
                    top:'2px',
                    left:'2px',
                    transform: checked ? 'translateX(25px)' : 'translateX(0)',
                    transition:'transform 0.2s',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}
            />
        </div>
    )
};

export default CustomSwitch;





