import Link from "next/link";
import { addProductToSupabase } from "../actions/addProductToSupabase";

export default function AddProduct() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="w-full max-w-md mb-8">
        <Link
          href="/"
          className="text-blue-400 hover:text-blue-500 font-semibold text-sm flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>View Products</span>
        </Link>
      </div>

      <form
        action={addProductToSupabase}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-8">Add New Product</h1>

        <label className="block mb-4">
          <span className="text-gray-300 font-semibold">Title</span>
          <input
            type="text"
            name="title"
            className="w-full mt-2 p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter product title"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-300 font-semibold">Description</span>
          <textarea
            name="description"
            className="w-full mt-2 p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter product description"
            required
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-300 font-semibold">Price</span>
          <input
            type="number"
            name="price"
            step="0.01"
            className="w-full mt-2 p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter product price"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg text-white font-bold text-lg transition duration-200 ease-in-out transform hover:scale-105"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
