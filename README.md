## 🚀 Live Demo

[![Vercel Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://fundamentals-project-ts-template.vercel.app)


# 🧳 Travel Shop — Frontend E‑Commerce Project

This project is a fully responsive, multi‑page e‑commerce frontend built using **HTML**, **TypeScript**, and **SCSS**, compiled and served through a modern development environment.  
It includes dynamic UI components such as sliders, product filtering, cart management, form validation, and interactive product details.

All styles and scripts are compiled **only after running the development server**, so the project must be launched using the provided npm scripts.

---

## 📚 Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Pages](#pages)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Development Notes](#development-notes)

---

## 🧾 Project Overview

The Travel Shop project simulates a modern online store for travel‑related products such as suitcases, backpacks, and accessories.  
It focuses on:

- Clean UI/UX  
- Responsive layouts  
- Dynamic interactions  
- Modular TypeScript logic  
- SCSS architecture  
- Cross‑browser compatibility (Chrome, Firefox, Edge, Safari)

The project is designed to be easy to run, easy to maintain, and easy to extend.

---

## ✨ Features

### 🛒 Shopping Cart
- Add/remove items  
- Update quantities  
- Clear cart  
- Persistent cart using LocalStorage  
- Dynamic totals (subtotal, shipping, total)  
- Checkout confirmation message  

### 📦 Product Details
- Tab navigation (Details / Reviews / Shipping Policy)  
- Dynamic content switching without page reload  
- Star rating interaction  
- Review form validation  

### 🧭 Navigation & UI
- Responsive header with cart counter  
- Mobile‑friendly layout  
- Smooth sliders with scroll‑snap  
- Safari‑specific fixes for flexbox, scrollbars, and image scaling  

### 📬 Contact Form
- Real‑time validation  
- Email format checking  
- Success/error messages without page reload  

---

## 📄 Pages

### **1. Home Page (`index.html`)**
- Hero section with image + text  
- “View All Items” button  
- Product slider  
- Promotional sections  

### **2. Catalog Page (`catalog.html`)**
- Displays all products  
- Category filtering  
- Sorting options  
- Add to cart buttons  

### **3. Product Details Page (`product-details.html`)**
- Large product image  
- Price, description, and specifications  
- Tab navigation:
  - **Details** — product description  
  - **Reviews** — interactive review form  
  - **Shipping Policy** — delivery information  

### **4. Cart Page (`cart.html`)**
- List of added products  
- Quantity controls  
- Remove item  
- Clear cart  
- Checkout button (shows confirmation message)  
- Dynamic totals  

### **5. Contact Page (`contact.html`)**
- Store information (location, email, phone, hours)  
- Contact form with:
  - Required field validation  
  - Email format validation  
  - Success/error messages  

---

## 🧰 Tech Stack

### **Languages**
- HTML5  
- SCSS (compiled to CSS)  
- TypeScript (compiled to JavaScript)

### **Tools**
- Node.js + npm  
- SCSS compiler  
- TypeScript compiler  
- Development server with live reload  

---

## 📦 Installation

Install all dependencies:

```bash
npm install
