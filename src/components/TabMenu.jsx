import React, { useState, useEffect } from 'react';

function TabMenu() {
    const [activeTab, setActiveTab] = useState('Tab1');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    // 서버와 클라이언트에서 동일한 초기 상태 보장
    const currentActiveTab = isClient ? activeTab : 'Tab1';

    return (
        <div>
            <div className="tab-buttons">
                <button 
                    className={currentActiveTab === 'Tab1' ? 'active' : ''} 
                    onClick={() => handleTabClick('Tab1')}
                    disabled={!isClient}
                >
                    Tab 1
                </button>
                <button 
                    className={currentActiveTab === 'Tab2' ? 'active' : ''} 
                    onClick={() => handleTabClick('Tab2')}
                    disabled={!isClient}
                >
                    Tab 2
                </button>
                <button 
                    className={currentActiveTab === 'Tab3' ? 'active' : ''} 
                    onClick={() => handleTabClick('Tab3')}
                    disabled={!isClient}
                >
                    Tab 3
                </button>
            </div>
            <div className="tab-content">
                {currentActiveTab === 'Tab1' && <div>Content for Tab1<br />Content for Tab1<br />Content for Tab1</div>}
                {currentActiveTab === 'Tab2' && <div>Content for Tab2<br />Content for Tab2</div>}
                {currentActiveTab === 'Tab3' && <div>Content for Tab3</div>}
            </div>
        </div>
    )
}

export default TabMenu;