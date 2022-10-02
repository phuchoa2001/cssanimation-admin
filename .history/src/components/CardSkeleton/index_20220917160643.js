import React from 'react';

import { Col } from 'antd';
import LoadingSkeleton from '../form/LoadingSkeleton';

import Styles from './index.module.css';
function CardSkeleton({ icon, title, onClick, value, color, boxShadow }) {
    return (
        <Col xxl={{ span: 8 }} xl={{ span: 8 }} lg={{ span: 24 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}
            onClick={onClick}
        >
            <div className={Styles.wrapper} style={{
                background: color,
                boxShadow: boxShadow
            }}>
                <LoadingSkeleton height={123} />
            </div>
        </Col>
    );
}

export default CardSkeleton;