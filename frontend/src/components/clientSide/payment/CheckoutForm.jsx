import { PaymentElement } from "@stripe/react-stripe-js";
import { useState,useRef } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";

export default function CheckoutForm(props) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
 

  function addMoney(){
    fetch("http://localhost:5252/lol", {
       method: "POST",
       body: {money: 80000}
     }).then(async (result) => {
 
     })
  }
    


  const handleSubmit = async (e) => {
    e.preventDefault();
    addMoney()

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/completion`,
        
      },
redirect:"if_required"
    });

  
    // if (error.type === "card_error" || error.type === "validation_error") {
    //   setMessage(error.message);
    // } else 
    if(paymentIntent && paymentIntent.status === "succeeded"){
      setMessage("payment status: " + paymentIntent.status);
      // console.log("ee ",error);
    }else{
      setMessage("payment status 2: unexpected error" + JSON.stringify(error));
    }

    setIsProcessing(false);
  };

  

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      
      <PaymentElement id="payment-element" />

      <button className="btn" disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text"  >
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
