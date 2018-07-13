import React from 'react';
import { Link } from 'react-router-dom';
import MaterialIcon from '@material/react-material-icon';

class AccountDetails extends React.Component{
    render() {
        return (
            <div className="mdc-menu mdc-menu--open" style={{backgroundColor: "white",marginTop: "45px", width: "240px", float: "right !important"}}>
                <ul className="mdc-menu__items mdc-list" role="menu">
                    <h1 className="mdc-typography--headline6" style={{padding: "0 16px"}}>
                        <b>adamroberts</b>
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

export default AccountDetails;
