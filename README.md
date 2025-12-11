<img src="https://dummyimage.com/1300x260/0a0a0a/00eaff&text=MyLayak+Kiosk+Prototype" width="100%" />
<p align="center"> <a><img src="https://img.shields.io/badge/build-passing-00c853?style=flat-square"></a> <a><img src="https://img.shields.io/badge/demo-prototype-blue?style=flat-square"></a> <a><img src="https://img.shields.io/badge/license-MIT-yellow?style=flat-square"></a> </p>
MyLayak — Zero-Trust Eligibility Kiosk (Prototype)

<p align="center">
  <img src="https://dummyimage.com/1300x260/0a0a0a/00eaff&text=MyLayak+Kiosk+Prototype" width="100%">
</p>

<h1 align="center">MyLayak — Zero-Trust Eligibility Kiosk (Prototype)</h1>

<h3 align="center">
A frictionless, form-free public service experience powered by MyDigital ID
</h3>

<p align="center">
  <img src="https://img.shields.io/badge/build-passing-00c853?style=flat-square">
  <img src="https://img.shields.io/badge/demo-prototype-blue?style=flat-square">
  <img src="https://img.shields.io/badge/license-MIT-yellow?style=flat-square">
</p>

---



MyLayak is a UI/UX prototype demonstrating how citizens can securely check and activate public services using MyDigital ID.
It showcases a form-free, frictionless eligibility experience powered by Soulbound Eligibility Tokens (SETs).

No real backend, identity data, or government systems are connected.
This is strictly a concept and interaction prototype.

✨ Key Features
• Form-Free, Instant Authentication

Citizens authenticate via MyKad tap/insert or MyDigital ID QR scan — no forms, no uploads.

• Eligibility Wallet (SET-Based)

Displays government-issued, non-sensitive eligibility tokens such as:

Student

B40 Household

Senior Citizen

Regional Eligibility

• Automatic Service Matching

MyLayak identifies services the citizen is pre-qualified for using verified SETs.

• One-Click Activation with Clear Consent

Only eligibility attributes are shared.
No IC number, income, or documents are ever displayed or transmitted.

• Complete Kiosk Flow Prototype

Welcome → Authentication → Eligibility Wallet → Services → Consent → Activation → Success → Auto Logout.

🔐 Security Model (Simplified)

MyLayak follows a strict Zero-Trust architecture.
The kiosk is treated as untrusted at all times.

• Identity–Eligibility Separation

MyDigital ID handles all identity & biometric verification

MyLayak receives only a hashed ID and non-sensitive eligibility tokens

• Soulbound Eligibility Tokens (SETs)

Issued and signed by a government Oracle

Non-transferable and cannot be forged

• Secure Communication

All kiosk–backend interactions assume modern, encrypted channels suitable for future-safe deployments.

• No Data Stored on Kiosk

No caching, no tokens, no personal info.
Steganographic markers help prevent fake QR screens or spoofed kiosks.

Result: Even if the kiosk is compromised, identity remains protected and eligibility cannot be altered.

🚀 Running the Prototype

Install dependencies:

npm i


Start development server:

npm run dev

📁 Project Status

This repository contains UI/UX screens only.
It is intended for demonstration, pitching, and concept validation — not production deployment.

📘 License

MIT License.
