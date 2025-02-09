const restorWalletValidationSchema = require("../validation/restoreWallet");

module.exports = async (req, res) => {
  try {
    const type = req.query.type;

    // 12 word key-phrase
    if (type === "12") {
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
    }
    res.json(req.body);
  } catch (error) {
    console.log("ERROR RESTORING WALLET");
    console.log(error);
  }
};
