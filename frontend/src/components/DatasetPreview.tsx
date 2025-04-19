"use client";
import { useState } from "react";
import { DatasetStats } from "@/types/dataset";

type Props = {
  data: DatasetStats;
};

export default function DatasetPreview({ data }: Props) {
  const [target, setTarget] = useState("");

  const handleNext = () => {
    if (!target) return alert("🚨 Choisis une colonne target !");
    console.log("Target sélectionnée :", target);
    // Enchaîne avec le training ici
  };

  return (
    <div className="p-6 text-cyan-400">
      <h2 className="text-2xl font-bold mb-6 text-center border-b border-cyan-600 pb-2">
        📊 Aperçu du Dataset
      </h2>

      <div className="bg-gray-900 p-4 rounded border border-cyan-600">
        <p className="mb-4">
          📐 <strong>Shape :</strong> {data.shape[0]} lignes × {data.shape[1]} colonnes
        </p>

        <h3 className="text-lg font-semibold mb-2">🧪 Colonnes :</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm mb-6">
          {data.columns.map((col, idx) => (
            <div key={idx} className="bg-black p-2 rounded border border-cyan-800">
              <p><strong>{col}</strong></p>
              <p>Type : {data.types[col]}</p>
              <p>Nulls : {data.nulls[col]}</p>
            </div>
          ))}
        </div>

        <label className="block mb-2 font-semibold">🎯 Choisir la colonne cible :</label>
        <select
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          className="bg-black border border-cyan-500 rounded px-4 py-2 mb-4 text-cyan-200 w-full"
        >
          <option value="">-- Sélectionne une colonne --</option>
          {data.columns.map((col) => (
            <option key={col} value={col}>{col}</option>
          ))}
        </select>

        <button
          onClick={handleNext}
          className="bg-cyan-500 text-black px-6 py-2 rounded hover:bg-cyan-400 transition"
        >
          Lancer l'entraînement 🚀
        </button>
      </div>
    </div>
  );
}
