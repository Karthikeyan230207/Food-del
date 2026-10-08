🍔 **Food Delivery Website**

A Simple full-stack food delivery web application that allows users to browse food items, add products to their cart, place food orders and responsive interface.

The project is designed to simulate a real-world food ordering system with separate user and admin functionalities.

🚀 **Features**

👤 **User Features**

🔐 User registration and login
🍔 Browse available food items
🔎 Search and filter food items
🏷️ View food categories
🛒 Add food items to cart
➕ Increase/decrease item quantity
🗑️ Remove items from cart
💰 Automatically calculate cart total
📦 Place food orders

👨‍💼 **Admin Features**

🔐 Secure admin login
📊 Admin dashboard
🍔 Add new food items
✏️ Update food details
🗑️ Delete food items
📦 Manage food stock
✅ Enable/disable food availability

🛠️ **Tech Stack**

-> React.js
-> Backend
-> Node.js
-> Express.js
-> REST API
-> MongoDB Atlas
-> JWT Authentication

🏗️ **Project Architecture**
                 ┌─────────────────────┐
                 │       User          │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │   React Frontend    │
                 │      (Vite)         │
                 └──────────┬──────────┘
                            │
                         REST API
                            │
                            ▼
                 ┌─────────────────────┐
                 │   Express Backend   │
                 │      (Node.js)      │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │      MongoDB        │
                 │    / MongoDB Atlas  │
                 └─────────────────────┘

                 
                 
📂 **Project Structure**

Food-del/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── admin-frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
