import React from 'react';
import { Link } from 'react-router-dom';
import MaterialIcon from '@material/react-material-icon';
import { connect } from 'react-redux';

class AccountDetails extends React.Component{
    render() {
        return (
            <div style={{backgroundColor: "white",marginTop: "45px", width: "240px", float: "right"}}>
                <ul className="mdc-menu__items mdc-list" role="menu">
                    <h1 className="mdc-typography--headline6" style={{padding: "0 16px 0 16px"}}>
                        <b>{this.props.credentials.username}</b>
                    </h1>
                    <li className="mdc-list-divider" role="separator"/>
                        <Link to="/" className="mdc-list-item">
                            <MaterialIcon icon="exit_to_app" style={{marginRight: "32px"}}/>
                            Logout
                        </Link>
                </ul>
            </div>
        )
    }
}



function mapStateToProps({credentials}) {
    return { credentials };
}

export default connect(mapStateToProps)(AccountDetails);
