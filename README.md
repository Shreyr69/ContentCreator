# Full Stack Authentication Project

A modern full-stack authentication system with OTP verification, built with React, Node.js, Express, and MongoDB.

## Features

- 🔐 **Secure Authentication**: OTP-based signup with email verification
- 🎨 **Beautiful UI**: Modern design with Tailwind CSS
- 🌓 **Theme Support**: Light and dark mode with Context API
- 🔒 **Protected Routes**: JWT-based authentication with httpOnly cookies
- ⚡ **Fast & Modern**: Built with React and Vite

## Tech Stack

### Frontend

- React 19
- React Router DOM
- Axios
- Tailwind CSS
- Vite

### Backend

- Node.js
- Express
- MongoDB + Mongoose
- JWT (JSON Web Tokens)
- Cookie-based authentication

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (running locally or use MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:

   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your configuration:
   - Set `MONGO_URI` to your MongoDB connection string
   - Set `JWT_SECRET` to a secure random string
   - Set `PORT` (default: 5000)
   - Set `CLIENT_URL` (default: http://localhost:5173)

5. Start the backend server:
   ```bash
   npm start
   # or for development with nodemon:
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
FULLSTACKPROJECT/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   └── authController.js
│   │   ├── middleware/
│   │   │   └── authMiddleware.js
│   │   ├── models/
│   │   │   ├── user.js
│   │   │   └── otp.js
│   │   ├── routes/
│   │   │   └── authRoutes.js
│   │   ├── services.js/
│   │   │   └── authService.js
│   │   ├── utils/
│   │   │   ├── generateOtp.js
│   │   │   └── generateToken.js
│   │   └── server.js
│   ├── .env.example
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── Signup.jsx
│   │   │   │   └── OTPVerification.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Content.jsx
│   │   │   ├── ThemeContext.jsx
│   │   │   ├── ThemeProvider.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── contexts/
│   │   │   ├── AuthContext.jsx
│   │   │   └── AuthProvider.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

## API Endpoints

### Authentication Routes (`/api/auth`)

- `POST /signup/initiate` - Initiate signup with email (sends OTP)
- `POST /signup/verify` - Verify OTP and complete signup
- `POST /login` - Login with email and password
- `GET /me` - Get current user (protected)
- `POST /logout` - Logout user

## Usage

### Sign Up Flow

1. Enter your email address
2. Receive OTP (check console in development)
3. Enter OTP and complete registration with name and password
4. Automatically logged in and redirected to dashboard

### Login Flow

1. Enter email and password
2. Redirected to dashboard upon successful authentication

## Environment Variables

### Backend (.env)

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/your_database_name
JWT_SECRET=your_super_secret_jwt_key_here
CLIENT_URL=http://localhost:5173
```

## Security Features

- JWT tokens stored in httpOnly cookies
- Password hashing with bcrypt
- OTP expiration (configurable)
- Protected routes with authentication middleware
- CORS configuration for security

## Development

### Backend Development

```bash
cd backend
npm run dev
```

### Frontend Development

```bash
cd frontend
npm run dev
```

## License

MIT

## Author

Your Name
