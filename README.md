# 🔐 Custom Authentication Service

This is a Node.js, Express, and MongoDB-based **Custom Authentication Service** that provides:

- ✅ JWT-based authentication
- 🌐 Google OAuth2 login (via Passport.js)
- 🔒 Multi-Factor Authentication (MFA) using TOTP
- 🛂 Fine-grained role-based access control
- 📄 Modular folder structure and clean code

---

## 🚀 Features

- **User Registration & Login**
- **JWT Token Generation & Validation**
- **Multi-Factor Authentication (MFA)** with QR Code via Google Authenticator
- **Google OAuth2 Login**
- **Role-Based Authorization Middleware**
- **Secure Password Hashing** using bcrypt

---

## 🛠️ Tech Stack

- Node.js
- Express
- MongoDB (Mongoose)
- Passport.js (OAuth2)
- JWT (jsonwebtoken)
- Speakeasy (MFA)
- QRCode (MFA QR generator)
- Nodemailer (optional - for email OTP if needed)

---

## 📁 Folder Structure
custom-auth-service/
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── utils/
├── .env
├── app.js
├── package.json
└── README.md
