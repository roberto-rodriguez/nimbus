const serverProxy = require("../utils/serverProxy");

module.exports = app => {
  app.get("/card/list", async (req, resp) => {
    const UserName = req.session["userName"];

    var response = await serverProxy.post(
      "/Web/Web_PaymentDevicesOnFileByUserName",
      {
        UserName
      }
    );

    resp.send(response.data["Web_PaymentDevicesOnFileByUserName"]);
  });

  app.post("/card/create", async (req, resp) => {
    const UserName = req.session["userName"]; 

    var response = await serverProxy.post(
      "/Web/Web_PaymentDeviceChargeRegister",
      {
        ...req.body,
        UserName,
        ThreeDSRequestKey: ''//TODO PUE REAL VALUES HERE 
      }
    );

    resp.send(response.data);
  });

  
  app.get("/card/remove/:PaymentDeviceOnFileID", async (req, resp) => { 
    var {PaymentDeviceOnFileID} = req.params;

    var response = await serverProxy.post(
      "/Web/Web_PaymentDeviceOnFileRemove",
      {
        PaymentDeviceOnFileID 
      }
    );

    resp.send(response.data);
  });
};
