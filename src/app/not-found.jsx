import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center max-w-xl">
        
        <h1 className="text-7xl font-bold text-white/90">404</h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 mt-3">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            Go Back Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFound;