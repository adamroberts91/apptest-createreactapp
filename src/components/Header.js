import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AccountDetails from '../containers/AccountDetails';

class Header extends Component {
    constructor(props) {
        super(props);

        this.showHideMenu = this.showHideMenu.bind(this);
    }

    render() {
        return (
            <header className="mdc-toolbar mdc-toolbar--fixed">
                <div className="mdc-toolbar__row">
                    <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
                        <i className="side-menu-toggle material-icons mdc-toolbar__icon mdc-toolbar__menu-icon" style={{display: "none"}}>menu</i>
                        <Link to="/" className="mdc-toolbar__title" style={{padding: "6px 0 0 0"}}>
                            <img src="https://beta.messagecloud.com/img/brand-logos/logo-white.svg" style={{height: "35px", width: "auto"}} />
                        </Link>
                    </section>
                    <div className="mdc-toolbar__section mdc-toolbar__section--align-end mdc-toolbar__section--shrink-to-fit">
                        <i className="material-icons mdc-toolbar__icon toggle" onClick={handleMenuShow}>account_circle</i>
                        <AccountDetails id="account-details"/>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;