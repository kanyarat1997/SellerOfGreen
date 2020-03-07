import React from 'react';
import { connect } from 'react-redux';
import Header from '../../shared/Header';
// import Body from '../../shared/Body';
import './styles.scss';
import { resources } from '../../resource';

class DetailComponent extends React.Component<{ global: any }, any> {

    render() {
        let resource: any = '';
        const id = this.props.global.detailId;
        for (const index in resources) {
            resource = resources[index]._id === id ? resources[index] : resource;
        }
        return (
            <div className='Detail'>
                <Header title='This ia sn example of how to deverlopment product lists page from UI Design.'></Header>
                <br /><br />
                <div><a className='Menu-detail' href='/'>Home</a> / {resource.name} </div>
                <hr />
                {
                    id && <div className='grid-Third'>
                        <img src={resource.image_url} alt="Avatar" className='img-detail' />
                        <div className="container detail-margin">
                            <span>{resource.name}</span>
                            <p className='detail-description'>{resource.description}</p>
                            <p className='price left'>฿{resource.price}</p>
                        </div>
                    </div>
                }

            </div>
        )
    }
}

const mapStateToprops = (state: any) => ({
    global: state.updateGlobal

})

export default connect(mapStateToprops)(DetailComponent);
