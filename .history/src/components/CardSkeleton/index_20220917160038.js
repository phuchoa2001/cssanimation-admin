import React from 'react';

import { Col, Statistic } from 'antd';
import LoadingSkeleton from '../form/LoadingSkeleton';

import Styles from './index.module.css';
function Card({ icon, title, onClick, value, color, boxShadow }) {
    return (
        <Col xxl={{ span: 8 }} xl={{ span: 8 }} lg={{ span: 24 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}
            onClick={onClick}
        >
            <div className={Styles.wrapper} style={{
                background: color,
                boxShadow: boxShadow
            }}>
                <div className={Styles.content}>
                    <LoadingSkeleton height={22} width={50} />
                    <div style={{ marginTop: 12 }}>
                        <LoadingSkeleton height={32} width={50} />
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default Card;