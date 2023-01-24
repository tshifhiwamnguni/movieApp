const express = require("express");
const app = express();
const cors = require("cors"); //import cors module


const bodyParser = require('body-parser')

app.use(express.json()); 

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use("/", routes) // User endpoint API
const routes = require("./routes")
app.use(cors());
// Replace if using a different env file or config
const env = require("dotenv").config({ path: "./.env" });
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

app.use(express.static(process.env.STATIC_DIR));

// app.get("/", (req, res) => {
//   const path = resolve(process.env.STATIC_DIR + "/index.html");
//   res.sendFile(path);
// });

app.get("/config", (req, res) => {
  
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

let dollars

const addCash = (items) => {
   const amnt  = dollars
   console.log(amnt);
  return amnt;
};

app.post('/lol', async(req, res) => {
  const money = req.body;
  dollars = money.money
  console.log(money);
    res.send({lol:'yes'})

})

app.post("/create-payment-intent", async (req, res) => {


  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "EUR",
  
      automatic_payment_methods: { enabled: false },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

app.listen(5252, () =>
  console.log(`Node server listening at http://localhost:5252`)
);
