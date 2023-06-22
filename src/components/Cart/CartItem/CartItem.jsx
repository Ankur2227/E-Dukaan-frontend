import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";

import "./CartItem.scss";
const CartItem = () => {
    
    return (
        <div className="cart-products">
            <div className="search-result-item">
                <div className="image-container">
                    <img src={prod} alt=""/>
                </div>
                <div className="prod-details">
                    <span className="name">titeifjdsjsldfhlkdfnlksfnlkdfnfeofjosafjpwoafjole</span>
                    <MdClose
                        className="close-btn"
                    />
                        <div className="quantity-buttons">
                            <span>
                                -
                            </span>
                            <span>quantity</span>
                            <span>
                                +
                            </span>
                        </div>
                        <div className="text">
                            <span>quantity</span>
                            <span>x</span>
                            <span className="highlight">
                                <span>&#8377;</span>
                            </span>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default CartItem;
