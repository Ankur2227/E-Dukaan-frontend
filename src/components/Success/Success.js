import React from 'react'
import "./Success.css";
import { useNavigate } from 'react-router-dom';

function Success() {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className="sec-heading">Order Placed Successfully!</h1>
            <button onClick={()=> navigate("/")}>Continue Shopping</button>
        </div>
    )
}

export default Success;