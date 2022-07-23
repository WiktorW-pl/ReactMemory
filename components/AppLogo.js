import React, { useState } from 'react';
import logo from '../img/logo.png';

import './AppLogo.css'

const AppLogo = (props) =>{
    return (
        <div className='App-Wrap'>
            <div className='App-Logo'>
                <img className='App-Logo__img' src={logo} alt='logo' />
                <h1 className='App-Logo__title'>ReactMemory</h1>
            </div>
        </div>
    )
}
export default AppLogo