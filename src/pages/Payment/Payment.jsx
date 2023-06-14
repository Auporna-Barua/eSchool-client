import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import Tittle from "../../components/metaTitle/Title";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm ";
// import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
    "pk_test_51Msq0jSHKrITcj7CmA8qIiBiH6IjRkK03h6wsNqz1Hx2CjmA2ysAn8T8DOAMMFIF1T2l84qMQtjSVKOkysENS7pn00Tr9UxOdk"
);
const Payment = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Tittle heading={"Payment Process"} />
            <h2 className="text-2xl text-start text-gray-500">Payment for: <span className="text-[#FF7703]">{data.name}</span> </h2>
            <h2 className="text-2xl text-start text-gray-500">Ammout of pay: <span className="text-[#FF7703] font-bold">{data.price}৳
            </span> </h2>
            <div className="card-body w-6/12 mx-auto">
                <Elements stripe={stripePromise}>
                    <CheckoutForm course={data} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;