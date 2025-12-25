<p align="center">
  <img src="https://dummyimage.com/1300x260/0a0a0a/00eaff&text=MyLayak+Kiosk+Prototype" width="100%">
</p>

<h1 align="center">MyLayak — Zero-Trust Eligibility Kiosk </h1>

<h3 align="center">
MyLayak is a zero-trust eligibility platform that lets citizens instantly discover government services they already qualify for — without exposing personal data.

</h3>

<p align="center">
  <img src="https://img.shields.io/badge/build-passing-00c853?style=flat-square">
  <img src="https://img.shields.io/badge/demo-prototype-blue?style=flat-square">
  <img src="https://img.shields.io/badge/license-MIT-yellow?style=flat-square">
</p>

---

# 📌 Overview
**MYLAYAK** is a **Proactive Eligibility Wallet** that fixes Malaysia’s biggest subsidy problem — eligibility doesn’t equal receiving. Today, millions of citizens qualify for support but miss out due to forms, scattered systems, and scams that make the process confusing and unsafe.

MyLayak changes this by combining **MyDigital ID steganographic QR verification**, **Soulbound Eligibility Tokens (SETs)**, and a **zero-trust security architecture** to instantly verify eligibility **without exposing any personal data**.

It consolidates verified eligibility attributes such as **B40**, **student**, **senior citizen**, and **STR-related status** into a single secure wallet, then automatically matches citizens to services they already qualify for.

**No applications. No repeated uploads. No fraud.**

**MyLayak makes benefits find the people — securely, instantly, and for everyone.**


**MYLAYAK makes benefits find the people securely, instantly, and for everyone.**

---
# ✨ Demo Video
https://drive.google.com/file/d/1uo1dbaDWmi28-qSwRvH4JtfDcJp1P7rc/view?usp=sharing

---

# ✨ Prototype Link
[https://drive.google.com/file/d/1QCTIazM7nm3ti-F-MBouihEPaNxLo0eW/view?usp=sharing](https://www.figma.com/make/CgL8fGinH1rMeIDd1dthQV/Government-Digital-Service-Kiosk?node-id=0-1&p=f)

---

# ✨ Security Architecture Visualization Link
https://mylayak-security-architecture.tiiny.site

---

# ✨ Key Features

## • **Form-Free, Instant Authentication**
Authenticate via **MyKad tap/insert** or **MyDigital ID QR scan** — no forms, no document uploads.

---

## • **Eligibility Wallet (SET-Based)**
Displays government-issued, non-sensitive eligibility tokens such as:
- Student  
- B40 Household  
- Senior Citizen  
- Regional Eligibility  

---

## • **Automatic Service Matching**
MyLayak automatically identifies services the citizen is **pre-qualified** for using verified SETs.

---

## • **One-Click Activation with Clear Consent**
Only eligibility attributes are shared.  
**No IC number, income, documents, or personal info** are ever displayed or transmitted.

---

## • **Complete Kiosk Flow Prototype**
Welcome → Authentication → Eligibility Wallet → Services → Consent → Activation → Success → Auto Logout

---

# 🔐 Security Model (Simplified)
MyLayak follows a **strict Zero-Trust architecture**, where the kiosk is always treated as untrusted.

## • **Identity–Eligibility Separation**
- MyDigital ID handles all identity & biometric verification  
- MyLayak receives only a **hashed ID** and **non-sensitive eligibility tokens**

## • **Soulbound Eligibility Tokens (SETs)**
- Issued & signed by a government Oracle  
- Non-transferable and cannot be forged  

## • **Secure Communication**
Assumes modern encrypted channels suitable for future-safe deployments.

## • **No Data Stored on Kiosk**
No caching, no tokens, no personal information.  
Steganographic markers help prevent spoofed QR or fake kiosk screens.

**Result:** Even if the kiosk is compromised, identity remains protected and eligibility cannot be altered.

---

# 🚀 Running the Prototype

Install dependencies:


npm i
Start development server:
npm run dev

---

# 📘 License
MIT License.
