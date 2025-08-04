import React, { useState, useEffect } from 'react';
// import Switch from "react-switch";

const CustomSwitch = ({ checked, onChange, disabled = false }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleClick = () => {
        if(!disabled && onChange && isClient) {
            onChange(!checked);
        }
    }

    // 서버와 클라이언트에서 동일한 초기 상태 보장
    const currentChecked = isClient ? checked : false;

    return (
        <div 
            onClick={handleClick}
            style={{
                width:'50px',
                height:'25px',
                backgroundColor: currentChecked ? '#2196F3' : '#ccc',
                borderRadius: '15px',
                position: 'relative',
                cursor: (disabled || !isClient) ? 'not-allowed' : 'pointer',
                transition:'background-color 0.2s',
                opacity: (disabled || !isClient) ? 0.6 : 1
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
                    transform: currentChecked ? 'translateX(25px)' : 'translateX(0)',
                    transition:'transform 0.2s',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}
            />
        </div>
    )
};

export default CustomSwitch;





