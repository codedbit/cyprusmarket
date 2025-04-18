import Head from "next/head";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 text-gray-800 p-8">
      <Head>
        <title>Cyprusmarket – Buy, Sell & Trade in KKTC</title>
      </Head>

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Cyprusmarket</h1>
        <p className="text-xl mb-6">
          Your local online marketplace for everything in North Cyprus (KKTC). Buy & sell new or used items easily.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg">Browse Listings</a>
          <a href="#" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg">Post an Ad</a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {["Vehicles", "Real Estate", "Electronics", "Jobs", "Furniture", "Services", "Fashion", "Pets"].map((category) => (
            <div
              key={category}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition text-center"
            >
              <p className="font-medium text-gray-700">{category}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
