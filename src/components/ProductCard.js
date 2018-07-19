import React from 'react';
import Card, { CardMedia } from "@material/react-card";
import Button from '@material/react-button';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    return (
        <Card className="product">
            <CardMedia imageUrl={props.mediaImageUrl} contentClassName="product-cover-image" wide />
            <section className="mdc-card__supporting-text">
                <div className="product-header" style={{paddingTop: "15px"}}>
                    <img src={props.productHeaderImageUrl} alt={props.headerImageAlt} className="pull-left" height="35px" width="auto" style={{marginRight: "10px", float: "left"}}/>
                    <div style={{display: "inline"}}>
                        <span className="product-name mdc-typography--subtitle1" style={{textAlign: "center", margin: "auto"}}>{props.productName}</span>
                    </div>
                </div>
                <div className="product-description-container">
                    <p style={{textAlign: "initial"}}>{props.productDescription}</p>
                </div>
                <Link to={props.redirectLink}>
                    <Button children="Use service" style={{display: "block"}} />
                </Link>
                <a href={props.docsUrl} target="__blank" style={{textDecoration: "none"}}>
                    <Button children="View Docs" />
                </a>
            </section>
        </Card>
    )
};

export default ProductCard;