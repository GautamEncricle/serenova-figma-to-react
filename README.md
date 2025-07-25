# Project Setup and Start Guide

This project is a React application built with Vite. It uses Axios for API requests, with the backend URL configurable via environment variables.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- npm (comes with Node.js) or yarn

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd serenova-figma-to-react-main
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

## Environment Variables

The project uses Vite environment variables. To configure the backend API URL, create a `.env` file in the root directory with the following content:

```env
VITE_BACKEND_URL=http://localhost:3000
```

Replace the URL with your backend server address if different.

## Running the Development Server

Start the development server with:

```bash
npm run dev
# or
yarn dev
```

This will start the app and you can access it at `http://localhost:3000` (or the port shown in the terminal).

## Building for Production

To build the project for production, run:

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` folder.

## Additional Notes

- Axios instances are configured in `src/api/axiosInstance.js` with a default timeout of 10 seconds.
- The backend URL is set via the `VITE_BACKEND_URL` environment variable or defaults to `http://localhost:3000`.
- For file uploads, a separate Axios instance with `multipart/form-data` content type is available as `axiosFileInstance`.

## Troubleshooting

- Ensure your backend server is running and accessible at the URL specified in `VITE_BACKEND_URL`.
- If you encounter issues with environment variables, make sure to restart the development server after changes.

---
