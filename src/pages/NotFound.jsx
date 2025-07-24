import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-6xl font-semibold text-brand-accent mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-800">
        Page Not Found
      </h2>
      <p className="text-gray-500 mb-6">
        Sorry, the page you’re looking for doesn’t exist.
      </p>

      <Button
        buttonText="Go Back Home"
        onClick={() => navigate("/")}
        className="px-6 py-3 rounded-md"
      />
    </div>
  );
};

export default NotFound;
