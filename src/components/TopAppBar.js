import React, { Component } from 'react';
import TopAppBar from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import AccountDetails from '../containers/AccountDetails';

import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';

class AppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAccountDetails: false
        };

        this.showAccountDetails = this.showAccountDetails.bind(this);
        this.closeAccountDetails = this.closeAccountDetails.bind(this);
    }

    showAccountDetails(e){
        e.preventDefault();
        this.state.showAccountDetails ? (this.setState({
            showAccountDetails: false
        }))
            : (
                this.setState({
                    showAccountDetails: true
                }, () => {
                    document.addEventListener('click', this.closeAccountDetails);
                })
            )
    }

    closeAccountDetails() {
        this.setState({
            showAccountDetails: false
        }, () => {
            document.removeEventListener('click', this.closeAccountDetails);
        })
    }

    render() {

        return (
            <div>
                <div>
                    <TopAppBar
                    className="mdc-toolbar mdc-toolbar--fixed"
                    title='MessageCloud SMS'
                    actionItems={[<MaterialIcon onClick={this.showAccountDetails} icon='account_circle'/>]}
                />
                </div>
                {this.state.showAccountDetails ? (
                    <div>
                        <AccountDetails />
                    </div>
                )
                : (
                    null
                    )}

            </div>
        );
    }
}

export default AppBar;