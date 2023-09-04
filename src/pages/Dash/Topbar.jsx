import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import mavatar from "../../assets/css/images/mavatar.png";

const Topbar = () => {
    return (
        <div>
            <div className="topbar__container">
                <div className="topbar__content">
                    <div className="topbar__logo">
                        <img src="/public_assets/images/Thrida-01-02.png" alt="Thrida" className="thrida__logo" />
                    </div>
                    <div className="topbar__icons">
                        <NotificationsNoneIcon className="topbar__icon" />
                        <span className="topbar__span">2</span>
                    </div>
                    <div className="topbar__icons">
                        <LanguageIcon className="topbar__icon" />
                        <span className="topbar__span">2</span>
                    </div>
                    <div className="topbar__icons">
                        <SettingsIcon className="topbar__icon" />
                    </div>
                    <img src={mavatar} alt="avatar" className="topbar__avatar" />
                </div>
            </div>
        </div>
    );
}

export default Topbar;
