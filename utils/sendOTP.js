const speakeasy = require("speakeasy");
const qrcode = require("qrcode");

exports.generateMFA = async (user) => {
  const secret = speakeasy.generateSecret({ name: `CustomAuthApp (${user.email})` });
  user.mfaSecret = secret.base32;
  await user.save();
  return await qrcode.toDataURL(secret.otpauth_url);
};

exports.verifyMFA = (user, token) => {
  return speakeasy.totp.verify({
    secret: user.mfaSecret,
    encoding: "base32",
    token,
    window: 1
  });
};
