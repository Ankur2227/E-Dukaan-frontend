import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg";

const Category = ({categories}) => {
    return <div className="shop-by-category">
        <div className="categories">   
            {categories.data.map((item)=>{
                return (
                    <div className="category">
                        <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt=""/>
                    </div>
                )
            })}
            {/* <div className="category">
                <img src={cat1} alt=""/>
            </div> */}
        </div>
    </div>;
};

export default Category;
