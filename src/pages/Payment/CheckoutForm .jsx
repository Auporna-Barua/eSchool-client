import { CardElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const CheckoutForm = ({ course }) => {
    const { user } = useContext(AuthContext);
    const { displayName, email } = user;
    const { price, _id: id } = course;
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [loading, setLoading] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const token = localStorage.getItem('access-token');
    const [paymentSuccess, setPaymentSuccess] = useState("");
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (price > 0) {

            fetch("https://e-school-mu.vercel.app/create-payment-intent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${token}`,

                },
                body: JSON.stringify({ price }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.clientSecret) {
                        setClientSecret(data.clientSecret);
                    }
                });
        }
    }, [price]);
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setCardError(error?.message);

        } else {
            setCardError("");
        }
        // confrim card payment
        setLoading(true);

        const { paymentIntent, error: intentError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: email,
                        name: displayName
                    },
                },
            });
        if (intentError) {
            setCardError(intentError?.message);
            setPaymentSuccess("");
            setLoading(false);
            console.log(intentError);
        }
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                ...course,
                studentEmail: user?.email,
                transactionId: paymentIntent.id,
                date: new Date(),
                paymentStatus: 'paid',

            }
            const status = "paid";
            const url = `https://e-school-mu.vercel.app/enroll/paid/${id}`;
            fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${token}`,

                },
                body: JSON.stringify(payment),
            }).then((res) => res.json()).then((data) => {
                if (data) {
                    setCardError("");
                    setLoading(false);
                    Swal.fire({
                        icon: 'success',
                        text: 'Congrats! Your Payment is completed',
                    })
                    setPaymentSuccess(`Congrats! Your Payment is completed`);
                    event.target.reset();
                }
            });

        }
    };
    return (
        <div className='border-2 border-red-400 p-10 rounded-lg shadow-md'>

            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe} className='mt-10 btn bg-[#FF7703] text-white px-10' >
                    Pay Now
                </button>
                <p className='text-red-500'>{cardError}</p>
                <p className='text-green-400'>{paymentSuccess}</p>
            </form>
        </div>
    );
};

export default CheckoutForm;