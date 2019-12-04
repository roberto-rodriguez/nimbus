const stripe = require("stripe")("sk_test_QiBWaKgWv9D7BbFVDXbkmM9e00ViuCF2Tg");

module.exports = app => {
  app.get("/stripe/charge/:token", async (req, resp) => {
    var { token } = req.params;
 
    var charge = {
      source: token,
      amount: 100,
      currency: "usd"
    };

    stripe.charges.create(charge, (stripeError, stripeResponse) => {
      if (stripeError) { 
        resp.status(500).send({ error: stripeError });
      } else { 
        resp.status(200).send({ error: stripeResponse });
      }
    });
  });
};
