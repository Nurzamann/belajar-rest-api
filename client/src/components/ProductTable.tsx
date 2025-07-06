import React, { useEffect, useState } from "react";
import { api } from "../api";

type Product = { id: string; name: string; price: number };

const ProductTable: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName]     = useState("");
  const [price, setPrice]   = useState<number>(0);

  // --- READ (GET) ---
  useEffect(() => {
    api.get<Product[]>("/products").then(res => setProducts(res.data));
  }, []);

  // --- CREATE (POST) ---
  const addProduct = async () => {
    const res = await api.post<Product>("/products", { name, price });
    setProducts(p => [...p, res.data]);
    setName("");
    setPrice(0);
  };

  // --- DELETE ---
  const remove = async (id: string) => {
    await api.delete(`/products/${id}`);
    setProducts(p => p.filter(item => item.id !== id));
  };

  return (
    <section className="container mx-auto mt-24 px-4">
      <h2 className="text-2xl font-semibold mb-4">Product List</h2>

      {/* form add */}
      <div className="flex gap-2 mb-6">
        <input
          placeholder="Name"
          className="border p-2 rounded w-1/3"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          className="border p-2 rounded w-1/3"
          value={price}
          onChange={e => setPrice(Number(e.target.value))}
        />
        <button
          className="bg-blue-600 text-white px-4 rounded"
          onClick={addProduct}
        >
          Add
        </button>
      </div>

      {/* table */}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Price (IDR)</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id} className="text-center">
              <td className="border p-2">{p.name}</td>
              <td className="border p-2">{p.price.toLocaleString()}</td>
              <td className="border p-2">
                <button
                  onClick={() => remove(p.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {!products.length && (
            <tr>
              <td colSpan={3} className="p-4 text-gray-500 italic">
                No data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default ProductTable;
