// import { useParams } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
import "./Category.scss";
const Category = () => {
    // const { id } = useParams();
    // const { data } = useFetch(
    //     `/api/products?populate=*&[filters][categories][id]=${id}`
    // );
    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                    Category Page
                </div>
                <Products/>
            </div>
        </div>
    );
};

export default Category;
