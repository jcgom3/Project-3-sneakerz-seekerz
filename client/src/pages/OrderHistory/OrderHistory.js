import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../../utils/queries";

function OrderHistory() {
    const { data } = useQuery(QUERY_USER);
    let user;

    if (data) {
        user = data.user;
    }

    return (
        <>
        <div className="container my-1">
            <Link to="/">
                ← Back to Products
            </Link>

            {user ? (
            <>
                <h4>Order History for {user.firstName} {user.lastName}</h4>
                {user.orders.map((order) => (
                    <div key={order._id} className="my-2">
                        <h4>{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</h4>
                        <div className="flex-row">
                            {order.products.map(({ _id, image, name, price }, index) => (
                            <div key={index} className="product-container height px-1 py-1">
                                <Link to={`/products/${_id}`} className='white-text'>
                                    <img
                                        alt={name}
                                        src={`/images/${image}`}
                                    />
                                    <p className='white-text'>{name}</p>
                                </Link>
                                <div className='price-div'>
                                    <span>${price}</span>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                ))}
            </>
            ) : null}

        </div>

        </>
    )

};

export default OrderHistory;