import {React, useState} from 'react';
import {TOTAL_SCREENS, GET_SCREEN_INDEX} from '../../../Utilities/commonUtils';
import ScrollService from '../../../Utilities/ScrollService';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Header.css';

const Header = () => {
    const [selectedScreen, setSelectedScreen] = useState(0);
    const [showHeaderOptions, setShowHeaderOptions] = useState(false);

    const updatedCurrentScreen = (currentScreen)=>{
        if(!currentScreen || !currentScreen.screenInView)
        return;
        let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
        if(screen < 0)
        return;
    }
    let

    return (
        <div>
            
        </div>
    );
};

export default Header;