````markdown
# Vehicle Transfer Module

This project is designed to manage a catalog of drivers and vehicles, allowing you to transfer a vehicle from one driver to another while maintaining a history of all transfers. The system is built with TypeScript, Next.js for the frontend, and Nest.js for the backend.

## Features

- Manage drivers and vehicles
- Transfer vehicles between drivers
- Maintain a transfer history
- Upload and handle files for profile photos, PUC certificates, and insurance certificates

## Tech Stack

- Frontend: [Next.js](https://nextjs.org/)
- Backend: [Nest.js](https://nestjs.com/)
- ORM: [TypeORM](https://typeorm.io/)
- Database: MySQL

## Project Setup

### Prerequisites

- Node.js
- npm
- MySQL

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/vehicle-transfer-module.git
   cd vehicle-transfer-module
   ```
````

2. **Install dependencies**

   Navigate to the root directory and run:

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=root
   DB_NAME=vehicle_transfer_module
   ```

### Running the Application

1. **Start the backend and frontend concurrently**

   The project uses `concurrently` to run both the backend and frontend together.:

   Start both environments with:

   ```bash
   npm run dev
   ```

   This command will run both the backend and frontend development servers concurrently.

2. **Start the backend and frontend individually**

### Backend (Nest.js)

1. **Navigate to the backend directory**

   ```bash
   cd backend
   ```

2. **Install backend dependencies**

   ```bash
   npm install
   ```

3. **Start the backend server**

   ```bash
   npm run start:dev
   ```

### Frontend (Next.js)

1. **Navigate to the frontend directory**

   ```bash
   cd frontend
   ```

2. **Install frontend dependencies**

   ```bash
   npm install
   ```

3. **Start the frontend server**

   ```bash
   npm run dev
   ```
