import React from 'react';
//import Button from '@material/react-button';
import AppBar from './AppBar';
import Card, { CardMedia, CardPrimaryContent } from "@material/react-card";

import { connect } from 'react-redux';

class Products extends React.Component {
    render() {
        return (
            <div>
                <div style={{position: "absolute"}}>
                    <AppBar />
                </div>
                <div style={{marginTop: "45px"}}>
                    <div className="mdc-layout-grid">
                        <div className="mdc-layout-grid__inner">
                            <div className="mdc-layout-grid__cell--span-2" />
                            <div className="mdc-layout-grid__cell--span-4">
                                PLATFORM CARD GOES HERE
                            </div>
                            <div className="mdc-layout-grid__cell--span-4">
                                <Card className="product">
                                    <CardMedia imageUrl="https://beta.messagecloud.com/img/product-cover-images/smsc-cover.svg" contentClassName="product-cover-image" wide />
                                    <section className="mdc-card__supporting-text">
                                        <div className="product-header">
                                            <img src="https://beta.messagecloud.com/img/product-icons/send.svg" alt="Wholesale SMS Logo" className="pull-left" height="35px" width="auto" style={{marginRight: "10px"}}/>
                                            <div style={{display: "inline"}}>
                                            <span className="product-name mdc-typography--subtitle1" style={{textAlign: "center", margin: "auto"}}>Wholesale SMS</span>
                                            </div>
                                        </div>
                                    </section>
                                </Card>
                            </div>
                            <div className="mdc-layout-grid__cell--span-2" />
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

function mapStateToProps({credentials}) {
    return { credentials };
}

export default connect(mapStateToProps)(Products);
