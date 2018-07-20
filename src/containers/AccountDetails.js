import React from 'react';
import { Link } from 'react-router-dom';
import MaterialIcon from '@material/react-material-icon';
import { connect } from 'react-redux';

class AccountDetails extends React.Component{

    componentDidMount() {
        console.log("Test");
        console.log(this.props.credentials);
        console.log(this.props.credentials.length)
    }

    handleMenuShow() {

    }

    render() {

        if(!this.props.credentials.length) {
            return (
                <div className="mdc-menu mdc-menu--open" style={{backgroundColor: "white", width: "240px", position: "absolute", top: "48px", right: "0"}}>
                    <ul className="mdc-menu__items mdc-list" role="menu">
                        <Link to="/login" className="mdc-list-item">
                            <MaterialIcon icon="computer" style={{marginRight: "32px"}}/>
                            Login
                        </Link>
                    </ul>
                </div>
            )
        }

        return (
            <div style={{backgroundColor: "white", width: "240px", float: "right"}}>
                <ul className="mdc-menu__items mdc-list" role="menu">
                    <h1 className="mdc-typography--headline6" style={{padding: "0 16px 0 16px"}}>
                        <b>ADAMROBERTS</b>
                    </h1>
                    <li className="mdc-list-divider" role="separator"/>
                        <Link to="/" className="mdc-list-item">
                            <MaterialIcon icon="account_box" style={{marginRight: "32px"}}/>
                            Accounts
                        </Link>
                    <Link to="/login" className="mdc-list-item">
                        <MaterialIcon icon="computer" style={{marginRight: "32px"}}/>
                        Login
                    </Link>
                        <Link to="/accountslist" className="mdc-list-item">
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
