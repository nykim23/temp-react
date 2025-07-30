import React, { useState, useEffect } from 'react';
// import { X } from 'lucide-react';

const LayerPopup = ({ isOpen, onClose, title, children, width = '400px', height = 'auto' }) => {
    const [ isVisible, setIsVisible ] = useState(false);
    const [ shouldRender, setShouldRender ] = useState(false);

    useEffect(() => {
        if(isOpen) {
            setShouldRender(true);

            //DOM이 렌더링된 후 애니메이션 시작
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 50);

            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
            //애니메이션 완료후 언마운트
            const timer = setTimeout(() => {
                setShouldRender(false);
            }, 800); //전체 애니메이션 시간에 맞춰 조정

            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if(!shouldRender) return null;

    const handleBackdropClick = (e) => {
        if(e.target === e.currentTarget) {
            onClose();
        }
    }

    return (
        <div 
            className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-700 ease-out ${isVisible ? 'bg-black bg-opacity-50 backdrop-blur-sm' : 'bg-black bg-opacity-0'}`}
            onClick={handleBackdropClick}    
        >
            <div
                className={`bg-white rounded-lg shadow-2xl max-w-full max-h-full overflow-hidden transition-all duration-800 ease-out transform ${isVisible ? 'scale-100 opacity-100' : 'scale-85 opacity-0'}`}
                style={{
                    width, height, transformOrigin:'center center',
                    transitionTimingFunction:'cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
            >
                {/*헤더*/}
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                    <button 
                        onClick={onClose}
                        className="p-1 hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 hover:rotate-90"
                    >
                        {/* <X size={20} className="text-gray-500 transition-transform duration-300" /> */}
                    </button>
                </div>


                {/* 컨텐츠 */}
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    )
};

export default LayerPopup;