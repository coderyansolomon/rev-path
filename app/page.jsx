import { createClient } from './supabaseServerClient';
import Link from 'next/link';

export default async function Products() {
  const supabase = createClient();
  const { data: products, error } = await supabase.from('products').select('*');

  if (error) {
    return <p className="text-red-500">Error loading products...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="mb-6">
        <Link
          href="/add-product"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add New Product
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.length === 0 ? (
          <p className="text-gray-400">No products available.</p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-gray-400 mt-2">{product.description}</p>
              <p className="text-green-400 mt-4 font-bold">
                Price: ${product.price.toFixed(2)}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
