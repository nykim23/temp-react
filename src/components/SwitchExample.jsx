import React, { useState, useEffect } from 'react';
import CustomSwitch from './CustomSwitch';

const SwitchExample = () => {
    const [ checked, setChecked ] = useState(false);
    const [ isClient, setIsClient ] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleChange = (checked) => {
        if (isClient) {
            setChecked(checked);
        }
    };

    return (
        <label className="flex">
            <span className="rounded p-2 bg-gray-500 text-gray-200">토글버튼 왼쪽 오른쪽</span>
            <CustomSwitch onChange={handleChange} checked={isClient ? checked : false} disabled={!isClient} />
        </label>
    )
}

export default SwitchExample;