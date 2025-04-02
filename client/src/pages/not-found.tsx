export default function NotFound() {
  return (
    <div className="container mx-auto py-20 px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        We couldn't find the page you're looking for.
      </p>
      <a
        href="/"
        className="inline-block px-6 py-3 bg-[#E64A19] text-white rounded-lg hover:bg-[#BF360C] transition-colors"
      >
        Return to Home
      </a>
    </div>
  );
}