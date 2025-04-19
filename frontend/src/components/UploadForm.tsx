"use client";
import { useState } from "react";
import { DatasetStats } from "@/types/dataset";

type Props = {
  onUploadSuccess: (data: DatasetStats) => void;
};

export default function UploadForm({ onUploadSuccess }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:8000/preview-dataset", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data: DatasetStats = await res.json();
      setMessage("✅ CSV uploadé avec succès !");
      onUploadSuccess(data);
    } catch (err) {
      console.error(err);
      setMessage("❌ Erreur pendant l'upload.");
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 border border-cyan-500 rounded-lg p-6 shadow-lg w-full max-w-md bg-black mx-auto">
      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="file:bg-cyan-500 file:text-black file:px-4 file:py-2 file:rounded hover:cursor-pointer"
      />
      <button
        onClick={handleUpload}
        className="bg-cyan-500 text-black px-6 py-2 rounded hover:bg-cyan-400 transition"
      >
        Upload CSV
      </button>
      {message && <p className="text-sm mt-2 text-cyan-300">{message}</p>}
    </div>
  );
}
