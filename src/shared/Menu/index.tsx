import React from 'react';
import './styles.scss';

const Card: React.FunctionComponent<any> = ({ className = 'menuStyles', id, children, action }) => (
    <div className={className} id={id}>
        <button className='btnMenu img-grid' onClick={action} id='grid' />
        <button className='btnMenu img-list' onClick={action} id='list' />
        {children}
    </div >

);

export default Card;