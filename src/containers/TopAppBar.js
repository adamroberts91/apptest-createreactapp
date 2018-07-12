import React, { Component } from 'react';
import TopAppBar from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';

import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';

class AppBar extends Component {

    render() {


        return (
            <div>
                <TopAppBar
                    className="mdc-toolbar mdc-toolbar--fixed"
                    title='MessageCloud SMS'
                    navigationIcon={<MaterialIcon icon='menu' />}
                    actionItems={[<MaterialIcon key='item' icon='bookmark' />]}
                />
            </div>
        );
    }
}

export default AppBar;