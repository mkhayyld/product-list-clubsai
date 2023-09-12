import React from "react";
import "./ProductCard.css"
import "./ProductsList.css"
const ProductCard = (props) => {

    return (
        
        <div key={props.product.title+props.index.toString()}
        className="card" id="productcard">
            <img src = {props.product.image} alt="Product image"/>
            <div><strong className="producttitle">{props.product.title}</strong></div>
            <div className= "tagscontainer">{props.product.tags.map(tag => <div key={tag} className="tag">{tag}</div>)}</div>
        </div>
    );
}
export default ProductCard;