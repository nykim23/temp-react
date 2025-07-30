import React, { useState, useEffect, useRef } from 'react';

const Panel = ({ label, content, activeTab, index, activateTab }) => {
    const [ height, setHeight ] = useState(0);
    const innerRef = useRef(null);

    const isActive = activeTab === index;

    useEffect(() => {
        const timer = setTimeout(() => {
            if(innerRef.current) {
                const contentHeight = innerRef.current.scrollHeight;
                setHeight(contentHeight);
            }
        }, 333);

        return () => clearTimeout(timer);
    }, [content]);

    const innerStyle = {
        height: `${isActive ? height : 0}px`,
        overflow:'hidden',
        transition:'height 0.3s ease-out'
    };

    return (
        <div 
            className="panel  border-b border-gray-200"
            role="button"
            aria-expanded={isActive}
        >
            <button 
                className="panel__label w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-gray-900 transition-colors duration-200"
                role="tab"
                onClick={activateTab}
            >
                {label}
            </button>
            <div 
                className="panel__inner"
                style={innerStyle}
                aria-hidden={!isActive}
                ref={innerRef}
            >
                <div className="panel__content p-4 text-gray-700 bg-white">
                    {content}
                </div>
            </div>
        </div>
    );
};


const Accordion = ({ panels }) => {
    const [ activeTab, setActiveTab ] = useState(-1); //-1로 시작해서 모든 탭이 닫힌 상태

    const activateTab = (index) => {
        setActiveTab(prev => prev === index ? -1 : index);
    };

    return (
        <div className="accordion max-w-2xl mx-auto border border-gray-200 rounded-lg overflow-hidden" role="tablist">
            {panels.map((panel, index) => (
                <Panel
                    key={index}
                    activeTab={activeTab}
                    index={index}
                    {...panel}
                    activateTab={() => activateTab(index)}
                />
            ))}
        </div>
    )
}

export default Accordion;