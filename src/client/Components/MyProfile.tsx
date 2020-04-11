
import React, { useState } from 'react';
import { IAppProps } from '../App';
import { Tabs, Tab } from 'react-bootstrap';


const ControlledTabs: React.FC<IAppProps> = MyProfile => {
    const [key, setKey] = useState('home');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k:any) => setKey(k)} >

            <Tab eventKey="home" title="Home">
                {/* component right here */}
            </Tab>
            <Tab eventKey="profile" title="Profile">

            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
                
            </Tab>
        </Tabs>
    );
}
export default ControlledTabs;
