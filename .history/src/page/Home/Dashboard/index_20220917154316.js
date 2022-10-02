import React from 'react';

import ListOrder from './ListOrder';
function Dashboard(props) {
    return (
        <>
            <h1 className="heading-text--large" >Dashboard</h1>
            <h3 className="heading-text">Ứng dụng</h3>
            <ListOrder />
        </>
    );
}
export default Dashboard;