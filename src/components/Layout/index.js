import React from 'react';

import { Row, Col } from 'antd';

import ManiDash from './Maindash';
import RightSide from './Rightside';
import SideBar from './Sidebar';


function Layout(props) {
    return (
            <div className="App">
                <div className="AppGlass">
                    <Row>
                        <Col span={3}>
                            <SideBar />
                        </Col>
                        <Col span={15}>
                            <ManiDash />
                        </Col>
                        <Col span={6}>
                            <RightSide />
                        </Col>
                    </Row>
                </div>
            </div>
    );
}

export default Layout;