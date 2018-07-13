import React from 'react';
//import Button from '@material/react-button';
import AppBar from '../components/TopAppBar';

import { connect } from 'react-redux';

class Products extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <AppBar />
                </div>
            </div>


        )
    }
}

function mapStateToProps({credentials}) {
    return { credentials };
}

export default connect(mapStateToProps)(Products);
