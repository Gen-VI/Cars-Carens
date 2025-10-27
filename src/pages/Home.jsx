import React from "react";
import BookingForm from "../components/BookingForm";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav
          className="mx-auto max-w-7xl flex items-center justify-between p-4"
          aria-label="Global"
        >
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="ml-2 font-bold text-lg text-indigo-600">
                CarRental
              </span>
            </a>
          </div>

          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
            <a href="/" className="hover:text-indigo-600">
              Home
            </a>
            <a href="/cars" className="hover:text-indigo-600">
              Cars
            </a>
            <a href="/about" className="hover:text-indigo-600">
              About
            </a>
            <a href="/profile" className="hover:text-indigo-600">
              Profile
            </a>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:text-indigo-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Discount Banner */}
      <div className="bg-indigo-600 text-white text-sm text-center py-2 px-4">
        🔥 Get 20% off your first booking! Use code: <strong>WELCOME20</strong>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl p-4 sm:p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Book Your Ride
        </h1>
        <BookingForm />
      </main>
    </div>
  );
};

export default Home;
