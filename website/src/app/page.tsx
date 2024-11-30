'use client'
import { useState } from "react";
import { useGetDrinksQuery } from "./queries/drinks.query";

export default function Home() {

  const { drinks } = useGetDrinksQuery()

  const [data, setData] = useState(drinks);

  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ name: "", quantity: "" });

  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData({ name: item.name, quantity: item.quantity });
  };

  const handleSave = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, ...formData } : item
      )
    );
    setEditingId(null);
    setFormData({ name: "", quantity: "" });
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Cadastrar Drinks</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 text-center">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item.id} className="border-t border-gray-300">
                <td className="px-4 py-2">
                  {editingId === item.id ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border border-gray-300 p-2 w-full text-center"
                    />
                  ) : (
                    item.name
                  )}
                </td>
                <td className="px-4 py-2">
                  {editingId === item.id ? (
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="border border-gray-300 p-2 w-full text-center"
                    />
                  ) : (
                    item.quantity
                  )}
                </td>
                <td className="px-4 py-2">
                  {editingId === item.id ? (
                    <button
                      onClick={() => handleSave(item.id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(item)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
