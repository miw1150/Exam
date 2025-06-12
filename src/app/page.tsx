"use client";
import React, { useState } from "react";
import UserData from "./data/data.json";
import FormComponent from "./components/form";
import TableComponent from "./components/table";

// Define a TypeScript type for a User
export interface User {
  id: number;
  firstname: string;
  lastname: string;
  gender: string;
  score: number;
}

function App() {
  const [data, setData] = useState<User[]>(UserData);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleAddOrUpdate = (formData: User) => {
    if (formData.id) {
      // Update existing user
      setData((prev) =>
        prev.map((user) => (user.id === formData.id ? formData : user))
      );
    } else {
      // Add new user
      const newUser: User = {
        ...formData,
        id: data.length > 0 ? Math.max(...data.map((u) => u.id ?? 0)) + 1 : 1,
      };
      setData((prev) => [...prev, newUser]);
    }
    setEditingUser(null);
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
  };

  return (
    <div style={{ padding: 24 }}>
      <FormComponent onSubmit={handleAddOrUpdate} initialData={editingUser} />
      <TableComponent data={data} onEdit={handleEdit} />
    </div>
  );
}

export default App;
