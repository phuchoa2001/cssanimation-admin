import React from 'react';
import Styles from './index.module.css';
import Card from '../../../components/Card';
import { Row } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import ListOrder from './ListOrder';
import { useSelector } from 'react-redux';
function Dashboard(props) {
    let history = useHistory();
    const Listorder = useSelector(state => state.Order.list);
    const Listuser = useSelector(state => state.Users.list);
    return (
        <>
            <h1 className="heading-text--large" >Dashboard</h1>
            <div className={Styles.ListCard}>
                <Row>
                    <Card
                        icon={<UserOutlined />} title="Ứng dụng" onClick={() => history.push("/apps")}
                        value={Listuser.length} color="linear-gradient(rgb(187, 103, 255) 0%, rgb(196, 132, 243) 100%)"
                        boxShadow="rgb(224 198 245) 0px 10px 20px 0px"
                    />
                    <Card
                        icon={<UserOutlined />} title="Hình ảnh" onClick={() => history.push("/images")}
                        value={Listorder.length} color="linear-gradient(rgb(255, 145, 157) 0%, rgb(252, 146, 157) 100%)"
                        boxShadow="rgb(253 192 199) 0px 10px 20px 0px"
                    />
                    <Card
                        icon={<UserOutlined />} title="Thể lọai" onClick={() => history.push("/categorys")}
                        value="6" color="linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255, 202, 113) -46.42%)"
                        boxShadow="rgb(249 213 155) 0px 10px 20px 0px"
                    />
                </Row>
            </div>
            <h3 className="heading-text">Ứng dụng</h3>
            <ListOrder />
        </>
    );
}
export default Dashboard;