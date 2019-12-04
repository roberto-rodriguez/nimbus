const crypto = require("crypto");

module.exports = app => {
  app.get(
    "/VodafoneIEExternalWeb/displayCreditCardManagementForm.do",
    (req, res) => {
      var { authToken } = req.query;

      console.log("authToken = " + authToken);

      const key = "1BF03AB0CEF0AB4A7E793CE0";
      const iv = "C7D9769F6F261A41";

      const decipher = crypto.createDecipheriv("aes-192-cbc", key, iv);

      let decrypted = decipher.update(authToken, "base64");
      decrypted += decipher.final();

      var loginData = {};
      decrypted.split(",").forEach(param => parseParam(param, loginData));

      req.session["userName"] = loginData["MSISDN"];

      res.redirect("/");
    }
  );
};

function parseParam(paramString, obj) {
  var [key, value] = paramString.split("=");
  if (value) {
    obj[key] = value.split('"').join("");
  }
}
