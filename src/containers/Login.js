import React, { Component } from 'react';
import Card, { CardMedia } from "@material/react-card";
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { smscCredentials } from '../actions/index';

const CREDITS_URL = 'https://dimbbxpg58.execute-api.eu-west-2.amazonaws.com/sms_app_credit_check_stage/check-credit?';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
    }



    onUsernameChange(e) {
        this.setState({
            username: e.target.value
        });

    }

    onPasswordChange(e) {
        this.setState({
            password: e.target.value
        });

    }

    onLoginSubmit(e) {
        e.preventDefault();
        let validCredits = 0;
        const username = this.state.username;
        const password = this.state.password;
        axios.get(`${CREDITS_URL}username=${username}&password=${password}`)
            .then((response => {
                validCredits = parseInt(response.data.credits, 10);
            }))
            .then(() => {
                if(validCredits !== -1){
                    this.props.smscCredentials(username, password, () => {
                        this.props.history.push('/products');
                    });
                } else {
                    console.log('Not logged in!');
                }
            })
            .then()
    }

    render() {
        return (
            <div className="mdc-layout-grid">
                <div className="mdc-layout-grid__inner">
                    <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-4" />
                    <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
                        <Card>
                            <CardMedia
                                className="mdc-card__media brand-logo-media"
                                imageUrl="https://beta.messagecloud.com/img/brand-logos/logo-white.svg"
                                wide
                            />
                            <section className="mdc-card__supporting-text" />
                            <form name="login" id="login" onSubmit={this.onLoginSubmit}>
                                <section className="mdc-card__supporting-text">
                                    <div
                                        className="mdc-text-field mdc-text-field--upgraded mdc-text-field--fullwidth"
                                        data-mdc-auto-init="MDCTextField"
                                    >
                                        <input type="text" className="mdc-text-field__input" id="username"
                                               autoFocus="autofocus" value={this.state.username} onChange={this.onUsernameChange}/>
                                        <label className="mdc-floating-label&#x20;mdc-floating-label--float-above" htmlFor="username">Username</label>
                                        <div className="mdc-line-ripple" />
                                    </div>
                                    <br />
                                    <div
                                        className="mdc-text-field mdc-text-field--upgraded mdc-text-field--fullwidth"
                                        data-mdc-auto-init="MDCTextField">
                                        <input type="password" name="password" id="password"
                                               className="mdc-text-field__input" value={this.state.password} onChange={this.onPasswordChange} />
                                        <label className="mdc-floating-label" htmlFor="password">Password</label>
                                        <div className="mdc-line-ripple" />
                                    </div>
                                    <br />
                                    <input type="submit" name="submit" id="login-submit"
                                           className="mdc-button&#x20;mdc-button--raised&#x20;mdc-button--primary&#x20;mdc-ripple-surface&#x20;mdc-card__action"
                                           value="login" />
                                </section>
                            </form>
                        </Card>
                    </div>
                    <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-4" />
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ smscCredentials }, dispatch);
}


export default connect(null, mapDispatchToProps)(Login);