import React, { useState, useCallback, memo } from 'react';

const Counter = () => {
    const [ count, setCount ] = useState(0);
    const [ message, setMessage ] = useState('');

    //useCallback으로 함수 최적화
    const increment = useCallback(() => {
        setCount(prev => prev + 1);
        setMessage(`${count + 1}번 클릭!`);
    }, []);

    const decrement = useCallback(() => {
        setCount(prev => prev -1);
        setMessage(`${count - 1}번 클릭`);
    }, [count]);

    const reset = useCallback(() => {
        setCount(0);
        setMessage('카운트가 리셋!');
    }, []);

    return (
        <div className="max-w-md mx-auto mt-8">
            <h1>카운터 앱(화살표 함수)</h1>

            <div className="text-center mb-6">
                <div className="text-6xl font-bold text-blue-600">
                    {count}
                </div>
                {message && (
                    <p className="text-sm text-green">
                        {message}
                    </p>
                )}
            </div>

            <CounterButtons
              onIncrement={increment}
              onDecrement={decrement}
              onReset={reset}
             />

             <div className="mt-4 text-xs text-gray-500">
                화살표 함수 + useCallback 최적화
             </div>
        </div>
    );
};

//2. props 타입을 명시적으로 받는 방식(TypeScript 스타일)
const CounterButtons = ({ onIncrement, onDecrement, onReset }) => {
    return (
        <div className="flex gap-2 justify-center">
            <button 
               onClick={onDecrement}
               className="px-4 py-2 bg-red-500 text-white">
                -1    
           </button>

           <button 
            onClick={onReset}
            className="px-4 bg-gray-500 text-white">
                리셋
            </button>

            <button 
                onClick={onIncrement}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
               +1 
            </button>
        </div>
    )
};

// 3. React.memo 로 레핑한 최적화된 컴포넌트
const OptimizedCounterButtons = memo(CounterButtons);

//4. 구조분해할당으로 props 받기
const StatusMessage = ({ count, message }) => (
    <div className="mt-4 p-3 bg-gray-50 rounded">
        <p className="text-sm">현재 카운트 : <strong>{count}</strong></p>
        {message && <p className="text-xs text-blue-600 mt-1">{message}</p>}
    </div>
);

// 5. default export (실무에서 가장 흔한 패턴)
export default Counter;