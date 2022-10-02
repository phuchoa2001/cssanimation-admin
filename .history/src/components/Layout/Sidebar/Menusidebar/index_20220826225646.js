import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { SideBarData } from './sidabarData';
import clsx from 'clsx';

import Styles from './index.module.css';
function MenuSideBar(props) {
    let location = useLocation();
    const { pathname } = location;
    return (
        <div className={Styles.MenuSideBar}>
            {SideBarData.map((item) =>
                <div className={clsx(Styles.MenuItem, {
                    [Styles.active]: pathname === item.path
                })}
                >
                    <Link className={Styles.href} to="/">
                        <div className={Styles.icon}>
                            {item.icon}
                        </div>
                        <span className={Styles.ItemText}>{item.title}</span>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default MenuSideBar;