import React from 'react';
//import Button from '@material/react-button';
import AppBar from '../containers/TopAppBar';

import { connect } from 'react-redux';

class Products extends React.Component {
    render() {
        return (
            <div>
                <AppBar />
            </div>

        )
    }
}

function mapStateToProps({credentials}) {
    return { credentials };
}

export default connect(mapStateToProps)(Products);
