import "./Products.scss";
import Product from "./Product/Product.jsx";

const Products = ({products,headingText}) => {
    return <div className="products-container">
        <div className="sec-heading">{headingText}</div>
        <div className="products">
            {products.data.map((item)=>
                <Product
                    key={item.id}
                    id={item.id}
                    data={item.attributes}
                />
            )}

            {/* <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/> */}
        </div>
    </div>;
};

export default Products;