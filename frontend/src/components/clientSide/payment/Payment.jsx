import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

function Payment() {
  const [stripePromises, setStripePromises] = useState(null);
  const [clientSecret, setClientSecret] = useState("");


  const stripePromise = loadStripe(
    "pk_test_51MTKUMLMeZdAfwyDOfAlzs72JPGHLo8eSfOussEfsTEwBuddWStMCMKqlh5zO0QnyUso0JEMNL50FNhi8Mx93u9Z00fl4A2TYb"
  );
  // setStripePromise(prom)
  useEffect(() => {
    axios.post("http://localhost:5252/lol", 
     {money: 90}
    ).then(async (result) => {
      fetch("http://localhost:5252/create-payment-intent", {
      method: "POST",
    }).then(async (result) => {
      console.log(result);
      var { clientSecret } = await result.json();
      console.log(clientSecret);
      setClientSecret(clientSecret);
      setStripePromises(stripePromise);
    });
    })
    // setStripePromise(prom)
  }, []);

  useEffect(() => {
    
  }, []);

 
  return (
    <div className="mt-24">
      <h1>React Stripe and the Payment Element</h1>

      <Elements stripe={stripePromises} options={{ clientSecret }}>
        <CheckoutForm  />
      </Elements>
    </div>
  );
}

export default Payment;
