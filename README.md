# 🌍 World Atlas - MERN Stack Project

The **World Atlas** is an interactive full-stack web application that provides detailed information about **every country in the world**. It allows users to search, sort, and explore countries, as well as submit messages and feedback, which can be managed via an **admin panel**.

---

## ✨ Features

### 🔍 Country Information
- 📜 View details of all countries worldwide (name, capital, population, region, etc.)  
- 🔎 **Search** countries by name  
- ↕ **Sort** countries alphabetically  

### 📨 Message Management
- 🖊 Users can send messages via a form  
- 📋 Admin can view all submitted messages  
- ✏️ Update or ❌ delete messages from the admin panel  

### 💬 Feedback System
- 📝 Feedback form for user opinions & suggestions  
- 📊 Admin can view and manage all feedback entries  

### 📱 Responsive Design
- Works smoothly on **desktop, tablet, and mobile devices**  

---

## 🛠 Tech Stack

- **Frontend:** ⚛ React.js, Axios  
- **Backend:** 🟢 Node.js, Express.js  
- **Database:** 🍃 MongoDB (Mongoose ODM)  
- **Authentication:** 🔐 JWT, bcrypt (for admin login)  
- **Validation:** ✅ Zod 

---

## 🧰 Tools & Practices

- 📦 **dotenv** – Manage environment variables  
- 🔄 **CORS** – Secure API communication  
- 📜 **Morgan** – API request logging  
- 📏 **REST API Standards** – Clean, scalable design  
- ⚠ **Centralized Error Handling** – Consistent error responses  

---
## 📂 Folder Structure

World-Atlas/
│-- frontend/ # React app
│-- backend/ # Node.js API
│-- controllers/ # Business logic
│-- models/ # MongoDB schemas
│-- routes/ # API routes
│-- middlewares/ # Auth & validation middleware
│-- utils/ # Helper functions
│-- server.js # Backend entry point


---

## 🚀 Installation & Usage

```bash
# Clone the repo
git clone https://github.com/username/World-Atlas.git

# Navigate to project
cd World-Atlas

# Install dependencies for backend
cd backend
npm install

# Install dependencies for frontend
cd ../frontend
npm install

# Start backend server
npm run dev  # inside backend folder

# Start frontend server
npm start    # inside frontend folder





