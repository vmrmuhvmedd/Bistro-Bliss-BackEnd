# Bistro Bliss Backend

## Overview
Bistro Bliss Backend is the server-side application that powers the Bistro Bliss platform, handling user authentication, restaurant management, orders, and other key functionalities. Built with **Node.js**, **Express.js**, and **MongoDB**, this backend provides a robust and scalable API for the frontend to interact with.

## Features
- **User Authentication & Authorization** (JWT-based authentication)
- **Restaurant & Menu Management** (CRUD operations for restaurants and menu items)
- **Order Management** (Place, track, and manage orders)
- **Secure API Endpoints** (Role-based access control)
- **Database Integration** (MongoDB with Mongoose ORM)

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **JWT Authentication**
- **Cloud Storage (Optional)**

## Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Setup
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/Bistro-Bliss-BackEnd.git
   cd Bistro-Bliss-BackEnd
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. **Start the Server**
   ```bash
   npm start
   ```

## API Endpoints
| Method | Endpoint          | Description              |
|--------|------------------|--------------------------|
| GET    | /api/restaurants | Fetch all restaurants   |
| POST   | /api/restaurants | Add a new restaurant    |
| GET    | /api/menu        | Fetch menu items        |
| POST   | /api/orders      | Place an order          |
| GET    | /api/orders/:id  | Get order details       |

## Contributing
Contributions are welcome! Feel free to submit a pull request.

## License
This project is licensed under the **MIT License**.

---

Feel free to modify the details as needed! 🚀
