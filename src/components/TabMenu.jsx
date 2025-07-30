import React, { useState } from 'react';

function TabMenu() {
    const [activeTab, setActiveTab] = useState('Tab1');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div>
            <div className="tab-buttons">
                <button className={activeTab === 'Tab1' ? 'active' : ''} onClick={() => handleTabClick('Tab1')}>Tab 1</button>
                <button className={activeTab === 'Tab2' ? 'active' : ''} onClick={() => handleTabClick('Tab2')}>Tab 2</button>
                <button className={activeTab === 'Tab3' ? 'active' : ''} onClick={() => handleTabClick('Tab3')}>Tab 3</button>
            </div>
            <div className="tab-content">
                {activeTab === 'Tab1' && <div>Content for Tab1<br />Content for Tab1<br />Content for Tab1</div>}
                {activeTab === 'Tab2' && <div>Content for Tab2<br />Content for Tab2</div>}
                {activeTab === 'Tab3' && <div>Content for Tab3</div>}
            </div>
        </div>
    )
}

export default TabMenu;