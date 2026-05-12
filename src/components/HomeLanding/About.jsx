"use client"; // Client component байх шаардлагатай
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function About() {
  const [data, setData] = useState({ title: "", description: "" });
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "webContent", "about");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setData(docSnap.data());
      }
    };
    fetchData();
  }, []);

  const handleUpdate = async (field, value) => {
    const docRef = doc(db, "webContent", "about");
    await updateDoc(docRef, { [field]: value });
  };

  return (
    <section className="p-10">
      <h2
        contentEditable={isAdmin}
        suppressContentEditableWarning
        onBlur={(e) => handleUpdate("title", e.currentTarget.innerText)}
        className={`text-3xl font-bold ${isAdmin ? "hover:bg-gray-100 p-1 border-b border-dashed" : ""}`}
      >
        {data.title || "Гарчиг ачаалж байна..."}
      </h2>

      <p
        contentEditable={isAdmin}
        suppressContentEditableWarning
        onBlur={(e) => handleUpdate("description", e.currentTarget.innerText)}
        className={`mt-4 ${isAdmin ? "hover:bg-gray-100 p-1" : ""}`}
      >
        {data.description || "Тайлбар ачаалж байна..."}
      </p>
    </section>
  );
}
