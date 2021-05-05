const functions = require("firebase-functions");

const stripe = require("stripe")("sk_test_51IberbIQp5IbTP7QQPpQG1ngU6NUsnam06xtencPODa1ZpufB3z8meCBHaAYvhiNqoUvbKaTpVhJmW1sWS0Fsrqi00bzM2l9Y6");

exports.payWithStripe = functions.https.onRequest((request, response) => {
  stripe.charges
      .create({
        amount: request.body.amount,
        currency: request.body.currency,
        source: request.body.token,
      })
      .then((charge) => {
        response.send(charge);
      })
      .catch((err) => {
        console.log(err);
      });
});
