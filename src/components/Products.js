import React from 'react';
import AppBar from './AppBar';
import ProductCard from './ProductCard'

import { connect } from 'react-redux';

class Products extends React.Component {
    render() {

        const smscDescription = "Send messages at scale using our first-tier SMSC messaging system providing global connectivity and competitive rates.";
        const platformDescription = "Send and receive free Bulk SMS via a simple API for all your mobile communication, connectivity and marketing needs.";

        return (
            <div>
                <div style={{position: "absolute", top: "64px", right: "0"}}>
                    <AppBar />
                </div>
                <div style={{marginTop: "45px"}}>
                    <div className="mdc-layout-grid" style={{padding: "0px 16px 0px 16px"}}>
                        <div className="mdc-layout-grid__inner">
                            <div className="mdc-layout-grid__cell--span-3" />
                            <div className="mdc-layout-grid__cell--span-6" >
                                <h1 className="mdc-typography--headline5" style={{marginBottom: "0px"}}>Choose a Product</h1>
                            </div>
                            <div className="mdc-layout-grid__cell--span-3" />
                        </div>
                    </div>
                    <div className="mdc-layout-grid" style={{paddingTop: "16px"}}>
                        <div className="mdc-layout-grid__inner">
                            <div className="mdc-layout-grid__cell--span-3" />
                            <div className="mdc-layout-grid__cell--span-3">
                                <ProductCard
                                    mediaImageUrl="https://beta.messagecloud.com/img/product-cover-images/gateway-bulk-cover.svg"
                                    productHeaderImageUrl="https://beta.messagecloud.com/img/product-icons/send.svg"
                                    headerImageAlt="Gateway Bulk Logo"
                                    productName="Gateway Bulk"
                                    productDescription={platformDescription}
                                    redirectLink="/"
                                    docsUrl="https://docs.messagecloud.com/article/114-gateway"
                                />
                            </div>
                            <div className="mdc-layout-grid__cell--span-3">
                                <ProductCard
                                    mediaImageUrl="https://beta.messagecloud.com/img/product-cover-images/smsc-cover.svg"
                                    productHeaderImageUrl="https://beta.messagecloud.com/img/product-icons/send.svg"
                                    headerImageAlt="Wholesale SMS Logo"
                                    productName="Wholesale SMS"
                                    productDescription={smscDescription}
                                    redirectLink="/"
                                    docsUrl="https://docs.messagecloud.com/article/117-sending-a-message"
                                />
                            </div>
                            <div className="mdc-layout-grid__cell--span-3" />
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
