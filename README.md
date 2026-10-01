# TECH HABBA 2K26

Welcome to the TECH HABBA 2K26 Full Stack Application!

## Setup Instructions

### 1. Backend Setup

1. Open a terminal and navigate to the `backend` folder.
2. Ensure you have MongoDB installed and running locally, or have a MongoDB Atlas connection string.
3. Create a `.env` file in the `backend` folder with the following variables:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   ```
4. Start the backend server:
   ```bash
   cd backend
   npm install
   node index.js
   ```

### 2. Frontend Setup

1. Open another terminal and navigate to the `frontend` folder.
2. Create a `.env` file in the `frontend` folder with the following:
   ```env
   VITE_API_URL=http://localhost:5000/api
   VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
   ```
3. Start the Vite development server:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
4. Open the displayed local URL (`http://localhost:5174`) in your browser to view the application.

## Features

- **Frontend**: React, Vite, Tailwind CSS, Framer Motion, 3D extruded typography, dynamic particle backgrounds.
- **Backend**: Node.js, Express, MongoDB database, JWT authentication.
- **Payments**: Razorpay integration for event registrations.
- **Security**: Password hashing, secure routes, environment variables.
- **Design**: Premium high-contrast futuristic monochromatic 3D theme with reactive Acharya logo and interactive box highlights.

Enjoy exploring TECH HABBA 2K26!
