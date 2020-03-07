import React from 'react';
import { connect } from 'react-redux';
import Header from '../../shared/Header';
import Body from '../../shared/Body';
import Menu from '../../shared/Menu';
import Card from '../../shared/Card';
import List from '../../shared/List';
import Action from '../../reducers/action';
import history from '../../history';

class HomeComponent extends React.Component<{ updateId: any, updatePattern: any, global:any }, any> {

    onchange = (e: any) => {
        const id = e.target.id;
        this.setState({ show: id });
        this.props.updatePattern(id);
    }

    showDetail = (e: any) => {
        const id = e.target.id;
        this.props.updateId(id);
        history.push('/Detail');
    }

    render() {
        const show = this.props.global.showPattern;
        const showPattern = show === 'grid' ? <Card action={this.showDetail} /> : <List action={this.showDetail} />;
        return (
            <div className='home'>
                <Header title='This ia sn example of how to deverlopment product lists page from UI Design.'></Header>
                <Body>
                    <Menu action={this.onchange} />
                    <hr />
                    {showPattern}
                </Body>
            </div>
        )
    }
}

const mapStateToprops = (state: any) => ({
    global: state.updateGlobal

})

const mapDispatchToProps = (dispatch: any) => ({
    updateId: (value: any) => dispatch({ type: Action.DETAIL_ID, value }),
    updatePattern: (value: any) => dispatch({ type: Action.SHOW_PATTERN, value })
})

export default connect(mapStateToprops, mapDispatchToProps)(HomeComponent);
