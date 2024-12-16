# My To-Do App

A full-stack To-Do application built with a **React Native (Expo)** frontend and a **Node.js (Express)** backend, integrated with MongoDB for data storage. The app includes user authentication (login/register/logout) and CRUD operations for managing to-do items.

---

## Features

### Backend
- User authentication (register, login, logout).
- Protected API endpoints using session-based authentication.
- CRUD operations for managing to-do items.
- CORS enabled for communication with the frontend.

### Frontend
- Cross-platform React Native app built using Expo.
- Login and registration screens with persistent session management.
- Tabs for managing to-do items and logging out.
- Add, update, and delete to-do items with real-time updates.
- Styled using React Native's StyleSheet for a clean UI.

---

## Prerequisites

- **Node.js** (v18 or later)
- **Yarn** (preferred) or npm
- **MongoDB** (local or cloud instance)
- **Expo CLI**

---

## Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/anoopmaguluri/Todo-Backend.git
cd Todo-Backend
```

### 2. Backend Setup
Navigate to the Root directory:

#### Install Dependencies
```bash
npm install
```

#### Environment Variables
Create a `.env` file in the `backend` directory with the following:
```
MONGO_URI=mongodb+srv://Test:TestAdmin@<cluster>.mongodb.net/todo-db?retryWrites=true&w=majority
PORT=6001
```

Replace `<username>`: `Test` and `<password>`: `TestAdmin` with your MongoDB credentials.

#### Start the Server
```bash
yarn dev
```

The backend will run at `http://localhost:6001`.

---

### 3. Frontend Setup
```bash
git clone https://github.com/anoopmaguluri/Todo-App.git
cd Todo-App
```

Navigate to the frontend directory:
```bash
cd Todo-FrontEnd
```

#### Install Dependencies
```bash
yarn install
```

#### Fix Expo Dependencies
```bash
expo install @react-native-async-storage/async-storage react-native-gesture-handler react-native-safe-area-context react-native-screens
```

#### Start the Expo Development Server
```bash
yarn start

"start": "expo start",
"android": "expo start --android",
"ios": "expo start --ios",
"web": "expo start --web",
"test": "jest --watchAll"
```

### Login Details
`{"username":"test","password":"admin"}`

Choose a platform (Android, iOS, or Web) to run the app.

---

## Project Structure

### Backend (`/backend`)
- **`src/controllers`**: Logic for handling authentication and to-do APIs.
- **`src/models`**: MongoDB models for `User` and `Todo`.
- **`src/routes`**: API endpoints for authentication and CRUD operations.
- **`src/server.ts`**: Express server setup and middleware configuration.

### Frontend (`/frontend`)
- **`app/(auth)`**: Screens for login and registration.
- **`app/(tabs)`**: To-Do and logout screens in the tab navigator.
- **`constants`**: API utility functions for authentication and to-do operations.
- **`_layout.tsx`**: Handles routing and navigation between screens.

---

## Usage

### Authentication
1. **Register**: Create a new user account.
2. **Login**: Authenticate and gain access to the To-Do app.
3. **Logout**: End the session.

### To-Do Management
- **Add**: Enter a new to-do item.
- **Update**: Edit an existing to-do item.
- **Delete**: Remove a to-do item.

---

## API Endpoints

### Authentication
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Login a user and start a session.
- `POST /api/auth/logout`: Logout the user.

### To-Do
- `GET /api/todos`: Fetch all to-do items for the logged-in user.
- `POST /api/todos`: Create a new to-do item.
- `PUT /api/todos/:id`: Update an existing to-do item.
- `DELETE /api/todos/:id`: Delete a to-do item.

---

## Troubleshooting

### Common Errors
- **CORS Issues**: Ensure the backend allows requests from the frontend origin.
- **Session Management**: Verify cookies are sent with requests (use `withCredentials: true` in Axios).
- **Expo CLI Errors**: Use the new local CLI with `npx expo`.

### Logs
- **Backend**: Check terminal output for API errors.
- **Frontend**: Use Expo's debugging tools or browser console for web.

---

## Screenshots

### Login Screen
![Login Screen](/login.png)

### Register Screen
![Register Screen](/register.png)

### Logout Screen
![LogOut Screen](/logout_tab.png)

### To-Do Screen
![To-Do Screen](/todo_Tab.png)

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
