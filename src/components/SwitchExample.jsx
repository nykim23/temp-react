import React, { useState } from 'react';
import CustomSwitch from './CustomSwitch';


const SwitchExample = () => {
    const [ checked, setChecked ] = useState(false);

    const handleChange = (checked) => {
        setChecked(checked);
    };

    return (
        <label>
            <span>토글버튼 왼쪽 오른쪽</span>
            <CustomSwitch onChange={handleChange} checked={checked} />
        </label>
    )
}

export default SwitchExample;