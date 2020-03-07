import React from 'react';
import './styles.scss';
import { resources } from '../../resource';

function limit(text: string, length: number) {
    return (text.length >= length) ? text.substring(0, length) + '..' : text;
}



const Card: React.FunctionComponent<any> = ({ className = 'cardStyles', action }) => (
    <div className='wrapper'>
        <div className={className}>
            {resources.map((resource) => (
                <div className="card">
                    <img src={resource.image_url} alt="Avatar" className='img' />
                    <div className="container">
                        <div className='title'>
                            <img src={resource.brand_info.url} alt="Avatar" className='logo' />
                            <span>{limit(resource.name, 25)}</span>
                        </div>
                        <p className='description'>{limit(resource.description, 50)}</p>
                        <p className='price'>฿{resource.price}</p>
                        <button className='btndeatil' id={resource._id} onClick={action}>Detail</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Card;