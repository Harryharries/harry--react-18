
# Restaurant Order Search System

This project is a full-stack application that allows users to search and manage restaurant orders. It consists of a **frontend** built using Vite and a **backend** powered by Node.js with TypeScript.

## Prerequisites

To run this project locally, ensure you have the following installed on your system:

- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)
- **Git** (optional, for cloning the repository)

---

## Project Structure

- **Frontend**: The user interface built with Vite.
- **Backend**: The server-side application handling APIs and business logic.

---

## Running the Project Locally

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Setting Up the Frontend

1. Navigate to the `frontend` folder:

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

   The frontend will be accessible at [http://localhost:5173](http://localhost:5173).

---

### 3. Setting Up the Backend

1. Navigate to the `back-end` folder:

   ```bash
   cd ../back-end
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   The backend API will run on [http://localhost:3000](http://localhost:3000) (default port).


---
## Technologies Used

- **Frontend**:
  - Vite
  - TypeScript
  - React

- **Backend**:
  - Node.js
  - TypeScript
  - Express.js
  - MongoDB/PostgreSQL (adjust as per your database)

---

## Troubleshooting

### Common Issues:

1. **Port Conflicts**:
   - Ensure ports 3000 (backend) and 5173 (frontend) are not in use.
   - You can change the ports in `.env` or in the `vite.config.js` (frontend).

2. **Missing Environment Variables**:
   - Double-check your `.env` files.

---

## Future Improvements

- Add Docker support for simplified deployment.
- Set up CI/CD pipelines.
- Implement unit and integration tests.

---

## Contributing

Contributions are welcome! Please create a new branch and submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

Replace `<repository-url>` and `<repository-folder>` with your actual project URL and folder name, and adjust any specifics as needed for your project.
