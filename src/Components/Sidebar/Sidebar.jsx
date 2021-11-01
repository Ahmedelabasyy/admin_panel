import React from 'react';
import { LineStyle, Timeline, TrendingUp, PeopleOutline, Storefront, AttachMoney, Equalizer, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutlineOutlined, Report } from '@material-ui/icons';

import './sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <Link to="/" className="link">
                            <li className="sidebarListItem">
                                <Timeline className="sidebarIcon"/>
                                Analytics
                            </li>
                        </Link>
                        <Link to="/product/:prductid" className="link">
                            <li className="sidebarListItem">
                                <TrendingUp className="sidebarIcon"/>
                                Sales
                            </li>
                        </Link>
                    </ul>
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <PeopleOutline className="sidebarIcon" />
                                Users
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <Storefront className="sidebarIcon"/>
                                Products
                            </li>
                        </Link> 
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon"/>
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <Equalizer className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcon"/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcon"/>
                            Messages
                        </li>
                    </ul>
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutlineOutlined className="sidebarIcon" />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon"/>
                            Report
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
