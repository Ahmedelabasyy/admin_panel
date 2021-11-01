import React from 'react';
import { NotificationsNone, Settings, Language } from '@material-ui/icons';

import './Topbar.css';
import Image from '../../assets/logo.png';
import { Badge } from '@material-ui/core';


function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <div className="logo">
                        <img src={Image} alt="logo" />
                        <span>Shopit</span>
                    </div>
                </div>
                <div className="topRight">
                    <div className="barIconContainer">
                        <Badge badgeContent={2} color="secondary">
                            <NotificationsNone />
                        </Badge>
                    </div>
                    <div className="barIconContainer">
                        <Badge badgeContent={2} color="secondary">
                            <Language />
                        </Badge>
                    </div>
                    <div className="barIconContainer">
                        <Settings />
                    </div>
                    <img src="https://evolveum.com/wp-content/uploads/photo-gallery/thumb/veronika-latkova_800_800.jpg" alt="Avatar" className="imgAvatar"/>
                </div>
            </div>
        </div>
    )
}

export default Topbar;
