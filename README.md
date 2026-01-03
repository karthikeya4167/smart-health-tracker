# 🏥 VitalSense - Smart Health Tracker

![MERN Stack](https://img.shields.io/badge/MERN-Full%20Stack-success)
![MongoDB](https://img.shields.io/badge/MongoDB-4.4-green)
![React](https://img.shields.io/badge/React-18.2-blue)
![Vite](https://img.shields.io/badge/Vite-Rapid%20Build-purple)

> A full-stack health monitoring dashboard that visualizes wearable device data, simulates real-time vitals, and generates clinical PDF reports for doctors.

## 📸 Screenshots

![Dashboard Screenshot](screenshot.png)
*(Note: Upload a screenshot of your dashboard to your repo and name it `screenshot.png` to see it here)*

## 🚀 Features

* **📊 Data Visualization:** Interactive line charts displaying correlation between Steps and Heart Rate using **Recharts**.
* **📄 Clinical Reports:** One-click PDF generation for doctor's appointments using **jsPDF**.
* **🔄 Data Simulation:** Custom Node.js script to simulate 30 days of realistic wearable device data (Heart Rate, Steps, Sleep).
* **⚡ High Performance:** Built with **Vite** for instant frontend loading.
* **🛡️ Robust Backend:** RESTful API built with **Express** and **MongoDB** for efficient data handling.

## 🛠️ Tech Stack

### Frontend
* **React.js** (Vite)
* **Recharts** (Data Visualization)
* **Axios** (API Requests)
* **Tailwind CSS** (Styling)

### Backend
* **Node.js & Express** (Server)
* **MongoDB & Mongoose** (Database)
* **Dotenv** (Environment Management)

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the Repository
```bash
git clone [https://github.com/karthikeya4167/smart-health-tracker.git](https://github.com/karthikeya4167/smart-health-tracker.git)
cd smart-health-tracker
```

### 2. Backend Setup
Navigate to the server folder and install dependencies:
```bash
cd server
npm install
```

**Configure Environment:**
Create a `.env` file in the `server` folder and add your MongoDB connection string:
```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/smarthealth?retryWrites=true&w=majority
```

**Seed the Database:**
Run the data simulator to generate 30 days of mock health data:
```bash
node simulator/device_mock.js
```

**Start the Server:**
```bash
node server.js
```
*You should see: `🚀 Server running on port 5000`*

### 3. Frontend Setup
Open a new terminal window, navigate to the client folder, and start the app:
```bash
cd client
npm install
npm run dev

## 📡 API Endpoints

| Method|      Endpoint        |           Description                               |
| `GET` | `/api/health/history` | Retrieves last 30 days of aggregated health metrics |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Karthik**
* GitHub: [@karthikeya4167](https://github.com/karthikeya4167)
