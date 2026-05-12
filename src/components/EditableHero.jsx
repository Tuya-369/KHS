import { useState, useEffect } from "react";
import { db } from "../lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function EditableHero() {
  const [content, setContent] = useState({
    title: "Уншиж байна...",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const isAdmin = true; // Дараа нь нэвтрэх хэсэгтэй холбоно

  // Өгөгдлийг татаж ирэх
  useEffect(() => {
    async function fetchData() {
      const docRef = doc(db, "webContent", "homepage");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setContent(docSnap.data());
      }
    }
    fetchData();
  }, []);

  // Өөрчлөлтийг хадгалах
  const saveChange = async (field, value) => {
    setLoading(true);
    const docRef = doc(db, "webContent", "homepage");
    await updateDoc(docRef, { [field]: value });
    setLoading(false);
  };

  return (
    <div className="p-10">
      <h1
        contentEditable={isAdmin}
        suppressContentEditableWarning
        onBlur={(e) => saveChange("title", e.currentTarget.innerText)}
        className="text-5xl font-bold p-2 hover:outline-dashed outline-1 outline-gray-300"
      >
        {content.title}
      </h1>

      <p
        contentEditable={isAdmin}
        suppressContentEditableWarning
        onBlur={(e) => saveChange("description", e.currentTarget.innerText)}
        className="mt-4 text-xl p-2 hover:outline-dashed outline-1 outline-gray-300"
      >
        {content.description}
      </p>

      {loading && (
        <span className="text-sm text-blue-500">Хадгалж байна...</span>
      )}
    </div>
  );
}
