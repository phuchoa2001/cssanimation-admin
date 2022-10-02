import React from 'react';
import { Empty } from 'antd';

import Styles from './index.module.css';
import { useNotification } from './queries/queries';
import Upload from './Upload';
function RightSide(props) {
    const { data, isLoading } = useNotification({});
    console.log("data", data?.data?.data, "isLoading", isLoading)
    return (
        <div className={Styles.RightSide}>
            <h3 className="heading-text">Updates</h3>
            <div className={Styles.listUpload}>
                {!isLoading ?
                    data?.data?.data.map((item, index) =>
                        <Upload desc={item.desc} name={item.name} key={item["_id"]} />
                    ) : <Empty description="Không có thông báo" />
                }
                {!isLoading ?
                    data?.data?.data.map((item, index) =>
                        <Upload desc={item.desc} name={item.name} key={item["_id"]} />
                    ) : <Empty description="Không có thông báo" />
                }
                {!isLoading ?
                    data?.data?.data.map((item, index) =>
                        <Upload desc={item.desc} name={item.name} key={item["_id"]} />
                    ) : <Empty description="Không có thông báo" />
                }
                {!isLoading ?
                    data?.data?.data.map((item, index) =>
                        <Upload desc={item.desc} name={item.name} key={item["_id"]} />
                    ) : <Empty description="Không có thông báo" />
                }
            </div>
        </div>
    );
}

export default RightSide;