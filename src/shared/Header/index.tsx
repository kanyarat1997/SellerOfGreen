import React from 'react';
import './styles.scss';

const Header: React.FunctionComponent<any> = ({ title = 'ftgh' }) => (
    <header className='headerStyles'>
        <h2 className='textStyles'> {title}</h2>
    </header >

);

export default Header;