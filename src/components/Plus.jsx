import React, { useState } from 'react';

const Plus() {
    const [ count, setCount ] = useState(0);
    return (
        <div>
            <p>클릭 횟수 : {count}</p>
            <button onClick={() => setCount(count + 1)}>Click!</button>
        </div>
    );
}

export default Plus;