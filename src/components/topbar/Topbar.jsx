import React from 'react';
import "./topbar.css";
import logo from './logo.jpg';
import profile from './profile.jpeg';
import {Language, NotificationsNone, Settings} from '@material-ui/icons';


export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <img src={logo} alt="" className="logo"/>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                <img src={profile} alt="" className="topAvatar" />
            </div>
        </div>    
    </div>

  );
}
