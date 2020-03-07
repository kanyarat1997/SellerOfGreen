import React from 'react';
import './styles.scss';
import { resources } from '../../resource';

const List: React.FunctionComponent<any> = ({ className = 'listStyles', action }) => (
    <div className='wrapper'>
        <div className={className}>
            {resources.map((resource) => (
                <div className="list">
                    <img src={resource.image_url} alt="Avatar" className='img-list-page' />
                    <div className="container">
                        <span>{resource.name}</span>
                        <p className='list-description'>{resource.description}</p>
                    </div>
                    <div>
                        <p className='price'>฿{resource.price}</p>
                        <button className='btndeatil' id={resource._id} onClick={action}>Detail</button>
                    </div>

                </div>
            ))}
        </div>
    </div>
);

export default List;