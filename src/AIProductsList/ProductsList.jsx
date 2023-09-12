import "./ProductsList.css"
import { useState } from "react";
import Product from "./ProductClass"
import ProductCard from "./ProductCard";
import AddAProduct from "./AddProduct";
const ProductsList = (props) => {
    const [productsList, setProductsList] = useState([new Product({ title: "Product 1", tags: ["tag1", "tag2", "tag3", "tag4"] }), new Product({ title: "Product 2" }), new Product({ title: "Product 3" })]);

    const AddProduct = (ntitle, nimage, ntags) => {
        let newProduct = new Product({ title: ntitle, image: nimage, tags: ntags });
        setProductsList([...productsList, newProduct]);
    }
    return (
        <div className="list">
            {productsList.map((product, index) => <ProductCard product={product} index={index} key={product.title + index.toString()} />)}
            {productsList.length >= 20 ? undefined : <AddAProduct AddProduct={AddProduct} />}
        </div>
    );
}

export default ProductsList;