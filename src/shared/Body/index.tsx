import React from 'react';
import './styles.scss';

const Body: React.FunctionComponent<any> = ({ className = 'bodyStyles', id, children }) => (
    <div className={className} id={id}>
        { children }
    </div >

);

export default Body;